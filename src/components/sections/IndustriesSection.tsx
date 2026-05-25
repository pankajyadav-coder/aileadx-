import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Users2, Car, ArrowRight, Check } from "lucide-react";

const industries = [
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    subtitle: "For Agents & Brokerages",
    problem: "Losing track of property inquiries and buyer follow-ups?",
    solution: "Automate lead nurturing, schedule property tours, and track every client interaction in one place.",
    result: "Close 40% more deals with organized lead management",
    features: ["Property listing integration", "Automated showing reminders", "Commission tracking", "Client portal"],
    headerClass: "bg-gradient-to-br from-teal/20 via-teal/5 to-transparent",
    iconWrapClass: "bg-teal/20 ring-1 ring-teal/30",
    iconClass: "text-teal",
    problemLabelClass: "text-teal",
    checkClass: "text-teal",
    resultBoxClass: "bg-gradient-to-r from-teal/10 to-transparent border border-teal/20",
    btnHoverClass: "group-hover:bg-teal group-hover:text-white group-hover:border-teal",
  },
  {
    id: "coaching",
    icon: Users2,
    title: "Coaching",
    subtitle: "For Coaches & Consultants",
    problem: "Struggling to convert leads into paying clients?",
    solution: "Build relationships at scale with automated sequences, appointment scheduling, and progress tracking.",
    result: "Increase client conversion by 60% with smart automation",
    features: ["Session scheduling", "Progress tracking", "Automated reminders", "Payment integration"],
    headerClass: "bg-gradient-to-br from-purple/20 via-pink/5 to-transparent",
    iconWrapClass: "bg-purple/20 ring-1 ring-purple/30",
    iconClass: "text-purple",
    problemLabelClass: "text-purple",
    checkClass: "text-purple",
    resultBoxClass: "bg-gradient-to-r from-purple/10 to-pink/5 border border-purple/20",
    btnHoverClass: "group-hover:bg-purple group-hover:text-white group-hover:border-purple",
  },
  {
    id: "automobile",
    icon: Car,
    title: "Automobile",
    subtitle: "For Dealerships & Sales",
    problem: "Missing out on hot leads and repeat customers?",
    solution: "Track vehicle inventory, manage test drives, and nurture customers through their buying journey.",
    result: "Boost showroom visits by 50% with targeted follow-ups",
    features: ["Inventory management", "Test drive scheduling", "Service reminders", "Trade-in tracking"],
    headerClass: "bg-gradient-to-br from-primary/18 via-sky/8 to-transparent",
    iconWrapClass: "bg-primary/15 ring-1 ring-primary/25",
    iconClass: "text-primary",
    problemLabelClass: "text-primary",
    checkClass: "text-sky",
    resultBoxClass: "bg-gradient-to-r from-primary/10 to-sky/10 border border-primary/20",
    btnHoverClass: "group-hover:bg-primary group-hover:text-white group-hover:border-primary",
  },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/40 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            RealCRM is tailored to meet the unique needs of real estate professionals, coaches, and automobile
            businesses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/25 hover:shadow-glow transition-all duration-300"
            >
              <div className={`p-6 ${industry.headerClass}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${industry.iconWrapClass}`}>
                    <industry.icon className={`w-7 h-7 ${industry.iconClass}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{industry.title}</h3>
                    <p className="text-sm text-muted-foreground">{industry.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="mb-4">
                  <p className={`text-sm font-medium mb-1 ${industry.problemLabelClass}`}>The Problem:</p>
                  <p className="text-muted-foreground text-sm">{industry.problem}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-coral mb-1">Our Solution:</p>
                  <p className="text-muted-foreground text-sm">{industry.solution}</p>
                </div>

                <div className={`p-4 rounded-xl mb-6 ${industry.resultBoxClass}`}>
                  <p className="font-semibold text-foreground text-center">📈 {industry.result}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className={`w-4 h-4 shrink-0 ${industry.checkClass}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className={`w-full transition-all ${industry.btnHoverClass}`}
                  asChild
                >
                  <Link to={`/industries#${industry.id}`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
