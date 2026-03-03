import LandingNavbar from "@/components/landing/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhoItsForSection from "@/components/landing/WhoItsForSection";
import SafetySection from "@/components/landing/SafetySection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import useSEO from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Aidera – AI-Powered Health Assistant",
    description: "Aidera is an AI-powered healthcare assistant that simplifies medical information through AI-guided support and a secure conversational interface.",
  });

  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <SafetySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
