import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories } from '@/data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

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
                Our Portfolio
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Featured Projects
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Explore our collection of bespoke interiors crafted for discerning clients across the UAE.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-12 bg-secondary border-b border-border">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-sm text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/projects/${project.id}`} className="group cursor-pointer block">
                    <div className="image-reveal relative aspect-[4/5] mb-5 overflow-hidden rounded-sm">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500 flex items-center justify-center">
                        <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                          <ArrowUpRight className="h-6 w-6 text-foreground" />
                        </div>
                      </div>

                      {/* Project Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="text-xs uppercase tracking-widest text-accent mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="font-serif text-xl font-medium text-background mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-background/70">
                          {project.location} • {project.year}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-primary">
          <div className="container-wide">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '5,000+', label: 'Projects Completed' },
                { value: '2,500+', label: 'Happy Clients' },
                { value: '20+', label: 'Years Experience' },
                { value: '100+', label: 'Awards Won' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-sm uppercase tracking-widest">
                    {stat.label}
                  </div>
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

export default Projects;