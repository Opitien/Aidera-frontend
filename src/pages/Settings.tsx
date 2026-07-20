import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Palette, Shield, LogOut, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AideraLogo from "@/components/AideraLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import useSEO from "@/hooks/useSEO";

const Settings = () => {
  useSEO({
    title: "Settings – Aidera",
    description: "Manage your Aidera account, profile and preferences.",
  });

  const { user, profile, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (profile?.name) setName(profile.name);
  }, [profile]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ name })
      .eq("user_id", user.id);
    setSaving(false);
    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Profile updated" });
    }
  };

  const handlePasswordReset = async () => {
    if (!user?.email) return;
    const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) {
      toast({ title: "Reset failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Reset email sent", description: "Check your inbox to set a new password." });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild className="h-8 w-8">
              <Link to="/chat"><ArrowLeft className="h-4 w-4" /></Link>
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <AideraLogo size={22} className="text-primary" />
              <span className="font-display font-bold text-foreground">Aidera</span>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto max-w-2xl px-4 py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-1">Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your account and preferences</p>
        </div>

        {/* Profile */}
        <section className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-soft">
          <div className="flex items-center gap-2 mb-5">
            <User className="h-4 w-4 text-primary" />
            <h2 className="font-display font-semibold text-foreground">Profile</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Display name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={user?.email || ""} disabled className="bg-muted" />
              <p className="text-xs text-muted-foreground">Email cannot be changed</p>
            </div>
            <Button onClick={handleSave} disabled={saving || !name.trim()}>
              {saving ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </section>

        {/* Appearance */}
        <section className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-soft">
          <div className="flex items-center gap-2 mb-5">
            <Palette className="h-4 w-4 text-primary" />
            <h2 className="font-display font-semibold text-foreground">Appearance</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Theme</p>
              <p className="text-xs text-muted-foreground">Switch between light and dark mode</p>
            </div>
            <ThemeToggle />
          </div>
        </section>

        {/* Security */}
        <section className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-soft">
          <div className="flex items-center gap-2 mb-5">
            <Shield className="h-4 w-4 text-primary" />
            <h2 className="font-display font-semibold text-foreground">Security</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">Password</p>
                <p className="text-xs text-muted-foreground">Send a reset link to your email</p>
              </div>
              <Button variant="outline" size="sm" onClick={handlePasswordReset}>
                Reset password
              </Button>
            </div>
          </div>
        </section>

        {/* Danger zone */}
        <section className="bg-card border border-destructive/30 rounded-2xl p-6 shadow-soft">
          <div className="flex items-center gap-2 mb-5">
            <Trash2 className="h-4 w-4 text-destructive" />
            <h2 className="font-display font-semibold text-foreground">Account</h2>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" /> Sign out
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Settings;
