import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Heart, ShieldCheck, Mail } from "lucide-react";

const perks = [
  {
    icon: Sparkles,
    title: "High Agency & Autonomy",
    description: "We trust our team members. You own your projects, from discovery call workflows to backend pipeline engines.",
  },
  {
    icon: Star,
    title: "Fast-Paced Growth",
    description: "Learn more in 6 months than in 3 years elsewhere. Work directly with Pankaj & Mayank on real CRM workflows.",
  },
  {
    icon: Heart,
    title: "Health & Well-being",
    description: "Generous health insurance, wellness stipends, and flexible remote work options to keep you performing your best.",
  },
  {
    icon: ShieldCheck,
    title: "Output Over Hours",
    description: "We don't care about clocking 9 to 5. We care about shipping premium software, resolving tickets, and closing deals.",
  },
];

const Careers = () => {
  return (
    <Layout>
      <PageBanner
        label="Work With Us"
        title="Build the Future of"
        accent="CRM Automation"
        description="Join AiLeadX in solving everyday sales chaos for thousands of growing businesses. We build simple, powerful software that automates lead management, chats, and calls."
      />

      {/* Why Join Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block animate-pulse">
                Life at AiLeadX
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Fast scaling, zero bureaucracy, high agency
              </h2>
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  At <strong className="text-foreground">AiLeadX</strong>, we believe in hiring high-agency individuals who love building. We do not have long layers of product managers or weekly status meetings.
                </p>
                <p>
                  You work directly with Pankaj, Mayank, and a nimble team of developers and sales leaders. If a feature makes sense for a real estate agent or a coaching academy, we design, test, and ship it within days.
                </p>
                <p>
                  We are based in Noida, India, supporting a remote-first engineering philosophy. We encourage professional ownership, continuous experiments, and premium design details.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {perks.map((perk, index) => (
                <div
                  key={perk.title}
                  className="bg-card p-6 rounded-2xl border border-border hover:border-primary/25 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <perk.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{perk.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{perk.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Banner */}
      <section className="py-16 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Our Culture Principle</h2>
            <p className="text-lg sm:text-xl text-muted-foreground italic leading-relaxed font-serif">
              &quot;Design premium products. Keep communication simple. Deliver exceptional value directly to the business owners who build the real economy.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/25 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Ambient background decoration */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple/5 rounded-full blur-3xl" />

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">How to Apply</h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              We are always looking for high-agency builders, developers, growth leads, and creative designers. To apply, drop a brief email introducing yourself, listing your past major projects, and attaching your resume or portfolio to:
            </p>
            
            <a
              href="mailto:support@aileadx.in"
              className="inline-block text-xl sm:text-2xl font-bold text-primary hover:text-purple transition-colors bg-muted px-6 py-3 rounded-2xl border border-border shadow-sm mb-6"
            >
              support@aileadx.in
            </a>
            
            <p className="text-xs text-muted-foreground font-medium">
              We respond to every candidate application within 48 hours. Looking forward to coding with you!
            </p>
          </motion.div>
        </div>
      </section>

      <PageBanner
        band
        title="Ready to build"
        accent="India's Smartest CRM?"
        description="Book a personalized demo or chat with our team members to learn more about the AiLeadX mission."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/demo">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </PageBanner>
    </Layout>
  );
};

export default Careers;
