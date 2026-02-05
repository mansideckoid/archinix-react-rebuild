import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { z } from 'zod';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(1, { message: "Phone number is required" }).max(20, { message: "Phone number must be less than 20 characters" }),
  message: z.string().trim().max(2000, { message: "Message must be less than 2000 characters" }).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I'm interested in your woodworking services. Please provide more information.");
    window.open(`https://wa.me/971561561112?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="section-label">Contact Us</span>
              <h1 className="section-title text-foreground mt-4 mb-6">
                Let's Create Something Beautiful
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to transform your space? Book a free consultation with our 
                design experts and take the first step towards your dream home.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 lg:py-24">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-8">
                  Get In Touch
                </h2>

                {/* Contact Cards */}
                <div className="space-y-6 mb-10">
                  <a 
                    href="tel:+971561561112" 
                    className="flex items-start gap-4 p-6 bg-secondary rounded-sm hover:bg-accent transition-colors group"
                  >
                    <div className="w-12 h-12 bg-background rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                      <Phone className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Call Us</p>
                      <p className="text-muted-foreground">+971 56 156 1112</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@danawoodworks.ae" 
                    className="flex items-start gap-4 p-6 bg-secondary rounded-sm hover:bg-accent transition-colors group"
                  >
                    <div className="w-12 h-12 bg-background rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                      <Mail className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Email Us</p>
                      <p className="text-muted-foreground">info@danawoodworks.ae</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-6 bg-secondary rounded-sm">
                    <div className="w-12 h-12 bg-background rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Visit Us</p>
                      <p className="text-muted-foreground">
                        Al Nakheel Street, Deira,<br />
                        Behind Nakheel Centre and Deira Fortune Hotel,<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-secondary rounded-sm">
                    <div className="w-12 h-12 bg-background rounded-sm flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Working Hours</p>
                      <p className="text-muted-foreground">
                        Saturday - Thursday: 8:00 AM - 6:00 PM<br />
                        Friday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-secondary p-8 lg:p-12 rounded-sm"
              >
                <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                  Book Free Consultation
                </h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`bg-background border-border ${errors.name ? 'border-destructive' : ''}`}
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`bg-background border-border ${errors.email ? 'border-destructive' : ''}`}
                      maxLength={255}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`bg-background border-border ${errors.phone ? 'border-destructive' : ''}`}
                      maxLength={20}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className={`bg-background border-border resize-none ${errors.message ? 'border-destructive' : ''}`}
                      maxLength={2000}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 lg:mt-24"
            >
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-8 text-center">
                Find Us
              </h2>
              <div className="aspect-[16/9] lg:aspect-[21/9] rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8584744259896!2d55.32226!3d25.27045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ce8f36ea3f5%3A0x9c0d2e5e5e5e5e5e!2sAl%20Nakheel%20St%20-%20Deira%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dana Woodworks Location"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
