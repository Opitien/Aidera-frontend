import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Sparkles, Activity, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-primary/5 blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-card border border-border shadow-soft text-xs font-medium px-3 py-1.5 rounded-full mb-7 text-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              Now understanding medical jargon in plain English
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight text-foreground mb-6">
              Your medical results,{" "}
              <span className="relative inline-block">
                <span className="text-gradient">decoded.</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full text-primary/40"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 Q 50 2, 100 6 T 198 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-9 leading-relaxed">
              Aidera turns lab reports, prescriptions and confusing clinical notes into calm, clear explanations you actually understand — powered by AI, guided by care.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" asChild className="text-base px-7 h-12 shadow-elevated">
                <Link to="/register">
                  Start for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-7 h-12 bg-card">
                <Link to="/chat">Try the demo</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> No credit card
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-primary" /> Private &amp; encrypted
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> Educational only — not medical advice
              </span>
            </div>
          </motion.div>

          {/* Right: Distinctive "translator" visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Background layered cards */}
            <div className="absolute inset-0 bg-card/40 rounded-3xl border border-border rotate-3 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-card/60 rounded-3xl border border-border -rotate-2 -translate-x-2 translate-y-2" />

            {/* Main "report" card */}
            <div className="relative bg-card rounded-3xl shadow-elevated border border-border overflow-hidden">
              {/* Header strip */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-accent/40">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground tracking-wide uppercase">
                    Lab Report · Excerpt
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>

              {/* Original medical text */}
              <div className="px-6 pt-5 pb-4">
                <p className="text-[13px] font-mono leading-relaxed text-muted-foreground">
                  <span className="text-foreground font-semibold">Hemoglobin:</span> 13.8 g/dL &nbsp;
                  <span className="text-primary/70">[normal 13.5–17.5]</span>
                  <br />
                  <span className="text-foreground font-semibold">LDL-C:</span> 142 mg/dL &nbsp;
                  <span className="text-amber-600">[borderline high]</span>
                  <br />
                  <span className="text-foreground font-semibold">Fasting glucose:</span> 92 mg/dL
                </p>
              </div>

              {/* Divider with arrow */}
              <div className="relative flex items-center justify-center py-1">
                <div className="absolute inset-x-6 h-px bg-border" />
                <div className="relative bg-card px-3 py-1 rounded-full border border-border text-[10px] font-semibold text-muted-foreground tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-primary" />
                  Aidera Translation
                </div>
              </div>

              {/* AI plain-English response */}
              <div className="px-6 pt-4 pb-6 space-y-3">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    Your <strong>oxygen-carrying protein</strong> is in the healthy range — no signs of anemia.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="h-3.5 w-3.5 text-amber-600" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    Your <strong>&ldquo;bad&rdquo; cholesterol</strong> is slightly above target. Diet and exercise often help — worth mentioning to your doctor.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    Your <strong>blood sugar</strong> looks normal — no diabetes indicators here.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="hidden sm:flex absolute -top-4 -right-4 bg-card border border-border shadow-card rounded-2xl px-4 py-3 items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <Activity className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Avg. response
                </div>
                <div className="text-sm font-bold text-foreground">under 2 sec</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
