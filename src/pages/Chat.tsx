import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Send, Plus, Upload, Shield, MessageSquare, PanelLeftClose, PanelLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AideraLogo from "@/components/AideraLogo";
import { mockChatMessages, mockAIResponses } from "@/data/mockData";
import useSEO from "@/hooks/useSEO";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
}

const TypingIndicator = () => (
  <div className="flex gap-3">
    <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
      <AideraLogo size={16} className="text-primary" />
    </div>
    <div className="bg-accent rounded-2xl rounded-tl-md px-4 py-3 flex items-center gap-1.5">
      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-typing-dot" />
      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-typing-dot" style={{ animationDelay: "0.2s" }} />
      <div className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-typing-dot" style={{ animationDelay: "0.4s" }} />
    </div>
  </div>
);

const mockConversationHistory: Conversation[] = [
  {
    id: "conv-1",
    title: "Blood test results",
    messages: mockChatMessages,
    createdAt: new Date(Date.now() - 3600000),
  },
  {
    id: "conv-2",
    title: "Headache symptoms",
    messages: [
      { id: "c2-1", role: "assistant", content: "Hello! I'm Aidera. How can I help you today?", timestamp: new Date(Date.now() - 86400000) },
      { id: "c2-2", role: "user", content: "I've been having persistent headaches for a week.", timestamp: new Date(Date.now() - 86300000) },
    ],
    createdAt: new Date(Date.now() - 86400000),
  },
  {
    id: "conv-3",
    title: "Vitamin D levels",
    messages: [
      { id: "c3-1", role: "assistant", content: "Hello! I'm Aidera. How can I help you today?", timestamp: new Date(Date.now() - 172800000) },
      { id: "c3-2", role: "user", content: "My vitamin D level is 18 ng/mL. Is that low?", timestamp: new Date(Date.now() - 172700000) },
    ],
    createdAt: new Date(Date.now() - 172800000),
  },
  {
    id: "conv-4",
    title: "Allergy medication",
    messages: [
      { id: "c4-1", role: "assistant", content: "Hello! I'm Aidera. How can I help you today?", timestamp: new Date(Date.now() - 259200000) },
      { id: "c4-2", role: "user", content: "What's the difference between cetirizine and loratadine?", timestamp: new Date(Date.now() - 259100000) },
    ],
    createdAt: new Date(Date.now() - 259200000),
  },
];

const Chat = () => {
  useSEO({
    title: "Chat – Aidera Health Assistant",
    description: "Chat with Aidera, your AI-powered health assistant. Ask health questions and get clear, supportive guidance.",
  });

  const [conversations, setConversations] = useState<Conversation[]>(mockConversationHistory);
  const [activeConvId, setActiveConvId] = useState<string>("conv-1");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const responseIndexRef = useRef(0);

  const activeConversation = conversations.find((c) => c.id === activeConvId);
  const messages = activeConversation?.messages ?? [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConvId ? { ...c, messages: [...c.messages, userMessage] } : c
      )
    );
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: mockAIResponses[responseIndexRef.current % mockAIResponses.length],
        timestamp: new Date(),
      };
      responseIndexRef.current += 1;
      setConversations((prev) =>
        prev.map((c) =>
          c.id === activeConvId ? { ...c, messages: [...c.messages, aiResponse] } : c
        )
      );
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleNewChat = () => {
    const newConv: Conversation = {
      id: `conv-${Date.now()}`,
      title: "New conversation",
      messages: mockChatMessages.map((m) => ({ ...m, id: `new-${m.id}`, timestamp: new Date() })),
      createdAt: new Date(),
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveConvId(newConv.id);
    responseIndexRef.current = 0;
  };

  const handleDeleteConv = (id: string) => {
    setConversations((prev) => prev.filter((c) => c.id !== id));
    if (activeConvId === id) {
      const remaining = conversations.filter((c) => c.id !== id);
      if (remaining.length > 0) setActiveConvId(remaining[0].id);
      else handleNewChat();
    }
  };

  const formatTime = (date: Date) => {
    const diff = Date.now() - date.getTime();
    if (diff < 3600000) return "Just now";
    if (diff < 86400000) return "Today";
    if (diff < 172800000) return "Yesterday";
    return `${Math.floor(diff / 86400000)}d ago`;
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return <p key={i} className="font-semibold mt-2 mb-1">{line.replace(/\*\*/g, "")}</p>;
      }
      if (line.startsWith("- **")) {
        const parts = line.replace("- **", "").split("**");
        return (
          <p key={i} className="ml-2 mb-0.5">
            • <span className="font-semibold">{parts[0]}</span>{parts[1] || ""}
          </p>
        );
      }
      if (line.startsWith("- ")) {
        return <p key={i} className="ml-2 mb-0.5">• {line.slice(2)}</p>;
      }
      if (line.startsWith("*") && line.endsWith("*")) {
        return <p key={i} className="text-muted-foreground text-xs mt-3 italic">{line.replace(/\*/g, "")}</p>;
      }
      if (line === "") return <br key={i} />;
      return <p key={i} className="mb-1">{line}</p>;
    });
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "h-full border-r border-border bg-card flex flex-col shrink-0 transition-all duration-300 overflow-hidden",
          sidebarOpen ? "w-64" : "w-0 md:w-0"
        )}
      >
        {/* Sidebar header */}
        <div className="h-14 flex items-center justify-between px-3 border-b border-border shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <AideraLogo size={20} className="text-primary" />
            <span className="font-display font-bold text-sm text-foreground">Aidera</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={() => setSidebarOpen(false)}
          >
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        </div>

        {/* New chat button */}
        <div className="px-3 py-3 shrink-0">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 text-sm"
            onClick={handleNewChat}
          >
            <Plus className="h-4 w-4" />
            New Chat
          </Button>
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto px-2 pb-3">
          <p className="text-xs font-medium text-muted-foreground px-2 mb-2">Recent</p>
          <div className="space-y-0.5">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActiveConvId(conv.id)}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left text-sm transition-colors group",
                  activeConvId === conv.id
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="truncate font-medium text-[13px]">{conv.title}</p>
                  <p className="text-xs text-muted-foreground">{formatTime(conv.createdAt)}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteConv(conv.id);
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 flex items-center justify-center rounded hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar footer */}
        <div className="px-3 py-3 border-t border-border shrink-0">
          <Link
            to="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            {!sidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() => setSidebarOpen(true)}
              >
                <PanelLeft className="h-4 w-4" />
              </Button>
            )}
            {!sidebarOpen && (
              <Link to="/" className="flex items-center gap-2">
                <AideraLogo size={22} className="text-primary" />
                <span className="font-display font-bold text-foreground">Aidera</span>
              </Link>
            )}
            {sidebarOpen && (
              <span className="text-sm font-medium text-foreground truncate">
                {activeConversation?.title || "New conversation"}
              </span>
            )}
          </div>
          <Button variant="outline" size="sm" onClick={handleNewChat} className="md:hidden">
            <Plus className="h-4 w-4" />
          </Button>
        </header>

        {/* Disclaimer banner */}
        <div className="bg-accent border-b border-border px-4 py-2 text-center shrink-0">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <Shield className="h-3 w-3" />
            Aidera provides general health guidance and does not replace licensed medical professionals.
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-2xl mx-auto space-y-5">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <AideraLogo size={16} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-md"
                      : "bg-accent text-foreground rounded-tl-md"
                  }`}
                >
                  {msg.role === "assistant" ? formatContent(msg.content) : msg.content}
                </div>
              </div>
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-border bg-card px-4 py-3 shrink-0">
          <form onSubmit={handleSend} className="max-w-2xl mx-auto flex gap-2">
            <Button type="button" variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground" title="Upload document (UI only)">
              <Upload className="h-5 w-5" />
            </Button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a health question..."
              className="flex-1 bg-accent border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              disabled={isTyping}
            />
            <Button type="submit" size="icon" disabled={!input.trim() || isTyping} className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
