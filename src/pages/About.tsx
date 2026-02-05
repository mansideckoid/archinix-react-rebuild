import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { About as AboutSection } from '@/components/About';
import { motion } from 'framer-motion';

const About = () => {
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
                Who We Are
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                About Dana Woodworks
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Crafting exceptional interiors with precision, passion, and over two decades of expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <AboutSection />

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-secondary p-10 rounded-sm"
              >
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver world-class interior fit-out solutions that combine innovative design, 
                  superior craftsmanship, and personalized service, ensuring every space we create 
                  reflects our clients' unique vision and exceeds their expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-secondary p-10 rounded-sm"
              >
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the UAE's most trusted name in luxury woodworking and interior design, 
                  recognized for our unwavering commitment to quality, innovation, and 
                  creating timeless spaces that inspire and endure.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-secondary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="section-label">What Drives Us</span>
              <h2 className="section-title text-foreground">Our Core Values</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Excellence',
                  description: 'We strive for perfection in every detail, from design to final installation.',
                },
                {
                  title: 'Integrity',
                  description: 'We build lasting relationships through honesty, transparency, and trust.',
                },
                {
                  title: 'Innovation',
                  description: 'We embrace new technologies and techniques to deliver cutting-edge solutions.',
                },
                {
                  title: 'Client Focus',
                  description: 'Your vision is our priority. We listen, understand, and deliver beyond expectations.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8 rounded-sm text-center hover:shadow-medium transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-xl font-bold text-accent">{index + 1}</span>
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
