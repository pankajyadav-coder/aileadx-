import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Industries", href: "/industries" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
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
                <a href="tel:+918796681922" className="hover:text-primary-light transition-colors">
                  8796681922
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-primary-foreground/70">
                <svg className="w-4 h-4 text-primary-light fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.588 1.981 14.116.958 11.49.957 6.054.957 1.63 5.328 1.626 10.756c-.001 1.716.463 3.39 1.343 4.887l-.997 3.642 3.74-.977zm11.378-5.96c-.266-.134-1.57-.775-1.813-.863-.243-.088-.419-.133-.596.134-.176.265-.68.862-.833 1.039-.153.177-.307.199-.573.065-.266-.134-1.124-.413-2.143-1.32-.793-.707-1.329-1.58-1.485-1.847-.156-.266-.017-.411.117-.544.121-.119.266-.31.399-.465.134-.155.178-.266.266-.443.089-.178.045-.333-.022-.466-.067-.133-.596-1.436-.816-1.967-.215-.518-.45-.447-.618-.456-.16-.008-.343-.01-.527-.01-.184 0-.485.069-.739.347-.254.278-.971.95-.971 2.316 0 1.366.993 2.686 1.133 2.873.14.187 1.954 2.984 4.735 4.187.662.286 1.179.457 1.583.585.664.211 1.268.181 1.745.11.532-.079 1.57-.642 1.791-1.262.222-.619.222-1.15.155-1.262-.066-.112-.243-.178-.51-.311z" />
                </svg>
                <a href="https://wa.me/918796681922" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  WhatsApp Support
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