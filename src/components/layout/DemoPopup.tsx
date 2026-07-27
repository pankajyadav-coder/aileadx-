import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

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

export function DemoPopup() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
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

  useEffect(() => {
    if (sessionStorage.getItem("aileadx_demo_popup_shown") === "true") {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHasScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("aileadx_demo_popup_shown") === "true") {
      return;
    }

    let sessionStart = sessionStorage.getItem("aileadx_session_start");
    if (!sessionStart) {
      sessionStart = Date.now().toString();
      sessionStorage.setItem("aileadx_session_start", sessionStart);
    }

    const checkInterval = setInterval(() => {
      const elapsed = Date.now() - Number(sessionStart);
      if (elapsed >= 60000 && hasScrolled) {
        setIsOpen(true);
        sessionStorage.setItem("aileadx_demo_popup_shown", "true");
        clearInterval(checkInterval);
      }
    }, 1000);

    return () => clearInterval(checkInterval);
  }, [hasScrolled]);

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
      setIsOpen(false);
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

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      sessionStorage.setItem("aileadx_demo_popup_shown", "true");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[95vw] sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-6 gap-6 rounded-2xl border border-border shadow-2xl bg-card/95 backdrop-blur-md">
        <DialogHeader className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center mb-3">
            <Calendar className="w-6 h-6 text-coral" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            See AiLeadX in Action
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1 max-w-[360px]">
            Get a personalized demo from our product experts and discover how we can transform your business.
          </DialogDescription>
        </DialogHeader>

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
      </DialogContent>
    </Dialog>
  );
}
