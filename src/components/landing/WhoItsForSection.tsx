import { motion } from "framer-motion";
import { Users, Stethoscope } from "lucide-react";

const WhoItsForSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who It's For
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Individuals & Families
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Understand medical reports, keep track of family health records, and get quick answers to everyday health questions — all in plain language you can trust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
              <Stethoscope className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Healthcare Providers
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Use Aidera as a supplementary tool to help explain complex medical information to patients in a clear, empathetic, and accessible way.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
