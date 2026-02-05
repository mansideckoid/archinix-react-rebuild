import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '/danawood/' },
  { name: 'About', href: '/danawood/about' },
  { name: 'Services', href: '/danawood/services' },
  { name: 'Projects', href: '/danawood/projects' },
  { name: 'Process', href: '/danawood/process' },
  { name: 'Contact', href: '/danawood/#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-wide flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+971561561112" className="flex items-center gap-2 hover:text-accent-foreground transition-colors">
              <Phone size={14} />
              <span>+971 56 156 1112</span>
            </a>
            <a href="mailto:info@works.ae" className="flex items-center gap-2 hover:text-accent-foreground transition-colors">
              <Mail size={14} />
              <span>info@works.ae</span>
            </a>
          </div>
          <span className="text-primary-foreground/80">UAE's Premier Luxury Woodworking & Interior Design</span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-xl font-bold">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-foreground">Dana</span>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">Woodworks</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" size="lg" className="font-medium" asChild>
              <a href="#contact">Get Free Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="pt-24 px-6">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif font-medium text-foreground hover:text-accent-foreground transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-8">
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Free Consultation
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
