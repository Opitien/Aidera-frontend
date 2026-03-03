import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Send, Plus, Upload, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import AideraLogo from "@/components/AideraLogo";
import { mockChatMessages, mockAIResponses } from "@/data/mockData";
import useSEO from "@/hooks/useSEO";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
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

const Chat = () => {
  useSEO({
    title: "Chat – Aidera Health Assistant",
    description: "Chat with Aidera, your AI-powered health assistant. Ask health questions and get clear, supportive guidance.",
  });

  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const responseIndexRef = useRef(0);

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

    setMessages((prev) => [...prev, userMessage]);
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
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleNewChat = () => {
    setMessages(mockChatMessages);
    responseIndexRef.current = 0;
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
    <div className="h-screen flex flex-col bg-background">
      {/* Top bar */}
      <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4 shrink-0">
        <Link to="/" className="flex items-center gap-2">
          <AideraLogo size={22} className="text-primary" />
          <span className="font-display font-bold text-foreground">Aidera</span>
        </Link>
        <Button variant="outline" size="sm" onClick={handleNewChat}>
          <Plus className="h-4 w-4 mr-1" />
          New Chat
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
  );
};

export default Chat;
