import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-3xl p-10 lg:p-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Step Into a New Era of Medical Assistance.
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
            Join thousands of people using Aidera to understand their health better — with clarity, empathy, and confidence.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-base px-8 h-12">
            <Link to="/register">
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
