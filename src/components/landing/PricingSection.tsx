import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/data/mockData";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 gradient-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border p-6 lg:p-8 ${
                plan.highlighted
                  ? "gradient-primary text-primary-foreground border-transparent shadow-elevated scale-[1.03]"
                  : "bg-card border-border text-foreground"
              }`}
            >
              <h3 className="font-display text-lg font-semibold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-5 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.highlighted ? "secondary" : "default"}
                className="w-full"
              >
                <Link to="/register">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
