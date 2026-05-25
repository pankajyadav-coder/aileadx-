 import { Layout } from "@/components/layout/Layout";
 import { PageBanner } from "@/components/layout/PageBanner";
 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { Check, Zap, Star, Crown } from "lucide-react";
 
 const plans = [
   {
     name: "Starter",
     description: "Perfect for solo entrepreneurs and small teams getting started.",
     price: 29,
     period: "/month",
     icon: Zap,
     features: [
       "Up to 1,000 contacts",
       "2 team members",
       "Email integration",
       "Basic pipeline",
       "Mobile app access",
       "Email support",
     ],
     cta: "Start Free Trial",
     popular: false,
   },
   {
     name: "Professional",
     description: "For growing teams that need advanced automation and insights.",
     price: 79,
     period: "/month",
     icon: Star,
     features: [
       "Up to 10,000 contacts",
       "10 team members",
       "WhatsApp & SMS integration",
       "Advanced pipeline & automation",
       "Custom reports & dashboards",
       "Calendar scheduling",
       "Priority support",
       "API access",
     ],
     cta: "Start Free Trial",
     popular: true,
   },
   {
     name: "Enterprise",
     description: "For large organizations with custom needs and dedicated support.",
     price: 199,
     period: "/month",
     icon: Crown,
     features: [
       "Unlimited contacts",
       "Unlimited team members",
       "All Professional features",
       "Custom integrations",
       "Advanced security & SSO",
       "Dedicated account manager",
       "Custom training & onboarding",
       "SLA guarantee",
     ],
     cta: "Contact Sales",
     popular: false,
   },
 ];
 
 const faqs = [
   {
     question: "Can I try RealCRM before committing?",
     answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required.",
   },
   {
     question: "Can I change plans later?",
     answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
   },
   {
     question: "Is there a discount for annual billing?",
     answer: "Yes! Save 20% when you choose annual billing. Contact our sales team for details.",
   },
   {
     question: "What payment methods do you accept?",
     answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
   },
 ];
 
 const Pricing = () => {
   return (
     <Layout>
       <PageBanner
         label="Pricing"
         title="Simple, Transparent"
         accent="Pricing"
         description="Choose the plan that fits your business. All plans include a 14-day free trial."
       />
 
       {/* Pricing Cards */}
       <section className="py-24 bg-background -mt-12">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {plans.map((plan, index) => (
               <motion.div
                 key={plan.name}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className={`relative bg-card rounded-2xl border ${
                   plan.popular
                     ? "border-coral shadow-xl shadow-coral/10 scale-105"
                     : "border-border"
                 } p-8 flex flex-col`}
               >
                 {plan.popular && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-coral text-accent-foreground text-sm font-semibold rounded-full">
                     Most Popular
                   </div>
                 )}
 
                 <div className="mb-6">
                   <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                     <plan.icon className="w-6 h-6 text-coral" />
                   </div>
                   <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                   <p className="text-muted-foreground mt-2">{plan.description}</p>
                 </div>
 
                 <div className="mb-6">
                   <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                   <span className="text-muted-foreground">{plan.period}</span>
                 </div>
 
                 <ul className="space-y-3 mb-8 flex-1">
                   {plan.features.map((feature) => (
                     <li key={feature} className="flex items-center gap-3">
                       <Check className="w-5 h-5 text-coral flex-shrink-0" />
                       <span className="text-muted-foreground">{feature}</span>
                     </li>
                   ))}
                 </ul>
 
                 <Button
                   variant={plan.popular ? "accent" : "outline"}
                   size="lg"
                   className="w-full"
                   asChild
                 >
                   <Link to="/demo">{plan.cta}</Link>
                 </Button>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* FAQ */}
       <section className="py-24 bg-muted/50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
               Frequently Asked Questions
             </h2>
             <p className="text-lg text-muted-foreground">
               Have questions? We've got answers.
             </p>
           </motion.div>
 
           <div className="max-w-3xl mx-auto space-y-6">
             {faqs.map((faq, index) => (
               <motion.div
                 key={faq.question}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-card p-6 rounded-xl border border-border"
               >
                 <h3 className="text-lg font-semibold text-foreground mb-2">
                   {faq.question}
                 </h3>
                 <p className="text-muted-foreground">{faq.answer}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       <PageBanner
         band
         title="Still Have"
         accent="Questions?"
         description="Our team is here to help you find the perfect plan for your business."
       >
         <Button variant="hero" size="xl" asChild>
           <Link to="/contact">Talk to Sales</Link>
         </Button>
       </PageBanner>
     </Layout>
   );
 };
 
 export default Pricing;