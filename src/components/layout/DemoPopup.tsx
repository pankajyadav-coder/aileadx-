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

export function DemoPopup() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                First Name *
              </label>
              <Input
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="John"
                className="h-10 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Last Name *
              </label>
              <Input
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe"
                className="h-10 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground mb-1.5">
              Work Email *
            </label>
            <Input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@company.com"
              className="h-10 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Phone Number
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="8796681922"
                className="h-10 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Company Name *
              </label>
              <Input
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your Company"
                className="h-10 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Industry *
              </label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData({ ...formData, industry: value })}
                required
              >
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue placeholder="Select industry" />
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
              <label className="block text-xs font-medium text-foreground mb-1.5">
                Team Size
              </label>
              <Select
                value={formData.teamSize}
                onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
              >
                <SelectTrigger className="h-10 text-sm">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Just me</SelectItem>
                  <SelectItem value="2-5">2-5 people</SelectItem>
                  <SelectItem value="6-20">6-20 people</SelectItem>
                  <SelectItem value="21-50">21-50 people</SelectItem>
                  <SelectItem value="50+">50+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" variant="accent" size="lg" className="w-full mt-2 h-11 text-sm font-semibold">
            Book My Demo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-[10px] text-muted-foreground text-center mt-2">
            By submitting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
