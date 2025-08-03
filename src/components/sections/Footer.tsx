import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap, Twitter, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "API Docs", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Changelog", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Partners", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Webinars", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR", href: "#" },
        { label: "Security", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-surface border-t border-border/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">FluxSaaS</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              The all-in-one platform that empowers teams to build, scale, and succeed. Join thousands of companies already transforming their workflows.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@fluxsaas.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-surface-elevated border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-border/50 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Stay in the loop
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest updates, feature announcements, and productivity tips delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-surface-elevated border-border/50 focus:border-primary"
              />
              <Button variant="primary" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-surface-elevated/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 FluxSaaS. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Built with ❤️ for modern teams</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;