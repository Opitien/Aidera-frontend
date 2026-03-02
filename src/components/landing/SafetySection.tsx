import { motion } from "framer-motion";
import { Lock, Eye, ShieldCheck, AlertTriangle } from "lucide-react";

const safetyPoints = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All your health data is encrypted in transit and at rest using industry-standard protocols.",
  },
  {
    icon: Eye,
    title: "Privacy-First Design",
    description: "Your information is never shared with third parties. You own your data, always.",
  },
  {
    icon: ShieldCheck,
    title: "AI Assistance Only",
    description: "Aidera provides supportive guidance and information — it does not diagnose, prescribe, or treat.",
  },
  {
    icon: AlertTriangle,
    title: "Not a Medical Replacement",
    description: "Always consult a licensed healthcare professional for medical decisions. Aidera complements, never replaces.",
  },
];

const SafetySection = () => {
  return (
    <section id="safety" className="py-20 lg:py-28 gradient-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Safety & Privacy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trust is our foundation. Aidera is built with your safety and privacy at its core.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {safetyPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 bg-card rounded-2xl border border-border p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
