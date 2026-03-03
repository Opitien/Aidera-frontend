import LandingNavbar from "@/components/landing/LandingNavbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingNavbar />
      <main className="container mx-auto px-4 py-20 max-w-[850px]">
        <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 3, 2026</p>

        <section className="mb-8">
          <p className="text-muted-foreground leading-relaxed">
            At Aidera, your privacy is a core priority. This Privacy Policy explains how we collect, use, protect, and handle your personal information when you use the Aidera platform, including our website, applications, and related services. By using Aidera, you consent to the practices described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">1. Information We Collect</h2>

          <h3 className="font-display text-lg font-medium mb-2 mt-4">Account Data</h3>
          <p className="text-muted-foreground leading-relaxed">
            When you create an account, we collect your name, email address, and password (stored in encrypted form). This information is used to authenticate your identity and provide access to the platform.
          </p>

          <h3 className="font-display text-lg font-medium mb-2 mt-4">Chat Inputs</h3>
          <p className="text-muted-foreground leading-relaxed">
            Messages you send through the Aidera chat interface — including health questions and descriptions — are processed by our AI to generate responses. Chat data may be temporarily stored to maintain conversation context within a session.
          </p>

          <h3 className="font-display text-lg font-medium mb-2 mt-4">Uploaded Documents</h3>
          <p className="text-muted-foreground leading-relaxed">
            If you upload medical documents (such as lab results, prescriptions, or reports), these files are processed by our AI to provide explanations. Uploaded documents are encrypted in transit and at rest.
          </p>

          <h3 className="font-display text-lg font-medium mb-2 mt-4">Usage Data</h3>
          <p className="text-muted-foreground leading-relaxed">
            We automatically collect technical information such as device type, browser type, IP address, pages visited, session duration, and interaction patterns. This data helps us improve the platform's performance and user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">2. How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To provide, operate, and maintain the Aidera platform and its features.</li>
            <li>To process your health questions and document uploads and generate AI responses.</li>
            <li>To authenticate your account and ensure platform security.</li>
            <li>To improve our AI models, user interface, and overall service quality.</li>
            <li>To communicate with you about service updates, changes, or support inquiries.</li>
            <li>To comply with legal obligations and enforce our Terms of Service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">3. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement industry-standard security measures to protect your personal information, including AES-256 encryption for data at rest, TLS encryption for data in transit, role-based access controls, and regular security audits. While no method of electronic storage or transmission is 100% secure, we are committed to protecting your data to the highest practical standard.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">4. Data Sharing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Aidera does <strong className="text-foreground">not</strong> sell, rent, or trade your personal information to third parties. We may share data only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
            <li><strong className="text-foreground">Service Providers:</strong> Trusted third-party vendors who assist in operating the platform (e.g., hosting, analytics) under strict confidentiality agreements.</li>
            <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request.</li>
            <li><strong className="text-foreground">Safety:</strong> When necessary to protect the rights, safety, or property of Aidera, its users, or the public.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">5. Data Retention</h2>
          <p className="text-muted-foreground leading-relaxed">
            We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by law. Account data is retained while your account is active. Chat history and uploaded documents may be retained for a limited period to improve service quality, after which they are securely deleted. You may request deletion of your data at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">6. User Rights</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground">Access</strong> the personal data we hold about you.</li>
            <li><strong className="text-foreground">Correct</strong> inaccurate or incomplete personal information.</li>
            <li><strong className="text-foreground">Delete</strong> your personal data and account.</li>
            <li><strong className="text-foreground">Export</strong> your data in a portable format.</li>
            <li><strong className="text-foreground">Withdraw consent</strong> for data processing at any time.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            To exercise any of these rights, please contact us at <a href="mailto:support@aidera.ai" className="text-primary hover:underline">support@aidera.ai</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">7. Updates to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will notify you through the platform or via email. We encourage you to review this policy periodically. Your continued use of Aidera after any changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold mb-3">8. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact us at:
          </p>
          <p className="mt-3">
            <a href="mailto:support@aidera.ai" className="text-primary hover:underline font-medium">support@aidera.ai</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
