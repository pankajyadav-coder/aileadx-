 import { useState } from "react";
 import { Layout } from "@/components/layout/Layout";
 import { PageBanner } from "@/components/layout/PageBanner";
 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageSquare, Clock, Send } from "lucide-react";

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
    details: "9310619651",
    href: "tel:+919310619651",
    description: "Mon–Sat, 10am–7pm IST",
  },
  {
    icon: Clock,
    title: "Support Hours",
    details: "Mon–Sat, 10am–7pm",
    description: "IST · Email anytime",
  },
];
 
 const Contact = () => {
   const { toast } = useToast();
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     company: "",
     phone: "",
     message: "",
   });
 
   const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     toast({
       title: "Message Sent!",
       description: "We'll get back to you within 24 hours.",
     });
     setFormData({ name: "", email: "", company: "", phone: "", message: "" });
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
                         Company
                       </label>
                       <Input
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
                         placeholder="9310619651"
                       />
                     </div>
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
 
                   <Button type="submit" variant="accent" size="lg" className="w-full">
                     Send Message
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