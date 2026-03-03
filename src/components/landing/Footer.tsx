import { Link } from "react-router-dom";
import AideraLogo from "@/components/AideraLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <AideraLogo size={22} className="text-primary" />
              <span className="font-display text-xl font-bold text-foreground">Aidera</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered health guidance to help you understand your medical information with clarity and confidence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#safety" className="hover:text-foreground transition-colors">Safety</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:hello@aidera.ai" className="hover:text-foreground transition-colors">hello@aidera.ai</a></li>
              <li><a href="mailto:support@aidera.ai" className="hover:text-foreground transition-colors">support@aidera.ai</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram: @aidera_ai</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/medical-disclaimer" className="hover:text-foreground transition-colors">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground mb-2">
            © 2026 Aidera. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto">
            Aidera provides AI-generated health insights for informational purposes only. It does not provide medical diagnoses, treatment plans, or prescriptions. Always consult a licensed healthcare professional for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
