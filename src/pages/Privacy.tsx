import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <Layout>
      <PageBanner compact title="Privacy" accent="Policy" description="Last updated: May 25, 2026" />

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
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  AiLeadX respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered CRM services, website, and applications. By using our services, you agree to the practices described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="mb-4">
                  We collect the following types of information to provide, improve, and secure our services:
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                <p className="mb-4">
                  Includes your name, email address, phone number, company name, and any details you provide while registering, contacting us, or using our platform.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Customer & Lead Data</h3>
                <p className="mb-2">Our CRM platform may store:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Customer details</li>
                  <li>Lead information</li>
                  <li>Chat conversations</li>
                  <li>Sales and follow-up records</li>
                  <li>Notes and attachments</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-2">Usage Data</h3>
                <p className="mb-4">
                  Data such as device information, browser type, IP address, login activity, interaction logs, and usage analytics to improve platform performance and user experience.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Cookies & Tracking Technologies</h3>
                <p className="mb-4">
                  We use cookies and similar technologies for personalization, analytics, login sessions, and security purposes.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Call Log</h3>
                <p className="mb-4">Used only to auto-log customer calls inside the CRM.</p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Phone State</h3>
                <p className="mb-4">Used for detecting incoming and outgoing calls for lead tracking purposes.</p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Contacts</h3>
                <p className="mb-4">
                  Used to display customer names in call records and CRM interactions.
                </p>

                <p>
                  All collected data is securely encrypted and never sold to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain CRM services</li>
                  <li>Automate customer communication</li>
                  <li>Improve AI-powered features</li>
                  <li>Personalize user experience</li>
                  <li>Provide customer support</li>
                  <li>Analyze platform performance</li>
                  <li>Enhance security and prevent misuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing & Disclosure</h2>
                <p className="mb-4">We do not sell your personal data.</p>
                <p className="mb-4">Your information may only be shared with:</p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Service Providers</h3>
                <p className="mb-4">
                  Trusted vendors and infrastructure providers that help us operate our services.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Legal Authorities</h3>
                <p className="mb-4">
                  When required by law or to protect rights, safety, and platform security.
                </p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Business Transfers</h3>
                <p>
                  If AiLeadX undergoes a merger, acquisition, or transfer of ownership.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p>
                  We use industry-standard security measures including encrypted connections, secure cloud infrastructure, and access controls to protect your information. However, no digital platform can guarantee complete security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights & Choices</h2>
                <p className="mb-4">You may:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access or update your information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent where applicable</li>
                  <li>Manage notification and communication preferences</li>
                  <li>Control app permissions through device settings</li>
                </ul>
                <p>To request any changes, contact us using the details below.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Children&apos;s Privacy</h2>
                <p>
                  AiLeadX services are not intended for children under 13 years of age, and we do not knowingly collect personal information from minors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
                <p>
                  Your data may be stored or processed in different countries depending on our service infrastructure. By using our services, you consent to such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Updated versions will be posted on our website or application. Continued use of our services means you accept the revised policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
                <p className="mb-2">
                  <strong className="text-foreground">AiLeadX</strong>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:support@aileadx.in" className="text-primary hover:underline">
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

export default Privacy;
