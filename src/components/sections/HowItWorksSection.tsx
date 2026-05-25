 import { motion } from "framer-motion";
 import { Plug, Bot, TrendingUp } from "lucide-react";
 
 const steps = [
   {
     number: "01",
     icon: Plug,
     title: "Connect",
     description: "Import your leads from any source—website forms, social media, phone calls, or existing databases. RealCRM seamlessly integrates with 50+ tools.",
   },
   {
     number: "02",
     icon: Bot,
     title: "Automate",
     description: "Set up automated workflows that nurture leads, send follow-ups, and assign tasks to your team. Work smarter, not harder.",
   },
   {
     number: "03",
     icon: TrendingUp,
     title: "Grow",
     description: "Watch your conversion rates soar. Track every interaction, close deals faster, and scale your business with data-driven insights.",
   },
 ];
 
 export function HowItWorksSection() {
   return (
     <section className="py-24 bg-muted/50">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mb-16"
         >
           <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block">
             How It Works
           </span>
           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
             Three Simple Steps to{" "}
             <span className="gradient-text">Success</span>
           </h2>
           <p className="text-lg text-muted-foreground">
             Getting started with RealCRM is easy. Our streamlined onboarding process 
             gets you up and running in minutes, not days.
           </p>
         </motion.div>
 
         {/* Steps */}
         <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
           {/* Connection line */}
           <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-coral/0 via-coral to-coral/0" />
 
           {steps.map((step, index) => (
             <motion.div
               key={step.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.2 }}
               className="relative text-center"
             >
               {/* Step number with icon */}
               <div className="relative mx-auto mb-8">
                 <div className="w-24 h-24 rounded-full bg-card border-4 border-coral flex items-center justify-center mx-auto shadow-lg shadow-coral/20">
                   <step.icon className="w-10 h-10 text-coral" />
                 </div>
                 <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-coral text-accent-foreground font-bold text-lg flex items-center justify-center">
                   {step.number}
                 </span>
               </div>
 
               <h3 className="text-2xl font-bold text-foreground mb-4">
                 {step.title}
               </h3>
               <p className="text-muted-foreground max-w-sm mx-auto">
                 {step.description}
               </p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }