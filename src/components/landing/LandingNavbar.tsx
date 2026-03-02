import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-bold text-foreground tracking-tight">Aidera</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#safety" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Safety</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          <a href="#features" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#how-it-works" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="#safety" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>Safety</a>
          <a href="#faq" className="block text-sm text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>FAQ</a>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" asChild className="flex-1">
              <Link to="/login">Log In</Link>
            </Button>
            <Button asChild className="flex-1">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
