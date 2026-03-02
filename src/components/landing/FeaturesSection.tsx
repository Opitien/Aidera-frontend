import { motion } from "framer-motion";
import { features } from "@/data/mockData";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Is Aidera?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aidera is your personal AI health companion — designed to help you navigate medical information with confidence and clarity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border p-6 lg:p-8 hover:shadow-card hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
