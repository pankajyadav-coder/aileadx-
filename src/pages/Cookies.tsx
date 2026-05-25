import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";

const Cookies = () => {
  return (
    <Layout>
      <PageBanner compact title="Cookie" accent="Policy" description="Last updated: May 25, 2026" />

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
                <p className="mb-4">
                  This Cookie Policy explains how AiLeadX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking technologies on our website, CRM platform, and services to improve user experience, security, and platform performance.
                </p>
                <p>
                  By using our website or services, you consent to the use of cookies as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device (computer, mobile, or tablet) when you visit a website. They help websites remember user preferences, login sessions, and activity to improve functionality and user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>

                <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="mb-2">
                  These cookies are necessary for the proper functioning of our platform and cannot be disabled. They help with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Secure login sessions</li>
                  <li>Account authentication</li>
                  <li>Website security</li>
                  <li>Navigation and core functionality</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-2">Performance & Analytics Cookies</h3>
                <p className="mb-2">These cookies collect anonymous usage information such as:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Pages visited</li>
                  <li>Time spent on the platform</li>
                  <li>User interactions</li>
                  <li>System performance</li>
                </ul>
                <p className="mb-4">This helps us improve our services and user experience.</p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Functionality Cookies</h3>
                <p className="mb-2">These cookies remember your preferences and settings, such as:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Language preferences</li>
                  <li>Dashboard settings</li>
                  <li>Saved login information</li>
                  <li>User customizations</li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground mb-2">Advertising & Marketing Cookies</h3>
                <p className="mb-2">These cookies may be used to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Deliver relevant advertisements</li>
                  <li>Measure marketing performance</li>
                  <li>Track campaign effectiveness</li>
                </ul>
                <p>
                  Some advertising cookies may be placed by third-party marketing providers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Cookies</h2>
                <p className="mb-4">AiLeadX uses cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep users securely logged in</li>
                  <li>Remember user preferences</li>
                  <li>Improve CRM functionality</li>
                  <li>Analyze traffic and user behavior</li>
                  <li>Enhance platform performance</li>
                  <li>Personalize user experience</li>
                  <li>Improve security and fraud prevention</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Cookies</h2>
                <p className="mb-4">
                  We may allow trusted third-party services such as analytics providers, payment gateways, and marketing tools to place cookies on your device.
                </p>
                <p>
                  These third parties operate under their own privacy and cookie policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Managing & Disabling Cookies</h2>
                <p className="mb-4">
                  Most browsers allow you to manage cookie settings. You can:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Delete existing cookies</li>
                  <li>Block or restrict cookies</li>
                  <li>Receive alerts before cookies are stored</li>
                </ul>
                <p>
                  Please note that disabling certain cookies may affect the functionality and performance of AiLeadX services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to This Cookie Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Updated versions will be posted on this page with a revised update date. Continued use of our services after updates means you accept the revised policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
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

export default Cookies;
