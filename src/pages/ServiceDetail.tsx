import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getServiceById, services } from '@/data/services';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = getServiceById(id || '');

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container-wide text-center">
            <h1 className="font-serif text-4xl text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related services (next 3 services)
  const currentIndex = services.findIndex((s) => s.id === service.id);
  const relatedServices = [
    ...services.slice(currentIndex + 1, currentIndex + 4),
    ...services.slice(0, Math.max(0, 3 - (services.length - currentIndex - 1))),
  ].slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-widest mb-6 hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>

              <div className="flex items-start gap-6 mb-6">
                <span className="text-6xl md:text-7xl font-serif font-bold text-primary-foreground/20">
                  {service.number}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground pt-4">
                  {service.title}
                </h1>
              </div>

              <p className="text-primary-foreground/80 max-w-3xl text-lg md:text-xl leading-relaxed">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Image */}
        <section className="relative -mt-12 mb-24">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Description & Features */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  About This Service
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-foreground">
                      <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button size="lg" asChild>
                  <Link to="/#contact">
                    Request a Quote
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  What's Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 bg-secondary rounded-sm"
                    >
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-foreground text-xs font-medium">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-secondary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="section-label">How We Work</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Our Process
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-serif font-bold text-accent/20 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {step.step}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>

                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {service.galleryImages.length > 1 && (
          <section className="py-24 bg-background">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <span className="section-label">Gallery</span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                  Project Examples
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {service.galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="image-reveal aspect-[4/3] overflow-hidden rounded-sm"
                  >
                    <img
                      src={image}
                      alt={`${service.title} example ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        <section className="py-24 bg-primary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-accent text-sm uppercase tracking-widest mb-4 block">
                Explore More
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground">
                Related Services
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/services/${relatedService.id}`} className="group block">
                    <div className="image-reveal aspect-[4/3] mb-4 overflow-hidden rounded-sm">
                      <img
                        src={relatedService.image}
                        alt={relatedService.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-accent text-sm">{relatedService.number}</span>
                    <h3 className="font-serif text-xl font-medium text-primary-foreground group-hover:text-accent transition-colors">
                      {relatedService.title}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
                Contact us today to discuss your {service.title.toLowerCase()} project and receive a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/#contact">
                    Request Consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
                  asChild
                >
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

export default ServiceDetail;
