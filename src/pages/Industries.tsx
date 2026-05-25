 import { Layout } from "@/components/layout/Layout";
 import { PageBanner } from "@/components/layout/PageBanner";
 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 import { Building2, Users2, Car, Check, ArrowRight } from "lucide-react";
 
 const industries = [
   {
     id: "real-estate",
     icon: Building2,
     title: "Real Estate",
     subtitle: "For Agents, Brokers & Property Managers",
     description: "Transform your real estate business with a CRM built specifically for property professionals. Manage listings, track buyer journeys, and close deals faster.",
     challenges: [
       "Leads slip through the cracks during busy seasons",
       "Difficulty tracking property inquiries across channels",
       "Manual follow-ups consuming valuable selling time",
       "No visibility into team performance metrics",
     ],
     solutions: [
       "Automated lead capture from Zillow, Realtor.com, and your website",
       "Property-matched lead distribution to the right agents",
       "Automated drip campaigns for long-term nurturing",
       "Commission tracking and deal pipeline visibility",
     ],
     stats: [
       { value: "40%", label: "More deals closed" },
       { value: "60%", label: "Faster response time" },
       { value: "3x", label: "More listings managed" },
     ],
   },
   {
     id: "coaching",
     icon: Users2,
     title: "Coaching & Consulting",
     subtitle: "For Life Coaches, Business Coaches & Consultants",
     description: "Scale your coaching practice without sacrificing the personal touch. Automate admin tasks and focus on transforming lives.",
     challenges: [
       "Spending too much time on scheduling and admin",
       "Inconsistent follow-up with prospects",
       "Difficulty tracking client progress and sessions",
       "Manual invoice and payment collection",
     ],
     solutions: [
       "Self-service booking integrated with your calendar",
       "Automated email sequences for lead nurturing",
       "Client portal for session notes and progress tracking",
       "Built-in payment processing and invoicing",
     ],
     stats: [
       { value: "60%", label: "Higher conversion rate" },
       { value: "15hrs", label: "Saved per week" },
       { value: "2x", label: "Client capacity" },
     ],
   },
   {
     id: "automobile",
     icon: Car,
     title: "Automobile Sales",
     subtitle: "For Dealerships, Used Car Lots & Auto Brokers",
     description: "Drive more showroom traffic and close more sales with a CRM designed for the automotive industry.",
     challenges: [
       "Losing leads to slow response times",
       "Difficulty managing vehicle inventory and inquiries",
       "Missing service appointment revenue opportunities",
       "Lack of visibility into sales team performance",
     ],
     solutions: [
       "Instant lead response via WhatsApp and SMS",
       "Vehicle inventory management and matching",
       "Automated service reminders and upselling",
       "Sales leaderboards and performance dashboards",
     ],
     stats: [
       { value: "50%", label: "More test drives" },
       { value: "35%", label: "Higher close rate" },
       { value: "45%", label: "Service revenue increase" },
     ],
   },
 ];
 
 const Industries = () => {
   return (
     <Layout>
       <PageBanner
         label="Industries"
         title="CRM Solutions for"
         accent="Your Industry"
         description="RealCRM is purpose-built for the unique needs of real estate, coaching, and automobile businesses."
       />
 
       {/* Industries */}
       {industries.map((industry, index) => (
         <section
           key={industry.id}
           id={industry.id}
           className={`py-24 ${index % 2 === 0 ? "bg-background" : "bg-muted/50"}`}
         >
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               {/* Header */}
               <div className="text-center mb-16">
                 <div className="w-20 h-20 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-6">
                   <industry.icon className="w-10 h-10 text-coral" />
                 </div>
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                   {industry.title}
                 </h2>
                 <p className="text-xl text-coral font-medium mb-4">{industry.subtitle}</p>
                 <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                   {industry.description}
                 </p>
               </div>
 
               {/* Stats */}
               <div className="grid md:grid-cols-3 gap-8 mb-16">
                 {industry.stats.map((stat) => (
                   <div key={stat.label} className="text-center">
                     <p className="text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                     <p className="text-muted-foreground">{stat.label}</p>
                   </div>
                 ))}
               </div>
 
               {/* Challenges & Solutions */}
               <div className="grid lg:grid-cols-2 gap-12">
                 <div className="bg-card p-8 rounded-2xl border border-border">
                   <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                     <span className="text-2xl">😤</span> Common Challenges
                   </h3>
                   <ul className="space-y-4">
                     {industry.challenges.map((challenge) => (
                       <li key={challenge} className="flex items-start gap-3">
                         <span className="text-destructive mt-1">✗</span>
                         <span className="text-muted-foreground">{challenge}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
 
                 <div className="bg-card p-8 rounded-2xl border border-coral/30">
                   <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                     <span className="text-2xl">🎯</span> How RealCRM Helps
                   </h3>
                   <ul className="space-y-4">
                     {industry.solutions.map((solution) => (
                       <li key={solution} className="flex items-start gap-3">
                         <Check className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                         <span className="text-foreground">{solution}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
 
               {/* CTA */}
               <div className="text-center mt-12">
                 <Button variant="accent" size="lg" asChild>
                   <Link to="/demo">
                     See RealCRM for {industry.title}
                     <ArrowRight className="w-4 h-4 ml-2" />
                   </Link>
                 </Button>
               </div>
             </motion.div>
           </div>
         </section>
       ))}
     </Layout>
   );
 };
 
 export default Industries;