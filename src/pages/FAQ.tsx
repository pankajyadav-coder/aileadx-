import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I get started with AiLeadX?",
        answer: "Getting started is easy! Simply sign up for a free 7-day trial, no credit card required. Our team will help you configure your account, import contacts, and set up your first pipeline in minutes.",
      },
      {
        question: "Can I import my existing contacts?",
        answer: "Yes! AiLeadX supports importing contacts from CSV files and Excel spreadsheets. We also support direct integrations with major lead portals so your leads flow in automatically.",
      },
      {
        question: "Is there a learning curve?",
        answer: "We've designed AiLeadX to be intuitive. Most teams get comfortable with the dashboard on day one. We also provide free onboarding resources, video tutorials, and dedicated training sessions .",
      },
    ],
  },
  {
    title: "Pricing & Billing",
    faqs: [
      {
        question: "How much does AiLeadX cost?",
        answer: "AiLeadX offers four plans to fit your scale: Starter (₹2,499/month), Growth (₹6,999/month), Pro (₹14,999/month), and Enterprise (Custom). All plans are available with quarterly and annual billing options.",
      },
      {
        question: "Can I change plans later?",
        answer: "Absolutely! You can upgrade, downgrade, or switch between Monthly, Quarterly, and Yearly billing cycles at any point directly from your dashboard.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept a wide variety of payment options including UPI (GPay, PhonePe, Paytm), Net Banking, corporate bank transfers, and all major Indian credit & debit cards.",
      },
      {
        question: "How does the extra user pricing work?",
        answer: "Each plan includes a set number of seats (Starter: 3 users, Growth: 10 users, Pro: 25 users). If you need more seats, you can add extra users starting from ₹499/user/month on Starter, dropping to ₹399/user/month on Growth, and ₹299/user/month on Pro.",
      },
    ],
  },
  {
    title: "Features & Integrations",
    faqs: [
      {
        question: "What integrations does AiLeadX support?",
        answer: "AiLeadX offers 10 direct third-party integrations with lead portals and advertising platforms, including Meta Leads (Facebook & Instagram ads), Google Ads, WhatsApp Business API, Telephony, QuikrHomes, SquareYards, Justdial, Magicbricks, 99acres, and Housing.com.",
      },
      {
        question: "Can I use WhatsApp with AiLeadX?",
        answer: "Yes! Our WhatsApp Business API integration allows you to send and receive WhatsApp messages directly from the CRM. Plus, you can deploy our AI Customer Assistant to answer customer inquiries 24/7 automatically on WhatsApp.",
      },
      {
        question: "Is there a mobile app?",
        answer: "AiLeadX is a fully cloud-based, responsive web platform rather than a standalone mobile app. It is designed to work beautifully on both desktop and mobile browsers, ensuring you have complete access to your CRM, pipelines, and chat inbox on the go from any device without any installation.",
      },
      {
        question: "Can I customize fields and pipelines?",
        answer: "Absolutely! AiLeadX is highly customizable. You can customize pipeline stages, lead assignments, team permissions, and product sharing options to fit your industry workflows.",
      },
    ],
  },
  {
    title: "Security & Privacy",
    faqs: [
      {
        question: "Is my data secure?",
        answer: "Security is our top priority. AiLeadX uses industry-standard encryption protocols and secure cloud databases. Your lead data is backed up daily and stored in highly secure, redundant data centers to prevent unauthorized access.",
      },
      {
        question: "Do you sell my data?",
        answer: "Never. Your data belongs entirely to you. We do not sell, share, or monetize your lead or customer information in any way. Read our Privacy Policy for full details.",
      },
      {
        question: "Can I export my data?",
        answer: "Yes, you can export your data at any time from your dashboard. We support standard formats like CSV, giving you full control and portability of your lead history.",
      },
    ],
  },
  {
    title: "Support",
    faqs: [
      {
        question: "What kind of support do you offer?",
        answer: "We offer professional support across all plans.",
      },
      {
        question: "Do you offer training?",
        answer: "Yes! We offer onboarding guides, product documentation, and video tutorials. Personalized team training sessions are available on our higher-tier plans.",
      },
      {
        question: "How do I contact support?",
        answer: "You can contact our support team via email at support@aileadx.in, or reach out to us through our website's contact form. If you're on a priority plan, you can also reach us via your priority support channels.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      <PageBanner
        label="FAQ"
        title="Frequently Asked"
        accent="Questions?"
        description="Find answers to common questions about AiLeadX. Can't find what you're looking for? Contact our support team."
      />

      {/* FAQ Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-coral" />
                {category.title}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-coral/30"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-coral py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/demo">Book a Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;