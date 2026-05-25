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
         question: "How do I get started with RealCRM?",
         answer: "Getting started is easy! Simply sign up for a free 14-day trial, no credit card required. Our onboarding wizard will guide you through setting up your account, importing contacts, and creating your first pipeline in under 10 minutes.",
       },
       {
         question: "Can I import my existing contacts?",
         answer: "Yes! RealCRM supports importing contacts from CSV files, Excel spreadsheets, and direct integrations with popular tools like Google Contacts, Outlook, and other CRM platforms. Our import wizard handles duplicates automatically.",
       },
       {
         question: "Is there a learning curve?",
         answer: "We've designed RealCRM to be intuitive from day one. Most users are up and running within an hour. We also provide free onboarding calls, video tutorials, and a comprehensive help center to ensure your success.",
       },
     ],
   },
   {
     title: "Pricing & Billing",
     faqs: [
       {
         question: "How much does RealCRM cost?",
         answer: "RealCRM offers three plans: Starter at $29/month, Professional at $79/month, and Enterprise at $199/month. All plans include a 14-day free trial. Annual billing saves you 20%.",
       },
       {
         question: "Can I change plans later?",
         answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. Downgrades take effect at the start of your next billing cycle.",
       },
       {
         question: "What payment methods do you accept?",
         answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. Enterprise customers can also pay by invoice.",
       },
       {
         question: "Is there a refund policy?",
         answer: "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied within the first 30 days, contact us for a full refund, no questions asked.",
       },
     ],
   },
   {
     title: "Features & Integrations",
     faqs: [
       {
         question: "What integrations does RealCRM support?",
         answer: "RealCRM integrates with 50+ popular tools including WhatsApp Business, Gmail, Outlook, Google Calendar, Zoom, Stripe, Zapier, and many more. We're constantly adding new integrations based on customer requests.",
       },
       {
         question: "Can I use WhatsApp with RealCRM?",
         answer: "Yes! Our WhatsApp Business API integration lets you send and receive WhatsApp messages directly from RealCRM. You can also create automated WhatsApp sequences for lead nurturing.",
       },
       {
         question: "Is there a mobile app?",
         answer: "Yes, RealCRM has native iOS and Android apps that give you full access to your CRM on the go. View contacts, update deals, log calls, and receive notifications from anywhere.",
       },
       {
         question: "Can I customize fields and pipelines?",
         answer: "Absolutely! RealCRM is fully customizable. Create custom fields, pipeline stages, tags, and automation rules to match your unique business processes.",
       },
     ],
   },
   {
     title: "Security & Privacy",
     faqs: [
       {
         question: "Is my data secure?",
         answer: "Security is our top priority. RealCRM uses bank-level encryption (256-bit SSL), regular security audits, and SOC 2 compliance. Your data is backed up daily and stored in secure, redundant data centers.",
       },
       {
         question: "Do you sell my data?",
         answer: "Never. Your data belongs to you. We do not sell, share, or monetize your data in any way. Read our Privacy Policy for complete details on how we protect your information.",
       },
       {
         question: "Can I export my data?",
         answer: "Yes, you can export all your data at any time in CSV or JSON format. We believe in data portability—you should always have full control over your information.",
       },
     ],
   },
   {
     title: "Support",
     faqs: [
       {
         question: "What kind of support do you offer?",
         answer: "All plans include email support with 24-hour response time. Professional plans get priority support with 4-hour response. Enterprise customers receive 24/7 support with a dedicated account manager.",
       },
       {
         question: "Do you offer training?",
         answer: "Yes! We offer free onboarding webinars, video tutorials, and a comprehensive help center. Professional and Enterprise plans include personalized training sessions for your team.",
       },
       {
         question: "How do I contact support?",
         answer: "You can reach our support team via email at support@growcrm.com, through the in-app chat, or by phone during business hours. Enterprise customers have access to their dedicated support line.",
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
         description="Find answers to common questions about RealCRM. Can't find what you're looking for? Contact our support team."
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