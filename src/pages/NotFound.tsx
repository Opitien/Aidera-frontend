import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AideraLogo from "@/components/AideraLogo";
import useSEO from "@/hooks/useSEO";

const NotFound = () => {
  const location = useLocation();

  useSEO({
    title: "Page Not Found – Aidera",
    description: "The page you're looking for doesn't exist.",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center justify-center p-6 text-center">
      <Link to="/" className="inline-flex items-center gap-2 mb-10">
        <AideraLogo size={26} className="text-primary" />
        <span className="font-display text-xl font-bold text-foreground">Aidera</span>
      </Link>

      <div className="relative mb-6">
        <div className="font-display text-[7rem] sm:text-[9rem] font-bold text-gradient leading-none">
          404
        </div>
        <div className="absolute inset-0 blur-3xl opacity-30 gradient-primary rounded-full -z-10" />
      </div>

      <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
        This page took a sick day
      </h1>
      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
        The page <code className="bg-accent px-1.5 py-0.5 rounded text-xs text-foreground">{location.pathname}</code> doesn't exist or has been moved. Let's get you back to a healthy route.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button asChild size="lg">
          <Link to="/">
            <Home className="h-4 w-4 mr-2" /> Back to Home
          </Link>
        </Button>
        <Button variant="outline" size="lg" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
