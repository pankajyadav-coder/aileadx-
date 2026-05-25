 import { Layout } from "@/components/layout/Layout";
 import { PageBanner } from "@/components/layout/PageBanner";
 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import {
   Users,
   BarChart3,
   MessageSquare,
   Zap,
   Shield,
   Clock,
   Phone,
   Mail,
   Calendar,
   FileText,
   Globe,
   Lock,
   ArrowRight,
   Check,
 } from "lucide-react";
 
 const mainFeatures = [
   {
     icon: Users,
     title: "Lead Management",
     description: "Capture leads from any source and organize them in a powerful CRM. Never lose track of a potential customer again.",
     benefits: ["Multi-channel lead capture", "Lead scoring & qualification", "Duplicate detection", "Custom fields & tags"],
   },
   {
     icon: BarChart3,
     title: "Sales Pipeline",
     description: "Visualize your entire sales process with customizable stages. Track deals from first contact to closed-won.",
     benefits: ["Drag-and-drop kanban", "Deal probability tracking", "Revenue forecasting", "Activity timeline"],
   },
   {
     icon: MessageSquare,
     title: "Omnichannel Communication",
     description: "Connect with leads through WhatsApp, SMS, email, and phone—all from one unified inbox.",
     benefits: ["WhatsApp Business API", "SMS campaigns", "Email templates", "Call logging"],
   },
   {
     icon: Zap,
     title: "Workflow Automation",
     description: "Automate repetitive tasks and focus on what matters. Set triggers and actions for seamless workflows.",
     benefits: ["Visual workflow builder", "Automated follow-ups", "Task assignment rules", "Email sequences"],
   },
   {
     icon: Shield,
     title: "Analytics & Reporting",
     description: "Make data-driven decisions with real-time dashboards and customizable reports.",
     benefits: ["Real-time dashboards", "Custom reports", "Team performance", "Revenue analytics"],
   },
   {
     icon: Calendar,
     title: "Appointment Scheduling",
     description: "Let leads book meetings directly. Sync with your calendar and send automated reminders.",
     benefits: ["Online booking page", "Calendar sync", "Automated reminders", "Buffer time settings"],
   },
 ];
 
 const additionalFeatures = [
   { icon: Phone, title: "Click-to-Call" },
   { icon: Mail, title: "Email Tracking" },
   { icon: FileText, title: "Document Management" },
   { icon: Globe, title: "Website Integration" },
   { icon: Lock, title: "Role-Based Access" },
   { icon: Clock, title: "Activity History" },
 ];
 
 const Features = () => {
   return (
     <Layout>
       <PageBanner
         label="Features"
         title="Powerful Features for"
         accent="Modern Sales Teams"
         description="Everything you need to capture leads, automate workflows, and close more deals—all in one platform."
       >
         <Button variant="hero" size="xl" asChild>
           <Link to="/demo">
             See It in Action
             <ArrowRight className="w-5 h-5 ml-2" />
           </Link>
         </Button>
       </PageBanner>
 
       {/* Main Features */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-24">
             {mainFeatures.map((feature, index) => (
               <motion.div
                 key={feature.title}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className={`grid lg:grid-cols-2 gap-12 items-center ${
                   index % 2 === 1 ? "lg:flex-row-reverse" : ""
                 }`}
               >
                 <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                   <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mb-6">
                     <feature.icon className="w-8 h-8 text-coral" />
                   </div>
                   <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                     {feature.title}
                   </h2>
                   <p className="text-lg text-muted-foreground mb-6">
                     {feature.description}
                   </p>
                   <ul className="space-y-3">
                     {feature.benefits.map((benefit) => (
                       <li key={benefit} className="flex items-center gap-3">
                         <Check className="w-5 h-5 text-coral" />
                         <span className="text-foreground">{benefit}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div className={`${index % 2 === 1 ? "lg:order-1" : ""} bg-muted/50 rounded-2xl p-8 aspect-video flex items-center justify-center`}>
                   <feature.icon className="w-32 h-32 text-coral/20" />
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Additional Features */}
       <section className="py-24 bg-muted/50">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
               And So Much More
             </h2>
             <p className="text-lg text-muted-foreground">
               Discover all the features that make RealCRM the #1 choice for growing businesses.
             </p>
           </motion.div>
 
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
             {additionalFeatures.map((feature, index) => (
               <motion.div
                 key={feature.title}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05 }}
                 className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-all"
               >
                 <feature.icon className="w-8 h-8 text-coral mx-auto mb-3" />
                 <p className="font-medium text-foreground text-sm">{feature.title}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       <PageBanner
         band
         title="Ready to Experience"
         accent="These Features?"
         description="Start your free trial today and see why thousands of businesses choose RealCRM."
       >
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Button variant="hero" size="xl" asChild>
             <Link to="/demo">Book a Demo</Link>
           </Button>
           <Button variant="hero-outline" size="xl" asChild>
             <Link to="/pricing">View Pricing</Link>
           </Button>
         </div>
       </PageBanner>
     </Layout>
   );
 };
 
 export default Features;