import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="gradient-hero pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full gradient-primary" />
              Now in Public Beta
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-800 leading-[1.1] tracking-tight text-foreground mb-6">
              AI Execution for{" "}
              <span className="text-gradient">Modern Businesses</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Automate workflows, manage data, and interact with AI tools from one powerful dashboard. Built for teams that move fast.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="text-base px-8 h-12">
                <Link to="/register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12">
                <Play className="mr-2 h-4 w-4" />
                Book Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl shadow-card border border-border p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent-foreground/30" />
                <div className="w-3 h-3 rounded-full bg-primary/40" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  {["12,847", "24", "98.2%"].map((val, i) => (
                    <div key={i} className="flex-1 bg-accent rounded-xl p-4">
                      <div className="text-xs text-muted-foreground mb-1">
                        {["Operations", "Workflows", "Uptime"][i]}
                      </div>
                      <div className="font-display text-lg font-bold text-foreground">{val}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-accent rounded-xl p-4 h-32 flex items-end gap-1">
                  {[40, 65, 55, 80, 70, 90, 60, 85, 75, 95, 70, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 gradient-primary rounded-sm opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex-1 bg-accent rounded-lg p-3">
                      <div className="h-2 w-2/3 bg-muted-foreground/20 rounded mb-2" />
                      <div className="h-2 w-full bg-muted-foreground/10 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-8 left-8 right-8 bottom-0 gradient-primary rounded-2xl opacity-10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
