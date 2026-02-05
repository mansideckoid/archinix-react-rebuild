import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

const Services = () => {
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
                What We Do
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Our Services
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                From concept to completion, we deliver exceptional woodworking and interior solutions tailored to your vision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                >
                  <Link to={`/services/${service.id}`} className="group cursor-pointer block">
                    {/* Image Container */}
                    <div className="image-reveal relative aspect-[4/5] mb-6 overflow-hidden rounded-sm">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Image Coming Soon</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                      
                      {/* Number Overlay */}
                      <div className="absolute top-4 left-4 text-background/80 font-serif text-5xl font-bold">
                        {service.number}
                      </div>

                      {/* Arrow */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-accent-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </Link>
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
                Ready to Transform Your Space?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
                Let's discuss your project and bring your vision to life with our expert craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/#contact">
                    Request Consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
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

export default Services;