import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <Layout>
      <PageBanner compact title="Terms of" accent="Service" description="Last updated: May 25, 2026" />

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using AiLeadX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) and its services, including our website, CRM platform, AI automation tools, and applications, you agree to be bound by these Terms of Service (&quot;Terms&quot;) and our Privacy Policy. If you do not agree with these Terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <p className="mb-4">
                  AiLeadX provides AI-powered CRM and automation solutions designed to help businesses manage leads, automate communication, track customer interactions, and improve sales workflows.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may need to create an account to access certain features.</li>
                  <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                  <li>You agree to provide accurate and updated information during registration.</li>
                  <li>You are responsible for all activities conducted through your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. User Conduct</h2>
                <p className="mb-4">When using AiLeadX services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Use the platform for spam or illegal activities</li>
                  <li>Send unauthorized or abusive communications</li>
                  <li>Attempt unauthorized access to systems or accounts</li>
                  <li>Interfere with platform security or functionality</li>
                  <li>Upload harmful, misleading, or infringing content</li>
                  <li>Misuse AI automation features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
                <p className="mb-4">
                  All software, branding, AI systems, logos, designs, content, and technology provided by AiLeadX are owned by or licensed to us.
                </p>
                <p className="mb-4">You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copy or reproduce the platform</li>
                  <li>Reverse engineer the software</li>
                  <li>Resell services without permission</li>
                  <li>Use AiLeadX branding without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
                <p className="mb-4">AiLeadX may integrate with third-party services such as:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>WhatsApp Business API</li>
                  <li>Email providers</li>
                  <li>Payment gateways</li>
                  <li>Cloud hosting providers</li>
                </ul>
                <p>
                  We are not responsible for third-party services, outages, policies, or content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Payments & Subscriptions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Paid plans must be renewed on time to continue access.</li>
                  <li>Subscription fees are generally non-refundable unless stated otherwise.</li>
                  <li>Custom development or setup charges are non-refundable.</li>
                  <li>Failure to complete payments may result in suspension of services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Disclaimers & Limitation of Liability</h2>
                <p className="mb-4">
                  Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind.
                </p>
                <p className="mb-4">AiLeadX does not guarantee:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Uninterrupted service availability</li>
                  <li>Error-free automation</li>
                  <li>Accuracy of AI-generated responses</li>
                  <li>Specific business or sales results</li>
                </ul>
                <p>
                  To the maximum extent permitted by law, AiLeadX shall not be liable for indirect, incidental, or consequential damages arising from use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Indemnification</h2>
                <p className="mb-4">
                  You agree to indemnify and hold harmless AiLeadX, its affiliates, employees, and partners from any claims, damages, liabilities, or expenses resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your misuse of the platform</li>
                  <li>Violation of these Terms</li>
                  <li>Violation of applicable laws or third-party rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Termination</h2>
                <p className="mb-4">
                  We reserve the right to suspend or terminate accounts without prior notice if users:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate these Terms</li>
                  <li>Misuse the platform</li>
                  <li>Harm platform security or reputation</li>
                  <li>Engage in fraudulent or abusive activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. Updated versions will be posted on our website or applications. Continued use of AiLeadX services after updates means you accept the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
                <p className="mb-2">
                  <strong className="text-foreground">AiLeadX</strong>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:support@aileadx.com" className="text-primary hover:underline">
                    support@aileadx.in
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://www.aileadx.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.aileadx.in
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
