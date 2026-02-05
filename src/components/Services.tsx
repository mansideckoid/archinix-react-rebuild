import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Show only first 6 services on homepage
  const displayedServices = services.slice(0, 6);

  return (
    <section id="services" className="py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title text-foreground"
          >
            Crafting Excellence
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Link to={`/services/${service.id}`} className="group cursor-pointer block">
                {/* Image Container */}
                <div className="image-reveal relative aspect-[4/5] mb-6 overflow-hidden rounded-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent-foreground transition-colors"
          >
            View All Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
