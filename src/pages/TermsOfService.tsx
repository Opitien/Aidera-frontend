import LandingNavbar from "@/components/landing/LandingNavbar";
import Footer from "@/components/landing/Footer";
import useSEO from "@/hooks/useSEO";

const TermsOfService = () => {
  useSEO({
    title: "Terms of Service – Aidera",
    description: "Read the Terms of Service for Aidera, an AI-powered health assistant. Understand your rights, responsibilities, and our limitation of liability.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar />
      <main className="container mx-auto px-4 py-20 max-w-[850px]">
        <h1 className="font-display text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 3, 2026</p>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing, browsing, or using the Aidera platform — including its website, applications, APIs, and all related services — you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of the platform immediately. We reserve the right to update these terms at any time, and your continued use of Aidera following any changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">2. Description of Service</h2>
          <p className="text-muted-foreground leading-relaxed">
            Aidera is an AI-powered health assistant that helps users understand medical documents, answer general health questions, and receive supportive, AI-generated guidance. The platform uses artificial intelligence to process user inputs — including text queries and uploaded medical documents — and generate informational responses. Aidera is designed to complement, not replace, professional medical care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">3. No Medical Practice</h2>
          <p className="text-muted-foreground leading-relaxed">
            Aidera does not practice medicine. The platform does not provide medical diagnoses, treatment recommendations, prescriptions, or clinical opinions. All AI-generated content is for informational and educational purposes only. No doctor-patient, therapist-client, or other professional healthcare relationship is established through the use of Aidera. Users must consult licensed healthcare providers for all medical decisions, treatment plans, and clinical advice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">4. User Responsibilities</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">As a user of Aidera, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use the platform only for lawful purposes and in accordance with these Terms.</li>
            <li>Provide accurate information when creating an account or interacting with the service.</li>
            <li>Not rely solely on Aidera for medical decisions, and always seek professional medical advice when necessary.</li>
            <li>Not attempt to reverse-engineer, exploit, or misuse the platform's AI capabilities.</li>
            <li>Not upload content that is illegal, harmful, defamatory, or violates the rights of others.</li>
            <li>Maintain the confidentiality of your account credentials and notify us of any unauthorized access.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">5. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content, designs, logos, trademarks, software, and technology associated with Aidera are the exclusive property of Aidera and its licensors. You may not copy, modify, distribute, sell, or create derivative works based on any part of the platform without prior written consent. User-generated content (such as chat inputs and uploaded documents) remains the property of the user, but you grant Aidera a limited license to process such content solely for the purpose of delivering the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed">
            To the fullest extent permitted by applicable law, Aidera, its founders, developers, employees, affiliates, and partners shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the platform. This includes, without limitation, any damages resulting from health-related decisions made based on AI-generated content. Aidera provides its service on an "as is" and "as available" basis, without warranties of any kind, either express or implied.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">7. Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            Aidera reserves the right to modify, update, or replace these Terms of Service at any time. Material changes will be communicated through the platform or via email. Your continued use of Aidera after the posting of revised terms constitutes your acceptance of those changes. We encourage you to review these terms periodically to stay informed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">8. Contact Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us at:
          </p>
          <p className="mt-3">
            <a href="mailto:hello@aidera.ai" className="text-primary hover:underline font-medium">hello@aidera.ai</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
