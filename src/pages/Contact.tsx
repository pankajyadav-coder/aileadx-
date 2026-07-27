import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/layout/PageBanner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare, Clock, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.116.958 11.49.957 6.054.957 1.63 5.328 1.626 10.756c-.001 1.716.463 3.39 1.343 4.887l-.997 3.642 3.74-.977zm11.378-5.96c-.266-.134-1.57-.775-1.813-.863-.243-.088-.419-.133-.596.134-.176.265-.68.862-.833 1.039-.153.177-.307.199-.573.065-.266-.134-1.124-.413-2.143-1.32-.793-.707-1.329-1.58-1.485-1.847-.156-.266-.017-.411.117-.544.121-.119.266-.31.399-.465.134-.155.178-.266.266-.443.089-.178.045-.333-.022-.466-.067-.133-.596-1.436-.816-1.967-.215-.518-.45-.447-.618-.456-.16-.008-.343-.01-.527-.01-.184 0-.485.069-.739.347-.254.278-.971.95-.971 2.316 0 1.366.993 2.686 1.133 2.873.14.187 1.954 2.984 4.735 4.187.662.286 1.179.457 1.583.585.664.211 1.268.181 1.745.11.532-.079 1.57-.642 1.791-1.262.222-.619.222-1.15.155-1.262-.066-.112-.243-.178-.51-.311z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@aileadx.in",
    href: "mailto:support@aileadx.in",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "8796681922",
    href: "tel:+918796681922",
    description: "Mon–Sat, 10am–7pm IST",
  },
  {
    icon: WhatsAppIcon,
    title: "Chat on WhatsApp",
    details: "8796681922",
    href: "https://wa.me/918796681922?text=Hi!%20I%20have%20some%20questions%20about%20AiLeadX%20CRM.",
    description: "Get instant support",
  },
  {
    icon: Clock,
    title: "Support Hours",
    details: "Mon–Sat, 10am–7pm",
    description: "IST · Email anytime",
  },
];

import { supabase } from "@/lib/supabase";

const mapIndustryToDb = (frontendIndustry: string): string => {
  switch (frontendIndustry) {
    case "real-estate":
      return "real_estate";
    case "automobile":
      return "automobile_dealers";
    case "coaching":
      return "education";
    case "other":
    default:
      return "other";
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    industry: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("internal_leads")
        .insert([
          {
            lead_name: formData.name,
            email: formData.email,
            company_name: formData.company,
            phone_no: formData.phone || null,
            message: formData.message || null,
            address: null,
            industry: mapIndustryToDb(formData.industry),
            user_limit: null,
            stage: "new",
          },
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", phone: "", message: "", industry: "" });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "An error occurred while sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageBanner
        label="Contact"
        title="Let's Start a"
        accent="Conversation"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
                    <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
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
                        Phone
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="8796681922"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Industry *
                    </label>
                    <Select
                      required
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
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-muted/50 p-6 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-coral" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {"href" in info && info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-coral transition-colors block"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.details}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;