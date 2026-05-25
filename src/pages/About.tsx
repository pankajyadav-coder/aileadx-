import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Heart, Zap, Users, ArrowRight, Sparkles } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Customer-First",
    description:
      "Every feature starts with real sales teams in mind—faster follow-ups, clearer pipelines, and tools that work on the phone as well as the desktop.",
  },
  {
    icon: Zap,
    title: "Simplicity",
    description:
      "AI automation should save time, not add complexity. AiLeadX is built so your team can adopt it quickly and see results from day one.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description:
      "Clear pricing, honest communication, and no surprise lock-ins. We grow when your business grows.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are building a community of real estate, coaching, and automobile businesses that share playbooks for winning more leads in India.",
  },
];

const stats = [
  { value: "100+", label: "Growing Businesses" },
  { value: "3", label: "Core Industries Served" },
  { value: "24/7", label: "Lead & Call Tracking" },
  { value: "2026", label: "Founded" },
];

const founders = [
  {
    name: "Pankaj Yadav",
    role: "Co-Founder",
    initials: "PY",
    bio: "Leads product vision and customer success, focused on building CRM workflows that match how Indian sales teams actually work.",
  },
  {
    name: "Mayank Bora",
    role: "Co-Founder",
    initials: "MB",
    bio: "Drives technology and platform growth, bringing AI automation, integrations, and reliable infrastructure to every AiLeadX customer.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageBanner
        label="About Us"
        title="Building India's"
        accent="Smartest CRM"
        description="AiLeadX helps real estate, coaching, and automobile businesses capture leads, automate follow-ups, and close more deals—with AI that feels simple, not overwhelming."
      />

      {/* Summary */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Founded in 2026 to fix everyday sales chaos
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AiLeadX was founded in <strong className="text-foreground">2026</strong> by{" "}
                  <strong className="text-foreground">Pankaj Yadav</strong> and{" "}
                  <strong className="text-foreground">Mayank Bora</strong> after seeing the same
                  problem again and again: leads scattered across WhatsApp, calls, spreadsheets, and
                  sticky notes—with no single place to follow up and close.
                </p>
                <p>
                  Pankaj and Mayank set out to build an AI-powered CRM made for Indian businesses:
                  easy for small teams to run, strong enough for growing sales operations, and
                  tailored to real estate, coaching, and automobile workflows.
                </p>
                <p>
                  Today, AiLeadX supports <strong className="text-foreground">100+ growing businesses</strong>{" "}
                  with lead management, automated communication, call logging, and clear pipelines—so
                  teams spend less time on admin and more time winning customers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted/50 rounded-2xl p-8 lg:p-12 border border-border"
            >
              <div className="text-center">
                <div className="w-32 h-32 rounded-full gradient-accent mx-auto mb-6 flex items-center justify-center">
                  <Sparkles className="w-14 h-14 text-accent-foreground" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">Since 2026</p>
                <p className="text-muted-foreground mb-6">AiLeadX — Smart CRM. Smarter Growth.</p>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Co-Founders</p>
                    <p className="font-semibold text-foreground">Pankaj Yadav</p>
                    <p className="font-semibold text-foreground">Mayank Bora</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Trusted by</p>
                    <p className="text-2xl font-bold gradient-text">100+</p>
                    <p className="text-sm text-muted-foreground">businesses</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To give every growing business in India enterprise-grade lead management and AI
              automation—without enterprise-level cost or complexity—so they can compete, convert, and
              scale with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">AiLeadX by the Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A young company with a clear focus—helping sales teams work smarter from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-card rounded-2xl p-8 border border-border"
              >
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles behind every decision we make at AiLeadX.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-card rounded-2xl p-6 border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet the Founders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AiLeadX is led by Pankaj Yadav and Mayank Bora—builders who believe great CRM software
              should feel built for your industry, not borrowed from somewhere else.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-card rounded-2xl p-8 border border-border"
              >
                <div className="w-24 h-24 rounded-full gradient-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-coral font-medium text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageBanner
        band
        title="Join"
        accent="100+ Growing Businesses"
        description="See how AiLeadX can streamline your leads, automate follow-ups, and help your team close faster."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/demo">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </PageBanner>
    </Layout>
  );
};

export default About;
