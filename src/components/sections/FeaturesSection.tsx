 import { motion } from "framer-motion";
 import { 
   Users, 
   BarChart3, 
   MessageSquare, 
   Zap, 
   Shield, 
   Clock 
 } from "lucide-react";
 
const features = [
  {
    icon: Users,
    title: "Lead Management",
    description: "Capture, organize, and nurture leads from multiple sources in one unified dashboard.",
    color: "text-[hsl(var(--stat-blue))]",
    bg: "bg-[hsl(var(--stat-blue))]/10",
    hoverBg: "group-hover:bg-[hsl(var(--stat-blue))]",
  },
  {
    icon: BarChart3,
    title: "Sales Pipeline",
    description: "Visualize your entire sales process with customizable stages and real-time insights.",
    color: "text-[hsl(var(--stat-green))]",
    bg: "bg-[hsl(var(--stat-green))]/10",
    hoverBg: "group-hover:bg-[hsl(var(--stat-green))]",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "Connect with leads instantly through WhatsApp, SMS, and email from one platform.",
    color: "text-[hsl(var(--stat-orange))]",
    bg: "bg-[hsl(var(--stat-orange))]/10",
    hoverBg: "group-hover:bg-[hsl(var(--stat-orange))]",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate follow-ups, reminders, and tasks to never miss an opportunity.",
    color: "text-[hsl(var(--stat-yellow))]",
    bg: "bg-[hsl(var(--stat-yellow))]/10",
    hoverBg: "group-hover:bg-[hsl(var(--stat-yellow))]",
  },
  {
    icon: Shield,
    title: "Analytics Dashboard",
    description: "Track performance metrics, conversion rates, and revenue with powerful analytics.",
    color: "text-[hsl(var(--stat-purple))]",
    bg: "bg-[hsl(var(--stat-purple))]/10",
    hoverBg: "group-hover:bg-[hsl(var(--stat-purple))]",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Get dedicated support and training to help your team succeed with AiLeadX.",
    color: "text-[hsl(var(--stat-red))]",
    bg: "bg-[hsl(var(--stat-red))]/10",
    hoverBg: "group-hover:bg-[hsl(var(--stat-red))]",
  },
];
 
 export function FeaturesSection() {
   return (
     <section className="py-24 bg-background">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mb-16"
         >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Close More Deals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed specifically for real estate, coaching, and automobile businesses
            to streamline operations and maximize revenue.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 ${feature.hoverBg} group-hover:scale-110 transition-all duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color} group-hover:text-white transition-colors`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}