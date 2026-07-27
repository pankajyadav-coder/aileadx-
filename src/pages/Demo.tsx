import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, Zap, Shield, Check, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

const benefits = [
  "Personalized demo tailored to your industry",
  "See all features in action with real use cases",
  "Get answers to all your questions",
  "No obligation, no pressure",
];

const features = [
  { icon: Calendar, title: "30-minute session", description: "Quick and focused demo" },
  { icon: Users, title: "Industry expert", description: "Demo from someone who knows your business" },
  { icon: Zap, title: "Live Q&A", description: "Get all your questions answered" },
  { icon: Shield, title: "Free trial access", description: "Try everything after the demo" },
];

const mapIndustryToDb = (frontendIndustry: string): string => {
  switch (frontendIndustry) {
    case "real-estate":
      return "real_estate";
    case "automobile":
      return "automobile_dealers";
    case "coaching":
    case "other":
    default:
      return "other";
  }
};

const Demo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    teamSize: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("internal_leads")
        .insert([
          {
            lead_name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone_no: formData.phone || null,
            company_name: formData.company,
            industry: mapIndustryToDb(formData.industry),
            user_limit: formData.teamSize ? parseInt(formData.teamSize, 10) : null,
            stage: "demo_scheduled",
          },
        ]);

      if (error) throw error;

      toast({
        title: "Demo Request Received!",
        description: "We'll contact you within 24 hours to schedule your personalized demo.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        teamSize: "",
      });
    } catch (error: any) {
      console.error("Error submitting demo request:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "An error occurred while booking your demo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageBanner
        compact
        label="Book a Demo"
        title="See AiLeadX"
        accent="in Action"
        description="Get a personalized demo from our product experts and discover how AiLeadX can transform your business."
      />

      {/* Demo Form Section */}
      <section className="py-24 bg-background -mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-2xl border border-border shadow-xl">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Request Your Free Demo
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Work Email *
                    </label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company Name *
                    </label>
                    <Input
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Industry *
                    </label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) => setFormData({ ...formData, industry: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="coaching">Coaching & Consulting</SelectItem>
                        <SelectItem value="automobile">Automobile</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Team Size (Number of Users)
                    </label>
                    <Input
                      type="number"
                      min="1"
                      placeholder="e.g. 5"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Booking..." : "Book My Demo"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  What to Expect
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our product experts will walk you through AiLeadX with a personalized demo tailored to your specific industry and needs.
                </p>

                <ul className="space-y-4 mb-12">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-coral flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-muted/50 p-6 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-coral" />
                    </div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-card p-6 rounded-xl border border-border mt-8">
                <p className="text-muted-foreground italic mb-4">
                  "The demo was incredibly helpful. They showed us exactly how AiLeadX would work for our real estate business. We signed up the same day!"
                </p>
                <div>
                  <p className="font-semibold text-foreground">Kuldeep Singh</p>
                  <p className="text-sm text-muted-foreground">Broker, Sunshine Realty</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;