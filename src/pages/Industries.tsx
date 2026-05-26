import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { industriesData } from "@/data/industries";
import { ChallengesAndSolutions } from "@/components/industry/ChallengesAndSolutions";

const Industries = () => {
  return (
    <Layout>
      <PageBanner
        label="Industries"
        title="CRM Solutions for"
        accent="Your Industry"
        description="AiLeadX is purpose-built for the unique needs of real estate, coaching, and automobile businesses."
      />

      {industriesData.map((industry, index) => (
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
              <div className="text-center mb-16">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 ${industry.iconWrapClass}`}
                >
                  <industry.icon className={`w-10 h-10 ${industry.iconClass}`} />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {industry.title}
                </h2>
                <p className="text-xl text-primary font-medium mb-4">{industry.subtitle}</p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{industry.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {industry.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <ChallengesAndSolutions 
                challenges={industry.challenges} 
                solutions={industry.solutions} 
                industryId={industry.id} 
                isInline 
              />

              <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link to={`/industries/${industry.id}`}>
                    See AiLeadX for {industry.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/demo">Book a Demo</Link>
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
