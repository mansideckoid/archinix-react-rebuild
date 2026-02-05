import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title text-foreground mb-8"
            >
              Let's Create
              <br />
              Something Beautiful
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-12 max-w-md"
            >
              Ready to transform your space? Book a free consultation with our 
              design experts and take the first step towards your dream home.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <a 
                href="tel:+971561561112" 
                className="flex items-center gap-4 text-foreground hover:text-accent-foreground transition-colors group"
              >
                <div className="w-14 h-14 bg-secondary rounded-sm flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Phone className="h-5 w-5 group-hover:text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-medium">+971 56 156 1112</p>
                </div>
              </a>

              <a 
                href="mailto:info@danawoodworks.ae" 
                className="flex items-center gap-4 text-foreground hover:text-accent-foreground transition-colors group"
              >
                <div className="w-14 h-14 bg-secondary rounded-sm flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail className="h-5 w-5 group-hover:text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-medium">info@danawoodworks.ae</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary rounded-sm flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="font-medium">Al Nakheel Street, Deira, Behind Nakheel Centre and Deira Fortune Hotel - Dubai</p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10"
            >
              {/* <Button variant="default" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://wa.me/971XXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button> */}
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-secondary p-8 lg:p-12 rounded-sm"
          >
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
              Book Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
