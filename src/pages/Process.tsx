import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Process as ProcessSection } from '@/components/Process';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const whyChooseUs = [
  {
    title: '20+ Years Experience',
    description: 'Two decades of excellence in luxury woodworking and interior design across the UAE.',
  },
  {
    title: 'German Machinery',
    description: 'State-of-the-art manufacturing equipment ensuring precision and quality in every piece.',
  },
  {
    title: 'Premium Materials',
    description: 'We source only the finest materials from trusted global suppliers.',
  },
  {
    title: 'Expert Craftsmen',
    description: 'Our team of skilled artisans brings decades of combined experience to your project.',
  },
  {
    title: 'End-to-End Service',
    description: 'From initial consultation to final installation, we manage every detail.',
  },
  {
    title: 'Warranty & Support',
    description: 'Comprehensive warranty backed by responsive after-sales support.',
  },
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A standard kitchen typically takes 4-6 weeks from design approval to installation, while full home fit-outs may require 8-12 weeks.',
  },
  {
    question: 'Do you provide 3D designs before production?',
    answer: 'Yes, we create detailed 3D renderings for all projects. This allows you to visualize the final result and make any adjustments before production begins.',
  },
  {
    question: 'What warranty do you offer?',
    answer: 'We provide a comprehensive 5-year warranty on all our woodwork, covering manufacturing defects and structural integrity. Hardware components carry their respective manufacturer warranties.',
  },
  {
    question: 'Do you work with architects and consultants?',
    answer: 'Absolutely. We regularly collaborate with architects, interior designers, and project consultants to ensure seamless integration of our work into larger projects.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve clients throughout the UAE, including Dubai, Abu Dhabi, Sharjah, and other emirates. We also undertake select international projects.',
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="text-accent text-sm uppercase tracking-widest mb-4 block">
                How We Work
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Our Process
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                A seamless journey from initial concept to flawless execution, guided by our commitment to excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <ProcessSection />

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="section-label">Why Dana Woodworks</span>
              <h2 className="section-title text-foreground">Why Choose Us</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-secondary p-8 rounded-sm hover:shadow-medium transition-shadow"
                >
                  <CheckCircle className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-secondary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="section-label">Questions</span>
              <h2 className="section-title text-foreground">Frequently Asked</h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8 rounded-sm"
                >
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
                Start Your Project Today
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
                Schedule a free consultation with our design team and take the first step toward your dream interior.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="/#contact">
                    Book Free Consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <a href="tel:+971XXXXXXXX">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Process;
