import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, Clock, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Home", "About", "Services", "Portfolio", "Careers", "Blog", "Testimonials", "Contact"
  ];

  const services = [
    "Android App Development",
    "Web Development", 
    "UI/UX Design",
    "CRM Software",
    "Cloud Solutions",
    "Cybersecurity"
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
  ];

  return (
    <footer className="bg-background border-t-4 border-primary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-black text-primary mb-2">AppDost</h3>
              <div className="h-1 w-12 bg-accent"></div>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Complete IT Solution for your business needs. We deliver innovative technology solutions that drive growth and success.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-muted border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 shadow-brutal"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-black text-foreground mb-2">Quick Links</h4>
              <div className="h-1 w-12 bg-accent"></div>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary font-bold transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-black text-foreground mb-2">Our Services</h4>
              <div className="h-1 w-12 bg-accent"></div>
            </div>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary font-bold transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <h4 className="text-xl font-black text-foreground mb-2">Contact Info</h4>
              <div className="h-1 w-12 bg-accent"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:contact@appdost.in" className="text-foreground/70 hover:text-primary font-bold block transition-colors">
                    contact@appdost.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+917635075422" className="text-foreground/70 hover:text-primary font-bold block transition-colors">
                    +91 76350 75422
                  </a>
                  <a href="tel:+911169290750" className="text-foreground/70 hover:text-primary font-bold block transition-colors">
                    +91 11 6929 0750
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground/70 font-bold">
                  Mon - Sat: 9:00 AM - 6:00 PM IST
                </p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground/70 font-bold">
                  <span className="font-black text-foreground">3 Offices:</span> Banka (HQ), Motihari, Patna
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/70 font-bold text-sm">
              © 2025 AppDost - Complete IT Solution. All rights reserved.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <span className="text-foreground/30">•</span>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span className="text-foreground/30">•</span>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>

            <div className="flex items-center gap-2 text-foreground/70 font-bold text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
