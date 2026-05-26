 import { motion } from "framer-motion";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { ArrowRight, Play, Star } from "lucide-react";
 import heroDashboard from "@/assets/hero-dashboard.jpg";
 
 export function HeroSection() {
   return (
     <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
       {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal/25 via-transparent to-transparent" />
       
       {/* Grid pattern overlay */}
       <div 
         className="absolute inset-0 opacity-[0.03]"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
         }}
       />
 
       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           {/* Content */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="text-center lg:text-left"
           >
             {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/12 via-purple/10 to-teal/10 border border-primary/25 text-primary text-sm font-medium mb-6 shadow-sm"
            >
              <Star className="w-4 h-4 fill-primary" />
              <span>Trusted by 100+ businesses</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              All-in-One CRM for{" "}
              <span className="gradient-text">Real Estate, Coaching</span>{" "}
              & Auto Businesses
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-balance">
               Automate lead capture, streamline your sales pipeline, and close deals 3x faster. 
               Everything you need to grow your revenue in one powerful platform.
             </p>
 
             {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
               <Button variant="hero" size="xl" asChild>
                 <Link to="/demo">
                   Book a Demo
                   <ArrowRight className="w-5 h-5 ml-2" />
                 </Link>
               </Button>
               <Button variant="hero-outline" size="xl" asChild>
                 <Link to="/pricing">
                   Start Free Trial
                 </Link>
               </Button>
             </div>
 
            {/* Social proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-muted-foreground text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary via-purple to-teal border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span>Join 100+ growing businesses</span>
            </div>
           </motion.div>
 
           {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-purple/20 to-teal/15 blur-3xl rounded-3xl animate-pulse-glow" />

              {/* Dashboard image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                 <img
                   src={heroDashboard}
                   alt="AiLeadX Dashboard showing sales pipeline and analytics"
                   className="w-full h-auto"
                 />
               </div>
 
               {/* Floating stats card */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8 }}
                 className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border animate-float"
               >
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[hsl(var(--stat-green))]/15 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[hsl(var(--stat-green))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                   </div>
                   <div>
                     <p className="text-2xl font-bold text-foreground">+127%</p>
                     <p className="text-sm text-muted-foreground">Revenue Growth</p>
                   </div>
                 </div>
               </motion.div>
 
               {/* Floating notification */}
               <motion.div
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 1 }}
                 className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-xl border border-border animate-float-delayed"
               >
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">🔔</span>
                   </div>
                   <div>
                     <p className="text-sm font-medium text-foreground">New Lead!</p>
                     <p className="text-xs text-muted-foreground">Just now</p>
                   </div>
                 </div>
               </motion.div>
             </div>
           </motion.div>
         </div>
       </div>
 
       {/* Bottom wave */}
       <div className="absolute bottom-0 left-0 right-0">
         <svg viewBox="0 0 1440 120" fill="none" className="w-full">
           <path
             d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
             fill="hsl(var(--background))"
           />
         </svg>
       </div>
     </section>
   );
 }