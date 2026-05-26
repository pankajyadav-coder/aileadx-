import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Check, 
  ArrowRight, 
  Zap, 
  MessageSquare, 
  Users, 
  Layers, 
  FileText, 
  Phone, 
  UserCheck, 
  TrendingUp, 
  Compass, 
  Database, 
  Settings, 
  Cloud, 
  Smartphone, 
  Sparkles,
  Share2,
  Target,
  Search,
  Home,
  Building,
  Building2,
  CheckCircle2,
  Clock,
  Lock,
  BarChart3,
  Bell,
  Award
} from "lucide-react";

interface FeatureItem {
  title: string;
  emoji: string;
  icon: React.ComponentType<any>;
  description: string;
  bullets: string[];
  colorClass: string;
}

const aiAndMessaging: FeatureItem[] = [
  {
    title: "AI Customer Assistant",
    emoji: "🤖",
    icon: Sparkles,
    description: "Talks with customers 24×7 automatically. Answers inquiries instantly on WhatsApp and shares information without human involvement.",
    bullets: [
      "Talks with customers 24×7 automatically",
      "Answers inquiries instantly on WhatsApp",
      "Shares information without human involvement"
    ],
    colorClass: "from-purple-500/10 border-purple-500/20 text-purple-500 hover:shadow-purple-500/5 hover:border-purple-500/40"
  },
  {
    title: "WhatsApp CRM",
    emoji: "💬",
    icon: MessageSquare,
    description: "Manage all WhatsApp chats in one place, reply faster to customer inquiries, and track complete conversation history.",
    bullets: [
      "Manage all WhatsApp chats in one place",
      "Reply faster to customer inquiries",
      "Track complete conversation history"
    ],
    colorClass: "from-green-500/10 border-green-500/20 text-green-500 hover:shadow-green-500/5 hover:border-green-500/40"
  },
  {
    title: "Unified Inbox",
    emoji: "📨",
    icon: Layers,
    description: "Manage chats and inquiries together, access all conversations from one dashboard, and improve communication management.",
    bullets: [
      "Manage chats and inquiries together",
      "Access all conversations from one dashboard",
      "Improve communication management"
    ],
    colorClass: "from-indigo-500/10 border-indigo-500/20 text-indigo-500 hover:shadow-indigo-500/5 hover:border-indigo-500/40"
  },
  {
    title: "Auto Lead Assignment",
    emoji: "🔄",
    icon: UserCheck,
    description: "Automatically distribute leads to teams, reduce manual lead management work, and improve response efficiency.",
    bullets: [
      "Automatically distribute leads to teams",
      "Reduce manual lead management work",
      "Improve response efficiency"
    ],
    colorClass: "from-teal-500/10 border-teal-500/20 text-teal-500 hover:shadow-teal-500/5 hover:border-teal-500/40"
  },
  {
    title: "Customer Engagement Tools",
    emoji: "🎯",
    icon: Award,
    description: "Improve response speed, increase customer interaction quality, and boost lead conversion opportunities.",
    bullets: [
      "Improve response speed",
      "Increase customer interaction quality",
      "Boost lead conversion opportunities"
    ],
    colorClass: "from-rose-500/10 border-rose-500/20 text-rose-500 hover:shadow-rose-500/5 hover:border-rose-500/40"
  }
];

const pipelinesAndLeads: FeatureItem[] = [
  {
    title: "Lead Management",
    emoji: "📥",
    icon: Users,
    description: "Capture leads from multiple sources, organize and track customer inquiries, and manage leads efficiently from one dashboard.",
    bullets: [
      "Capture leads from multiple sources",
      "Organize and track customer inquiries",
      "Manage leads efficiently from one dashboard"
    ],
    colorClass: "from-blue-500/10 border-blue-500/20 text-blue-500 hover:shadow-blue-500/5 hover:border-blue-500/40"
  },
  {
    title: "Sales Pipeline",
    emoji: "📊",
    icon: TrendingUp,
    description: "Track lead stages easily, monitor customer progress in real time, and improve conversion management.",
    bullets: [
      "Track lead stages easily",
      "Monitor customer progress in real time",
      "Improve conversion management"
    ],
    colorClass: "from-amber-500/10 border-amber-500/20 text-amber-500 hover:shadow-amber-500/5 hover:border-amber-500/40"
  },
  {
    title: "Lead History & Tracking",
    emoji: "📂",
    icon: FileText,
    description: "View complete customer activity history, track every interaction in one place, and understand customer journey better.",
    bullets: [
      "View complete customer activity history",
      "Track every interaction in one place",
      "Understand customer journey better"
    ],
    colorClass: "from-sky-500/10 border-sky-500/20 text-sky-500 hover:shadow-sky-500/5 hover:border-sky-500/40"
  },
  {
    title: "Follow-up Management",
    emoji: "🔔",
    icon: Clock,
    description: "Keep track of important follow-ups, never miss customer interactions, and improve response consistency.",
    bullets: [
      "Keep track of important follow-ups",
      "Never miss customer interactions",
      "Improve response consistency"
    ],
    colorClass: "from-pink-500/10 border-pink-500/20 text-pink-500 hover:shadow-pink-500/5 hover:border-pink-500/40"
  }
];

const operationsAndCalls: FeatureItem[] = [
  {
    title: "Telephony Integration",
    emoji: "📞",
    icon: Phone,
    description: "Manage customer calls directly from CRM, access call logs and history instantly, and improve communication tracking.",
    bullets: [
      "Manage customer calls directly from CRM",
      "Access call logs and history instantly",
      "Improve communication tracking"
    ],
    colorClass: "from-orange-500/10 border-orange-500/20 text-orange-500 hover:shadow-orange-500/5 hover:border-orange-500/40"
  },
  {
    title: "Team Management",
    emoji: "👥",
    icon: Database,
    description: "Assign leads to team members, monitor employee activities, and improve team coordination and productivity.",
    bullets: [
      "Assign leads to team members",
      "Monitor employee activities",
      "Improve team coordination and productivity"
    ],
    colorClass: "from-cyan-500/10 border-cyan-500/20 text-cyan-500 hover:shadow-cyan-500/5 hover:border-cyan-500/40"
  },
  {
    title: "Reports & Analytics",
    emoji: "📈",
    icon: BarChart3,
    description: "View sales and lead reports, track team performance easily, and make smarter business decisions.",
    bullets: [
      "View sales and lead reports",
      "Track team performance easily",
      "Make smarter business decisions"
    ],
    colorClass: "from-violet-500/10 border-violet-500/20 text-violet-500 hover:shadow-violet-500/5 hover:border-violet-500/40"
  },
  {
    title: "Role & Permission Management",
    emoji: "🔐",
    icon: Lock,
    description: "Control employee access levels, manage permissions securely, and protect sensitive business data.",
    bullets: [
      "Control employee access levels",
      "Manage permissions securely",
      "Protect sensitive business data"
    ],
    colorClass: "from-emerald-500/10 border-emerald-500/20 text-emerald-500 hover:shadow-emerald-500/5 hover:border-emerald-500/40"
  }
];

const cloudAndArchitecture: FeatureItem[] = [
  {
    title: "Instant Property / Product Sharing",
    emoji: "⚡",
    icon: Zap,
    description: "Share details instantly with customers, send images, pricing, and brochures quickly, and improve customer engagement speed.",
    bullets: [
      "Share details instantly with customers",
      "Send images, pricing, and brochures quickly",
      "Improve customer engagement speed"
    ],
    colorClass: "from-yellow-500/10 border-yellow-500/20 text-yellow-500 hover:shadow-yellow-500/5 hover:border-yellow-500/40"
  },
  {
    title: "Multi-Industry CRM",
    emoji: "🌐",
    icon: Compass,
    description: "Built for Real Estate businesses, suitable for Coaching Institutes, and perfect for Automobile businesses.",
    bullets: [
      "Built for Real Estate businesses",
      "Suitable for Coaching Institutes",
      "Perfect for Automobile businesses"
    ],
    colorClass: "from-indigo-600/10 border-indigo-600/20 text-indigo-600 hover:shadow-indigo-600/5 hover:border-indigo-600/40"
  },
  {
    title: "Cloud-Based CRM",
    emoji: "🚀",
    icon: Cloud,
    description: "Access CRM from anywhere, with no complex installation required. Secure, fast, and reliable cloud access.",
    bullets: [
      "Access CRM from anywhere",
      "No complex installation required",
      "Secure and reliable cloud access"
    ],
    colorClass: "from-blue-600/10 border-blue-600/20 text-blue-600 hover:shadow-blue-600/5 hover:border-blue-600/40"
  },
  {
    title: "API & Integration Support",
    emoji: "🔗",
    icon: Layers,
    description: "Connect with third-party tools, improve workflow automation, and expand CRM capabilities easily.",
    bullets: [
      "Connect with third-party tools",
      "Improve workflow automation",
      "Expand CRM capabilities easily"
    ],
    colorClass: "from-purple-600/10 border-purple-600/20 text-purple-600 hover:shadow-purple-600/5 hover:border-purple-600/40"
  },
  {
    title: "Responsive Web Platform",
    emoji: "📱",
    icon: Smartphone,
    description: "Works beautifully on desktop and mobile browsers, offering a smooth experience across all devices.",
    bullets: [
      "Works on desktop and mobile browsers",
      "Smooth experience across devices",
      "Easy access anytime, anywhere"
    ],
    colorClass: "from-gray-500/10 border-gray-500/20 text-gray-500 hover:shadow-gray-500/5 hover:border-gray-500/40"
  }
];

interface IntegrationItem {
  title: string;
  emoji: string;
  icon: React.ComponentType<any>;
  description: string;
  bullets: string[];
  colorClass: string;
  portalUrl?: string;
}

const integrationsList: IntegrationItem[] = [
  {
    title: "Meta Leads Capture",
    emoji: "📢",
    icon: Share2,
    description: "Capture Facebook & Instagram ad leads instantly and auto-sync directly into your CRM dashboard.",
    bullets: [
      "Capture Facebook & Instagram ad leads instantly",
      "Auto-sync leads directly into CRM",
      "Respond to inquiries faster"
    ],
    colorClass: "from-blue-500/10 border-blue-500/20 text-blue-500 shadow-blue-500/5 hover:border-blue-500/40"
  },
  {
    title: "Google Ads Integration",
    emoji: "🔍",
    icon: Target,
    description: "Receive Google Ads leads automatically and centralize search ad inquiries in one unified dashboard.",
    bullets: [
      "Receive Google Ads leads automatically",
      "Centralize ad inquiries in one dashboard",
      "Track lead sources efficiently"
    ],
    colorClass: "from-red-500/10 border-red-500/20 text-red-500 shadow-red-500/5 hover:border-red-500/40"
  },
  {
    title: "WhatsApp Business API",
    emoji: "💬",
    icon: MessageSquare,
    description: "Manage WhatsApp chats directly in CRM, with an AI assistant that replies to customers 24×7 automatically.",
    bullets: [
      "Manage WhatsApp chats directly in CRM",
      "AI assistant replies to customers 24×7",
      "Keep complete conversation history"
    ],
    colorClass: "from-green-500/10 border-green-500/20 text-green-500 shadow-green-500/5 hover:border-green-500/40"
  },
  {
    title: "Telephony Integration",
    emoji: "📞",
    icon: Phone,
    description: "Handle incoming & outgoing customer calls directly from the CRM, accessing call logs instantly.",
    bullets: [
      "Handle customer calls from CRM",
      "Access call logs and records easily",
      "Improve communication tracking"
    ],
    colorClass: "from-amber-500/10 border-amber-500/20 text-amber-500 shadow-amber-500/5 hover:border-amber-500/40"
  },
  {
    title: "QuikrHomes Integration",
    emoji: "🏠",
    icon: Compass,
    description: "Auto-capture property inquiries instantly and manage all QuikrHomes leads centrally.",
    bullets: [
      "Auto-capture property inquiries instantly",
      "Manage all QuikrHomes leads centrally",
      "Reduce manual lead entry work"
    ],
    colorClass: "from-teal-500/10 border-teal-500/20 text-teal-500 shadow-teal-500/5 hover:border-teal-500/40"
  },
  {
    title: "SquareYards Integration",
    emoji: "🏢",
    icon: Layers,
    description: "Sync property leads directly into AiLeadX CRM, tracking customer inquiries and optimizing response time.",
    bullets: [
      "Sync leads directly into AiLeadX CRM",
      "Track customer inquiries efficiently",
      "Improve lead response time"
    ],
    colorClass: "from-indigo-500/10 border-indigo-500/20 text-indigo-500 shadow-indigo-500/5 hover:border-indigo-500/40"
  },
  {
    title: "Justdial Integration",
    emoji: "📇",
    icon: Search,
    description: "Receive local search Justdial leads automatically and manage inquiries from a single platform.",
    bullets: [
      "Receive Justdial leads automatically",
      "Manage inquiries from one platform",
      "Improve follow-up management"
    ],
    colorClass: "from-violet-500/10 border-violet-500/20 text-violet-500 shadow-violet-500/5 hover:border-violet-500/40"
  },
  {
    title: "Magicbricks Integration",
    emoji: "🏘",
    icon: Building2,
    description: "Import Magicbricks property leads directly into CRM, tracking interactions and accelerating replies.",
    bullets: [
      "Import property leads directly into CRM",
      "Track customer interactions easily",
      "Respond quickly to buyers"
    ],
    colorClass: "from-orange-500/10 border-orange-500/20 text-orange-500 shadow-orange-500/5 hover:border-orange-500/40"
  },
  {
    title: "99acres Integration",
    emoji: "🏡",
    icon: Building,
    description: "Capture 99acres buyer inquiries instantly, organize property leads, and double sales productivity.",
    bullets: [
      "Capture buyer inquiries instantly",
      "Organize property leads efficiently",
      "Improve sales team productivity"
    ],
    colorClass: "from-sky-500/10 border-sky-500/20 text-sky-500 shadow-sky-500/5 hover:border-sky-500/40"
  },
  {
    title: "Housing.com Integration",
    emoji: "🏠",
    icon: Home,
    description: "Sync Housing.com real estate leads automatically, centralizing all inquiries and maximizing efficiency.",
    bullets: [
      "Sync Housing.com leads automatically",
      "Centralize all property inquiries",
      "Increase lead management efficiency"
    ],
    colorClass: "from-pink-500/10 border-pink-500/20 text-pink-500 shadow-pink-500/5 hover:border-pink-500/40"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const Features = () => {
  const [activeTab, setActiveTab] = useState<"ai" | "pipeline" | "calls" | "cloud">("ai");

  const getFeaturesByTab = () => {
    switch (activeTab) {
      case "ai":
        return aiAndMessaging;
      case "pipeline":
        return pipelinesAndLeads;
      case "calls":
        return operationsAndCalls;
      case "cloud":
        return cloudAndArchitecture;
    }
  };

  return (
    <Layout>
      <PageBanner
        label="Vast Features & Ecosystem"
        title="18 Core Capabilities &"
        accent="10 Lead Portals In Sync"
        description="Everything you need to automate inquiries 24/7, route leads to agents instantly, monitor pipelines in real-time, and log calls from a single, beautiful unified dashboard."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#core-features">
              Explore 18 Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </PageBanner>

      {/* CORE FEATURES SECTION */}
      <section id="core-features" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Tab Selector */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              🔥 COMPLETE PLATFORM FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              18 Core CRM Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the advanced features, modules, and workflows pre-built into AiLeadX. Tap on each category below to filter features.
            </p>

            {/* Selector Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-10 bg-muted/60 p-1.5 rounded-2xl max-w-2xl mx-auto border border-border/60 shadow-inner">
              <button
                onClick={() => setActiveTab("ai")}
                className={`flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === "ai"
                    ? "bg-gradient-to-r from-primary to-purple text-primary-foreground shadow-md scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/5"
                }`}
              >
                🤖 AI & WhatsApp
              </button>
              <button
                onClick={() => setActiveTab("pipeline")}
                className={`flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === "pipeline"
                    ? "bg-gradient-to-r from-primary to-purple text-primary-foreground shadow-md scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/5"
                }`}
              >
                📊 Leads & Pipeline
              </button>
              <button
                onClick={() => setActiveTab("calls")}
                className={`flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === "calls"
                    ? "bg-gradient-to-r from-primary to-purple text-primary-foreground shadow-md scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/5"
                }`}
              >
                📞 Calls & Team
              </button>
              <button
                onClick={() => setActiveTab("cloud")}
                className={`flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === "cloud"
                    ? "bg-gradient-to-r from-primary to-purple text-primary-foreground shadow-md scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/5"
                }`}
              >
                🚀 Cloud & Sharing
              </button>
            </div>
          </div>

          {/* Cards Display with Animation */}
          <div className="min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              >
                {getFeaturesByTab().map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      variants={cardVariants}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className={`group bg-card rounded-3xl p-6 border border-border/85 bg-gradient-to-b ${feature.colorClass.split(" ")[0]} via-transparent to-transparent shadow-md hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
                    >
                      <div>
                        {/* Emoji & Icon Header */}
                        <div className="flex items-center justify-between mb-5">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-card border ${feature.colorClass.split(" ")[1]} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-5 h-5 stroke-[2]" />
                          </div>
                          <span className="text-2xl filter drop-shadow-sm select-none" role="img">
                            {feature.emoji}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Bullet points */}
                        <ul className="space-y-3">
                          {feature.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20 text-primary">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                              <span className="text-foreground/90 text-xs sm:text-sm font-semibold leading-snug">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/40 text-[10px] font-bold text-primary/80 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        Platform Capability Ready
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* DIRECT INTEGRATIONS SECTION */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse-glow">
              🔌 Plug-And-Play Connectors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              10 Direct Third-Party Integrations
            </h2>
            <p className="text-lg text-muted-foreground">
              Eliminate manual lead data entry completely. Sync inquiries instantly from premium ad systems and major property or business portals into your CRM pipelines.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {integrationsList.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`group bg-card rounded-3xl p-5 border border-border/80 bg-gradient-to-b ${item.colorClass.split(" ")[0]} via-transparent to-transparent hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-card border ${item.colorClass.split(" ")[1]} shadow-sm group-hover:rotate-6 transition-transform duration-300`}>
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[9px] font-extrabold tracking-wide uppercase border border-green-500/20">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                        </span>
                        Live Sync
                      </span>
                    </div>

                    <h3 className="font-extrabold text-foreground text-sm group-hover:text-primary transition-colors flex items-center gap-1.5">
                      <span className="filter drop-shadow-sm select-none" role="img">{item.emoji}</span>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-[11px] leading-relaxed mt-1.5 mb-4 min-h-[48px]">
                      {item.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 border-t border-border/40 pt-3 flex-1">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-primary">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="text-muted-foreground text-[10px] sm:text-[11px] font-semibold leading-normal">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-1 text-[9px] font-bold text-green-500/80">
                    <CheckCircle2 className="w-3 h-3" /> Direct API Connected
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <PageBanner
        band
        title="Elevate Your Conversions Today"
        accent="Experience the Suite"
        description="Book a personalized live demo today and see how AiLeadX can streamline your team coordination, boost follow-ups, and double your response speed."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/demo">Book a Live Demo</Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/pricing">Explore Plans</Link>
          </Button>
        </div>
      </PageBanner>
    </Layout>
  );
};

export default Features;