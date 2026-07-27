import { motion } from "framer-motion";
import { 
  Share2, 
  Target, 
  MessageSquare, 
  Phone, 
  Home, 
  Building, 
  Building2, 
  Search, 
  Compass, 
  Layers,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IntegrationsHubProps {
  industryId: string;
}

interface IntegrationItem {
  name: string;
  category: string;
  status: "Direct Sync" | "Instant Connect" | "API Connected";
  icon: React.ComponentType<any>;
  iconBg: string;
  iconColor: string;
  description: string;
}

const realEstateIntegrations: IntegrationItem[] = [
  {
    name: "Meta Leads Capture",
    category: "Paid Ads",
    status: "Direct Sync",
    icon: Share2,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-500",
    description: "Capture Facebook & Instagram lead forms directly in under 2 seconds.",
  },
  {
    name: "Google Ads",
    category: "Paid Ads",
    status: "API Connected",
    icon: Target,
    iconBg: "bg-red-500/10 border-red-500/20",
    iconColor: "text-red-500",
    description: "Sync AdWords webhook search leads instantly with pipelines.",
  },
  {
    name: "WhatsApp Business API",
    category: "Messaging",
    status: "Direct Sync",
    icon: MessageSquare,
    iconBg: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-500",
    description: "Automate two-way conversations and brochure sharing.",
  },
  {
    name: "Telephony",
    category: "Voice Calls",
    status: "Instant Connect",
    icon: Phone,
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-500",
    description: "Logs incoming/outgoing calls and assignments on mobile.",
  },
  {
    name: "Magicbricks",
    category: "Real Estate Portal",
    status: "Direct Sync",
    icon: Building2,
    iconBg: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-500",
    description: "Auto-ingest buyer inquiries directly from your Magicbricks account.",
  },
  {
    name: "99acres",
    category: "Real Estate Portal",
    status: "Direct Sync",
    icon: Building,
    iconBg: "bg-sky-500/10 border-sky-500/20",
    iconColor: "text-sky-500",
    description: "Auto-ingest buyer inquiries directly from your 99acres account.",
  },
  {
    name: "Housing.com",
    category: "Real Estate Portal",
    status: "Direct Sync",
    icon: Home,
    iconBg: "bg-pink-500/10 border-pink-500/20",
    iconColor: "text-pink-500",
    description: "Auto-ingest buyer inquiries directly from your Housing.com account.",
  },
  {
    name: "QuikrHomes",
    category: "Real Estate Portal",
    status: "Instant Connect",
    icon: Compass,
    iconBg: "bg-teal-500/10 border-teal-500/20",
    iconColor: "text-teal-500",
    description: "Sync QuikrHomes listings inquiries automatically.",
  },
  {
    name: "SquareYards",
    category: "Real Estate Portal",
    status: "API Connected",
    icon: Layers,
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    iconColor: "text-indigo-500",
    description: "Ingest high-budget buyer leads directly from your builder account.",
  },
  {
    name: "Justdial",
    category: "Local Search",
    status: "Direct Sync",
    icon: Search,
    iconBg: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-500",
    description: "Sync Justdial local search inquiries instantly with sales reps.",
  },
];

const generalIntegrations: IntegrationItem[] = [
  {
    name: "Meta Leads Capture",
    category: "Paid Ads",
    status: "Direct Sync",
    icon: Share2,
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-500",
    description: "Capture Facebook & Instagram lead forms directly in under 2 seconds.",
  },
  {
    name: "Google Ads",
    category: "Paid Ads",
    status: "API Connected",
    icon: Target,
    iconBg: "bg-red-500/10 border-red-500/20",
    iconColor: "text-red-500",
    description: "Sync AdWords webhook search leads instantly with pipelines.",
  },
  {
    name: "WhatsApp Business API",
    category: "Messaging",
    status: "Direct Sync",
    icon: MessageSquare,
    iconBg: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-500",
    description: "Automate two-way conversations and brochure sharing.",
  },
  {
    name: "Telephony",
    category: "Voice Calls",
    status: "Instant Connect",
    icon: Phone,
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-500",
    description: "Logs incoming/outgoing calls and assignments on mobile.",
  },
  {
    name: "Justdial",
    category: "Local Search",
    status: "Direct Sync",
    icon: Search,
    iconBg: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-500",
    description: "Sync Justdial local search inquiries instantly with sales reps.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function IntegrationsHub({ industryId }: IntegrationsHubProps) {
  const isRealEstate = industryId === "real-estate";
  const integrations = isRealEstate ? realEstateIntegrations : generalIntegrations;

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse-glow"
          >
            ⚡ Connected Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Seamless Third-Party Integrations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Leads from all portals, messaging networks, and ad networks flow directly into your CRM pipeline automatically.
          </motion.p>
        </div>

        {/* Grid Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-5 border border-border/80 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Connection State Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm", item.iconBg)}>
                    <item.icon className={cn("w-5 h-5", item.iconColor)} />
                  </div>
                  
                  {/* Glowing Connection Dot Badge */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-bold tracking-wide uppercase border border-green-500/20">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    {item.status === "Direct Sync" ? "Direct" : item.status === "API Connected" ? "API" : "Webhook"}
                  </span>
                </div>

                {/* Info Text */}
                <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider block mt-0.5 mb-2">
                  {item.category}
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Connected Confirmation Footer Card */}
              <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-1.5 text-[10px] font-bold text-green-500/80">
                <CheckCircle2 className="w-3.5 h-3.5" /> Direct Lead Sync Active
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
