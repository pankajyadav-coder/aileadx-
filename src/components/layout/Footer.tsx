 import { Link } from "react-router-dom";
 import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
 import { BrandLogo } from "@/components/brand/BrandLogo";
 
 const footerLinks = {
   product: [
     { name: "Features", href: "/features" },
     { name: "Pricing", href: "/pricing" },
     { name: "Industries", href: "/industries" },
     { name: "Resources", href: "/resources" },
   ],
   company: [
     { name: "About Us", href: "/about" },
     { name: "Contact", href: "/contact" },
     { name: "Careers", href: "/careers" },
     { name: "Blog", href: "/resources" },
   ],
   legal: [
     { name: "Privacy Policy", href: "/privacy" },
     { name: "Terms of Service", href: "/terms" },
     { name: "Cookie Policy", href: "/cookies" },
   ],
   industries: [
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Coaching", href: "/industries/coaching" },
    { name: "Automobile", href: "/industries/automobile" },
   ],
 };
 
 const socialLinks = [
   { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/18pGa8Acsg/" },
   
   { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/aileadx/" },
   { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/aileadx.in?igsh=N211ZW15dWVjdWVn" },
 ];
 
 export function Footer() {
   return (
     <footer className="bg-navy text-primary-foreground">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
           {/* Brand */}
           <div className="lg:col-span-2">
             <div className="mb-6">
               <BrandLogo variant="footer" />
             </div>
             <p className="text-primary-foreground/70 mb-6 max-w-sm">
               The all-in-one CRM platform designed for real estate, coaching, and automobile businesses. Grow your revenue, automate your workflow.
             </p>
             <div className="flex space-x-4">
               {socialLinks.map((social) => (
                 <a
                   key={social.name}
                   href={social.href}
                   className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                   aria-label={social.name}
                 >
                   <social.icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
           </div>
 
           {/* Product Links */}
           <div>
             <h4 className="font-semibold mb-4">Product</h4>
             <ul className="space-y-3">
               {footerLinks.product.map((link) => (
                 <li key={link.name}>
                   <Link
                     to={link.href}
                     className="text-primary-foreground/70 hover:text-primary-light transition-colors text-sm"
                   >
                     {link.name}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Company Links */}
           <div>
             <h4 className="font-semibold mb-4">Company</h4>
             <ul className="space-y-3">
               {footerLinks.company.map((link) => (
                 <li key={link.name}>
                   <Link
                     to={link.href}
                     className="text-primary-foreground/70 hover:text-primary-light transition-colors text-sm"
                   >
                     {link.name}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Industries */}
           <div>
             <h4 className="font-semibold mb-4">Industries</h4>
             <ul className="space-y-3">
               {footerLinks.industries.map((link) => (
                 <li key={link.name}>
                   <Link
                     to={link.href}
                     className="text-primary-foreground/70 hover:text-primary-light transition-colors text-sm"
                   >
                     {link.name}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-semibold mb-4">Contact</h4>
             <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 text-primary-light" />
                <a
                  href="mailto:support@aileadx.in"
                  className="hover:text-primary-light transition-colors"
                >
                  support@aileadx.in
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 text-primary-light" />
                <a href="tel:+919310619651" className="hover:text-primary-light transition-colors">
                  9310619651
                </a>
              </li>
             </ul>
           </div>
         </div>
 
         {/* Bottom Bar */}
         <div className="mt-12 pt-8 border-t border-primary-foreground/10">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-primary-foreground/60">
               © {new Date().getFullYear()} AiLeadX. All rights reserved.
             </p>
             <div className="flex space-x-6">
               {footerLinks.legal.map((link) => (
                 <Link
                   key={link.name}
                   to={link.href}
                   className="text-sm text-primary-foreground/60 hover:text-primary-light transition-colors"
                 >
                   {link.name}
                 </Link>
               ))}
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 }