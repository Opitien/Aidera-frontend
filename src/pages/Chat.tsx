import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Send, Plus, Upload, Shield, MessageSquare, PanelLeftClose, PanelLeft, Trash2, Search, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import AideraLogo from "@/components/AideraLogo";
import ThemeToggle from "@/components/ThemeToggle";
import useSEO from "@/hooks/useSEO";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

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
    description: "Chat with Aidera, your AI-powered health assistant.",
  });

  const { user, profile, signOut } = useAuth();
  const { toast } = useToast();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConvId, setActiveConvId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingConvs, setLoadingConvs] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConversation = conversations.find((c) => c.id === activeConvId);
  const messages = activeConversation?.messages ?? [];

  const filteredConversations = searchQuery.trim()
    ? conversations.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.messages.some((m) => m.content.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : conversations;

  // Load conversations from database
  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data: convs } = await supabase
        .from("conversations")
        .select("*")
        .order("updated_at", { ascending: false });

      if (!convs || convs.length === 0) {
        setLoadingConvs(false);
        return;
      }

      const { data: msgs } = await supabase
        .from("messages")
        .select("*")
        .in("conversation_id", convs.map((c) => c.id))
        .order("created_at", { ascending: true });

      const mapped: Conversation[] = convs.map((c) => ({
        id: c.id,
        title: c.title,
        createdAt: new Date(c.created_at),
        messages: (msgs ?? [])
          .filter((m) => m.conversation_id === c.id)
          .map((m) => ({
            id: m.id,
            role: m.role as "user" | "assistant",
            content: m.content,
            timestamp: new Date(m.created_at),
          })),
      }));

      setConversations(mapped);
      setActiveConvId(mapped[0]?.id ?? null);
      setLoadingConvs(false);
    };
    load();
  }, [user]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleNewChat = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from("conversations")
      .insert({ user_id: user.id, title: "New conversation" })
      .select()
      .single();

    if (error || !data) {
      toast({ title: "Failed to create conversation", variant: "destructive" });
      return;
    }

    const newConv: Conversation = {
      id: data.id,
      title: data.title,
      messages: [],
      createdAt: new Date(data.created_at),
    };
    setConversations((prev) => [newConv, ...prev]);
    setActiveConvId(newConv.id);
  };

  const handleDeleteConv = async (id: string) => {
    await supabase.from("conversations").delete().eq("id", id);
    setConversations((prev) => prev.filter((c) => c.id !== id));
    if (activeConvId === id) {
      const remaining = conversations.filter((c) => c.id !== id);
      if (remaining.length > 0) setActiveConvId(remaining[0].id);
      else setActiveConvId(null);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping || !user) return;

    let convId = activeConvId;

    // Auto-create conversation if none active
    if (!convId) {
      const { data, error } = await supabase
        .from("conversations")
        .insert({ user_id: user.id, title: input.trim().slice(0, 50) })
        .select()
        .single();
      if (error || !data) {
        toast({ title: "Failed to create conversation", variant: "destructive" });
        return;
      }
      const newConv: Conversation = {
        id: data.id,
        title: data.title,
        messages: [],
        createdAt: new Date(data.created_at),
      };
      setConversations((prev) => [newConv, ...prev]);
      setActiveConvId(data.id);
      convId = data.id;
    }

    const userContent = input.trim();
    setInput("");

    // Save user message to DB
    const { data: savedMsg } = await supabase
      .from("messages")
      .insert({ conversation_id: convId, user_id: user.id, role: "user", content: userContent })
      .select()
      .single();

    const userMessage: ChatMessage = {
      id: savedMsg?.id ?? Date.now().toString(),
      role: "user",
      content: userContent,
      timestamp: new Date(),
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === convId ? { ...c, messages: [...c.messages, userMessage] } : c
      )
    );

    // Update conversation title if first message
    const conv = conversations.find((c) => c.id === convId);
    if (!conv || conv.messages.length === 0) {
      const title = userContent.slice(0, 50);
      await supabase.from("conversations").update({ title }).eq("id", convId);
      setConversations((prev) =>
        prev.map((c) => (c.id === convId ? { ...c, title } : c))
      );
    }

    setIsTyping(true);

    // Build message history for AI context
    const currentMessages = conversations.find((c) => c.id === convId)?.messages ?? [];
    const aiMessages = [
      ...currentMessages.map((m) => ({ role: m.role, content: m.content })),
      { role: "user" as const, content: userContent },
    ];

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: aiMessages }),
      });

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) {
          toast({ title: "Rate limited", description: "Please wait a moment and try again.", variant: "destructive" });
        } else if (resp.status === 402) {
          toast({ title: "Usage limit reached", description: "Please add credits to continue.", variant: "destructive" });
        } else {
          toast({ title: "AI service error", variant: "destructive" });
        }
        setIsTyping(false);
        return;
      }

      // Stream the response
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantContent = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              const finalContent = assistantContent;
              setConversations((prev) =>
                prev.map((c) => {
                  if (c.id !== convId) return c;
                  const msgs = [...c.messages];
                  const last = msgs[msgs.length - 1];
                  if (last?.role === "assistant" && last.id === "streaming") {
                    msgs[msgs.length - 1] = { ...last, content: finalContent };
                  } else {
                    msgs.push({ id: "streaming", role: "assistant", content: finalContent, timestamp: new Date() });
                  }
                  return { ...c, messages: msgs };
                })
              );
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      // Save assistant message to DB
      const { data: savedAi } = await supabase
        .from("messages")
        .insert({ conversation_id: convId, user_id: user.id, role: "assistant", content: assistantContent })
        .select()
        .single();

      // Replace streaming message with final DB message
      setConversations((prev) =>
        prev.map((c) => {
          if (c.id !== convId) return c;
          return {
            ...c,
            messages: c.messages.map((m) =>
              m.id === "streaming" ? { ...m, id: savedAi?.id ?? Date.now().toString() } : m
            ),
          };
        })
      );
    } catch (err) {
      console.error("Chat error:", err);
      toast({ title: "Failed to get AI response", variant: "destructive" });
    } finally {
      setIsTyping(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
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
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[45] md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "h-full border-r border-border bg-card flex flex-col shrink-0 transition-all duration-300 overflow-hidden",
          "fixed md:relative z-50 md:z-auto",
          sidebarOpen ? "w-64" : "w-0"
        )}
      >
        <div className="h-14 flex items-center justify-between px-3 border-b border-border shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <AideraLogo size={20} className="text-primary" />
            <span className="font-display font-bold text-sm text-foreground">Aidera</span>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => setSidebarOpen(false)}>
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        </div>

        <div className="px-3 py-3 shrink-0">
          <Button variant="outline" className="w-full justify-start gap-2 text-sm" onClick={handleNewChat}>
            <Plus className="h-4 w-4" /> New Chat
          </Button>
        </div>

        <div className="px-3 pb-2 shrink-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chats..."
              className="w-full bg-accent border border-border rounded-lg pl-8 pr-8 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-3">
          <p className="text-xs font-medium text-muted-foreground px-2 mb-2">
            {searchQuery ? `Results (${filteredConversations.length})` : "Recent"}
          </p>
          <div className="space-y-0.5">
            {loadingConvs ? (
              <p className="text-xs text-muted-foreground px-3 py-4 text-center">Loading...</p>
            ) : filteredConversations.length === 0 ? (
              <p className="text-xs text-muted-foreground px-3 py-4 text-center">No chats yet</p>
            ) : (
              filteredConversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setActiveConvId(conv.id)}
                  className={cn(
                    "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left text-sm transition-colors group",
                    activeConvId === conv.id ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  )}
                >
                  <MessageSquare className="h-4 w-4 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium text-[13px]">{conv.title}</p>
                    <p className="text-xs text-muted-foreground">{formatTime(conv.createdAt)}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDeleteConv(conv.id); }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 flex items-center justify-center rounded hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="px-3 py-3 border-t border-border shrink-0 space-y-2">
          {profile && (
            <p className="text-xs text-muted-foreground truncate">{profile.name || profile.email}</p>
          )}
          <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors w-full">
            <LogOut className="h-3.5 w-3.5" /> Sign out
          </button>
        </div>
      </aside>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-border bg-card flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            {!sidebarOpen && (
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => setSidebarOpen(true)}>
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

        <div className="bg-accent border-b border-border px-4 py-2 text-center shrink-0">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <Shield className="h-3 w-3" />
            Aidera provides general health guidance and does not replace licensed medical professionals.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-2xl mx-auto space-y-5">
            {messages.length === 0 && !isTyping && (
              <div className="text-center py-16">
                <AideraLogo size={48} className="text-primary mx-auto mb-4" />
                <h2 className="font-display text-xl font-bold text-foreground mb-2">Welcome to Aidera</h2>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Ask any health question and I'll provide clear, educational information. Remember, I'm not a substitute for professional medical advice.
                </p>
              </div>
            )}
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

        <div className="border-t border-border bg-card px-4 py-3 shrink-0">
          <form onSubmit={handleSend} className="max-w-2xl mx-auto flex gap-2">
            <Button type="button" variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground" title="Upload document (coming soon)">
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
