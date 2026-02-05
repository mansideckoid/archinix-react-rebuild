import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with understanding your vision, requirements, and lifestyle. Our designers visit your space to assess dimensions and discuss possibilities.',
  },
  {
    number: '02',
    title: 'Design Concept',
    description: 'Our team creates detailed 3D renderings and material selections, ensuring every element aligns with your aesthetic preferences.',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Your custom pieces are crafted in our high-end factory using premium materials and state-of-the-art German machinery.',
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Our professional team handles precise installation, ensuring flawless execution and minimal disruption to your daily life.',
  },
  {
    number: '05',
    title: 'Follow-Up',
    description: 'We conduct a final walkthrough with you and provide ongoing support, backed by our comprehensive warranty program.',
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-24 lg:py-32 bg-secondary" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            How We Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title text-foreground"
          >
            Our Process
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-[5.5rem] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 lg:py-8"
              >
                {/* Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-28 h-28 bg-background rounded-sm shadow-soft flex items-center justify-center">
                    <span className="font-serif text-4xl font-bold text-accent-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 lg:pt-4">
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
