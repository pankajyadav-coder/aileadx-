import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Zap, Star, Crown, Sparkles } from "lucide-react";

interface PlanPrice {
  monthly: string;
  quarterly: string;
  yearly: string;
}

interface Plan {
  name: string;
  emoji: string;
  description: string;
  users: string;
  extraUsers: string;
  price: PlanPrice;
  icon: React.ComponentType<any>;
  features: string[];
  cta: string;
  popular: boolean;
  accentClass: string;
  glowClass: string;
}

const pricingPlans: Plan[] = [
  {
    name: "Starter",
    emoji: "🟢",
    description: "Best for Small Businesses & Teams",
    users: "3 Users Included",
    extraUsers: "₹499/user/month",
    price: {
      monthly: "₹2,499",
      quarterly: "₹6,999",
      yearly: "₹24,999",
    },
    icon: Zap,
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Lead History",
      "Task Management",
      "Follow-up Reminders",
      "Reports & Analytics",
      "WhatsApp Integration",
      "AI Customer Chat",
      "Telephony Integration",
      "Unified Inbox",
    ],
    cta: "Start Free Trial",
    popular: false,
    accentClass: "border-green-500/20 text-green-500 bg-green-500/10",
    glowClass: "shadow-green-500/5",
  },
  {
    name: "Growth",
    emoji: "🔵 ⭐",
    description: "Best for Growing Teams",
    users: "10 Users Included",
    extraUsers: "₹399/user/month",
    price: {
      monthly: "₹6,999",
      quarterly: "₹18,999",
      yearly: "₹69,999",
    },
    icon: Star,
    features: [
      "Everything in Starter",
      "Advanced Reports",
      "Employee Productivity Tracking",
      "Call Analytics",
      " Lead Assignment",
      "Multi-Team Management",
      "Faster AI Response Capacity",
      "Priority CRM Support",
    ],
    cta: "Start Free Trial",
    popular: true,
    accentClass: "border-primary/30 text-primary bg-primary/10",
    glowClass: "shadow-primary/15 shadow-xl scale-105",
  },
  {
    name: "Pro",
    emoji: "🟣",
    description: "Best for Large Businesses",
    users: "25 Users Included",
    extraUsers: "₹299/user/month",
    price: {
      monthly: "₹14,999",
      quarterly: "₹40,999",
      yearly: "₹1,49,999",
    },
    icon: Crown,
    features: [
      "Everything in Growth",
      "Multi-Project Management",
      " Analytics",
      "Role & Permission Management",
      "Priority Support",
      "Advanced Team Controls",
    ],
    cta: "Start Free Trial",
    popular: false,
    accentClass: "border-purple-500/20 text-purple-500 bg-purple-500/10",
    glowClass: "shadow-purple-500/5",
  },
  {
    name: "Enterprise",
    emoji: "🔴",
    description: "Custom Solutions for Enterprises",
    users: "Unlimited Users",
    extraUsers: "No extra user fees",
    price: {
      monthly: "Custom",
      quarterly: "Custom",
      yearly: "Custom",
    },
    icon: Sparkles,
    features: [
      "All Pro Features",
      "Unlimited Team Access",
      "White Label CRM",
      "Dedicated Server",
      "Custom Integrations",
      "Dedicated Account Manager",
      "Enterprise-Level Support",
      "Custom AI Workflows",
    ],
    cta: "Contact Sales",
    popular: false,
    accentClass: "border-red-500/20 text-red-500 bg-red-500/10",
    glowClass: "shadow-red-500/5",
  },
];

const faqs = [
  {
    question: "Can I try AiLeadX before committing?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features on all tier levels. No credit card is required to begin.",
  },
  {
    question: "Can I change my billing cycle or plan later?",
    answer: "Yes, you can upgrade, downgrade, or switch between Monthly, Quarterly, and Yearly billing cycles at any point directly from your dashboard.",
  },
  {
    question: "How does the extra user pricing work?",
    answer: "Each tier includes a set list of users. If you need to expand your team, you can add extra seats starting from ₹499/user/month on Starter, which drops to ₹299/user/month on the Pro tier. Bigger teams get lower per-user pricing.",
  },
  {
    question: "What Indian payment methods do you accept?",
    answer: "We support a wide variety of payment flows including UPI (GPay, PhonePe, Paytm), Net Banking, corporate bank transfers, and all major Indian credit & debit cards.",
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "yearly">("monthly");

  const getPeriodLabel = () => {
    if (billingCycle === "monthly") return "/month";
    if (billingCycle === "quarterly") return "/quarter";
    return "/year";
  };

  return (
    <Layout>
      <PageBanner
        label="Pricing Plans"
        title="Simple, High-Value"
        accent="CRM Pricing"
        description="Choose the perfect fit for your sales team. Scale dynamically with direct AI customer assistants, smart call logging, and seamless pipelines in India."
      />

      {/* Pricing Cards Section */}
      <section className="py-24 bg-background -mt-12 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

          {/* Cycle Toggles */}
          <div className="flex justify-center mb-16">
            <div className="bg-muted p-1.5 rounded-2xl inline-flex border border-border/80 shadow-inner">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${billingCycle === "monthly"
                    ? "bg-gradient-to-r from-primary to-purple text-primary-foreground shadow-md scale-100"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/5"
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${billingCycle === "quarterly"
                    ? "bg-gradient-to-r from-primary to-purple text-primary-foreground shadow-md scale-100"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/5"
                  }`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${billingCycle === "yearly"
                    ? "bg-gradient-to-r from-primary to-purple text-primary-foreground shadow-md scale-100"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted-foreground/5"
                  }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingPlans.map((plan, index) => {
              const currentPrice = plan.price[billingCycle];
              const isCustom = currentPrice === "Custom";

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, type: "spring", stiffness: 100, damping: 15 }}
                  className={`relative bg-card rounded-3xl border flex flex-col p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:border-primary/20 ${plan.popular
                      ? "border-primary shadow-xl shadow-primary/10 " + plan.glowClass
                      : "border-border " + plan.glowClass
                    }`}
                >
                  {/* Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-purple text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-glow animate-pulse-glow">
                      ⭐ Best Value
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6 relative">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${plan.accentClass.split(" ")[2]} border border-border/40 shadow-sm`}>
                      <plan.icon className={`w-6 h-6 ${plan.accentClass.split(" ")[1]}`} />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-2xl font-bold text-foreground">{plan.name} Plan</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed h-10">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="mb-6 p-4 rounded-2xl bg-muted/30 border border-border/40">
                    <div className="flex items-baseline">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                        {currentPrice}
                      </span>
                      {!isCustom && (
                        <span className="text-sm font-semibold text-muted-foreground ml-1">
                          {getPeriodLabel()}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/60 flex flex-col gap-2">
                      <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-primary/8 border border-primary/10">
                        <span className="font-semibold text-muted-foreground flex items-center gap-1">
                          👥 Included Seats
                        </span>
                        <span className="font-extrabold text-primary shrink-0">
                          {plan.users}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs px-3 py-2 rounded-xl bg-muted/80 border border-border/40">
                        <span className="font-semibold text-muted-foreground flex items-center gap-1">
                          ➕ Extra User Fee
                        </span>
                        <span className="font-extrabold text-foreground shrink-0">
                          {plan.extraUsers}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20 text-primary">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-muted-foreground text-xs sm:text-sm font-medium leading-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={plan.popular ? "accent" : "outline"}
                    size="lg"
                    className="w-full rounded-2xl font-bold shadow-sm"
                    asChild
                  >
                    <Link to={isCustom ? "/contact" : "/demo"}>
                      {plan.cta}
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>

          {/* Per-User Pricing Highlight Callout */}
          <div className="text-center mt-16 relative z-10">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-sm font-bold shadow-md hover:scale-[1.01] transition-transform">
              🚀 Bigger teams get lower per-user pricing.
            </span>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear answers to common questions regarding AiLeadX seats, subscriptions, and integrations.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border/80 shadow-sm"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageBanner
        band
        title="Still Have"
        accent="Questions?"
        description="Our sales team is here to help you configure custom integrations or set up dedicated CRM servers."
      >
        <Button variant="hero" size="xl" asChild>
          <Link to="/contact">Talk to Sales</Link>
        </Button>
      </PageBanner>
    </Layout>
  );
};

export default Pricing;