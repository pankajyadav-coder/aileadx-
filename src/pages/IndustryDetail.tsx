import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { SupademoEmbed } from "@/components/industry/SupademoEmbed";
import { IndustryReviewsSection } from "@/components/industry/IndustryReviewsSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getIndustryById, industriesData, isValidIndustryId } from "@/data/industries";
import { Check, ArrowRight, Quote } from "lucide-react";

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = getIndustryById(industryId);

  if (!industryId || !isValidIndustryId(industryId) || !industry) {
    return <Navigate to="/industries" replace />;
  }

  const otherIndustries = industriesData.filter((item) => item.id !== industry.id);

  return (
    <Layout>
      <PageBanner
        label={industry.subtitle}
        title="AiLeadX for"
        accent={industry.bannerAccent}
        description={industry.description}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/demo">
              Book a Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#product-demo">Watch CRM Demo</a>
          </Button>
        </div>
      </PageBanner>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${industry.iconWrapClass}`}
              >
                <industry.icon className={`w-8 h-8 ${industry.iconClass}`} />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Everything you need for {industry.title.toLowerCase()}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{industry.longDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4"
            >
              {industry.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-card rounded-2xl p-6 border border-border"
                >
                  <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supademo — prominent product demo */}
      <section id="product-demo" className="py-20 bg-muted/50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Interactive Demo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See AiLeadX CRM in action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore a recorded walkthrough of AiLeadX built for {industry.title.toLowerCase()} teams.
              Click through the demo at your own pace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SupademoEmbed
              title={industry.supademoTitle}
              embedUrl={industry.supademoEmbedUrl}
              description={`Full ${industry.title} CRM workflow — leads, follow-ups, calls & pipelines.`}
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Built for {industry.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Features designed around how {industry.title.toLowerCase()} teams actually sell and follow up in India.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-card p-5 rounded-xl border border-border"
              >
                <Check className={`w-5 h-5 shrink-0 mt-0.5 ${industry.accentClass}`} />
                <span className="text-foreground text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Common challenges</h3>
              <ul className="space-y-4">
                {industry.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <span className="text-destructive mt-1 shrink-0">✗</span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl border border-primary/25"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">How AiLeadX helps</h3>
              <ul className="space-y-4">
                {industry.solutions.map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose AiLeadX */}
      {industry.whyChoose && industry.whyChoose.length > 0 ? (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Choose AiLeadX
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything your real estate team needs to respond faster, sell smarter, and scale with confidence.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.whyChoose.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card p-6 rounded-2xl border border-border hover:border-primary/25 hover:shadow-md transition-all"
                >
                  <span className="text-3xl mb-4 block" role="img" aria-hidden>
                    {item.emoji}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Use cases */}
      <section className={`py-20 ${industry.whyChoose?.length ? "bg-muted/50" : "bg-background"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Who it&apos;s for</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {industry.useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-center gap-3 bg-muted/50 px-5 py-4 rounded-xl border border-border"
              >
                <Check className={`w-5 h-5 shrink-0 ${industry.accentClass}`} />
                <span className="text-foreground font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {industry.reviews && industry.reviews.length > 0 ? (
        <IndustryReviewsSection reviews={industry.reviews} />
      ) : (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="bg-card p-8 sm:p-10 rounded-2xl border border-border relative">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                &quot;{industry.testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">{industry.testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {industry.testimonial.role}, {industry.testimonial.company}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other industries */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="text-muted-foreground mb-6">Explore AiLeadX for other industries</p>
          <div className="flex flex-wrap justify-center gap-4">
            {otherIndustries.map((other) => (
              <Button key={other.id} variant="outline" asChild>
                <Link to={`/industries/${other.id}`}>{other.title}</Link>
              </Button>
            ))}
            <Button variant="ghost" asChild>
              <Link to="/industries">All industries</Link>
            </Button>
          </div>
        </div>
      </section>

      <PageBanner
        band
        title="Ready to grow your"
        accent={industry.title.toLowerCase() + " business?"}
        description="Book a personalized demo or start your free trial today."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/demo">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </PageBanner>
    </Layout>
  );
};

export default IndustryDetail;
