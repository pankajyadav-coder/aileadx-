import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageBanner } from "@/components/layout/PageBanner";

const benefits = [
  "7-day free trial, no credit card required",
  "Setup in under 5 minutes",
  "Cancel anytime, no questions asked",
];

export function CTASection() {
  return (
    <PageBanner
      band
      title="Ready to Grow Your Business"
      accent="3x Faster?"
      description="Join thousands of successful businesses using AiLeadX to automate their workflows, close more deals, and scale their revenue."
    >
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-center gap-2 text-foreground/85">
            <CheckCircle className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm font-medium">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="xl" asChild>
          <Link to="/demo">
            Book a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
        <Button variant="hero-outline" size="xl" asChild>
          <Link to="/pricing">Start Free Trial</Link>
        </Button>
      </div>
    </PageBanner>
  );
}
