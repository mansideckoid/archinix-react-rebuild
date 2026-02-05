import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Users, Hammer } from 'lucide-react';

const stats = [
  { icon: Clock, value: '20+', label: 'Years Experience' },
  { icon: Users, value: '2,500+', label: 'Happy Clients' },
  { icon: Award, value: '100+', label: 'Awards Won' },
  { icon: Hammer, value: '5,000+', label: 'Projects Completed' },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title text-foreground mb-6"
            >
              The Art of
              <br />
              Fine Woodworking
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-lg leading-relaxed">
                Dana Wooden Works is the UAE's premier provider of bespoke home interior 
                design, fit-out solutions, and custom-made furniture. With a legacy built 
                on precision craftsmanship and timeless design, we specialize in transforming 
                residential spaces into elegant, functional environments.
              </p>
              <p className="leading-relaxed">
                From luxurious kitchens and tailor-made closets to handcrafted vanities and 
                full-home fit-outs, every project we undertake reflects our commitment to 
                excellence, innovation, and client satisfaction. Our expert team works 
                closely with homeowners, architects, and consultants to deliver seamless, 
                end-to-end interior solutions.
              </p>
            </motion.div>

            {/* Partner Brands */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10"
            >
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Trusted Partners
              </p>
              <div className="flex flex-wrap gap-6 items-center text-foreground/60">
                <span className="font-semibold">Blum</span>
                <span className="font-semibold">Hettich</span>
                <span className="font-semibold">Siemens</span>
                <span className="font-semibold">Teka</span>
                <span className="font-semibold">Pfleiderer</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-background p-8 rounded-sm shadow-soft hover:shadow-medium transition-shadow"
              >
                <stat.icon className="h-10 w-10 text-accent mb-4" />
                <div className="font-serif text-4xl font-semibold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
