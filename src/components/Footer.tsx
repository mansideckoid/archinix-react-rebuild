import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const navigation = {
  services: [
    { name: "Luxury Kitchens", href: "#services" },
    { name: "Walk-in Closets", href: "#services" },
    { name: "Vanity Units", href: "#services" },
    { name: "Wall Panelling", href: "#services" },
    { name: "Home Renovation", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "Our Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-serif text-xl font-bold">
                  D
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold">Dana</span>
                <span className="text-xs tracking-widest uppercase text-background/60">
                  Woodworks
                </span>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed mb-6">
              UAE's premier provider of bespoke home interior design and
              custom-made furniture.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-colors group"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Contact</h4>
            <div className="space-y-3 text-background/70">
              <p>
                Al Nakheel Street, Deira, Behind Nakheel Centre and Deira
                Fortune Hotel - Dubai
              </p>
              <p>
                <a
                  href="tel:+971561561112"
                  className="hover:text-accent transition-colors"
                >
                  +971 56 156 1112
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@danawoodworks.ae"
                  className="hover:text-accent transition-colors"
                >
                  info@danawoodworks.ae
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Dana Woodworks. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
