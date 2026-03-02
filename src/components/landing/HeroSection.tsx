import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, MessageCircle } from "lucide-react";
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
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Heart className="w-3.5 h-3.5" />
              Your Health, Simplified
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
              AI-Powered Health{" "}
              <span className="text-gradient">Guidance, Simplified.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Understand your medical records. Ask health questions. Get clear AI-powered explanations — all in a calm, supportive environment.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="lg" asChild className="text-base px-8 h-12">
                <Link to="/register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 h-12">
                <Link to="/login">Log In</Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
              <Shield className="inline h-3 w-3 mr-1 -mt-0.5" />
              Aidera provides AI-generated health insights and does not replace professional medical advice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl shadow-card border border-border p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <Heart className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-display font-semibold text-foreground">Aidera Assistant</span>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="h-3.5 w-3.5 text-accent-foreground" />
                  </div>
                  <div className="bg-accent rounded-2xl rounded-tl-md px-4 py-3 text-sm text-foreground leading-relaxed">
                    Hello! I'm here to help you understand your health better. You can ask me questions or upload a medical document.
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary rounded-2xl rounded-tr-md px-4 py-3 text-sm text-primary-foreground leading-relaxed max-w-[80%]">
                    Can you explain what my blood test results mean?
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="h-3.5 w-3.5 text-accent-foreground" />
                  </div>
                  <div className="bg-accent rounded-2xl rounded-tl-md px-4 py-3 text-sm text-foreground leading-relaxed">
                    Of course! Please share your results and I'll help you understand each value in simple terms. 💙
                  </div>
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
