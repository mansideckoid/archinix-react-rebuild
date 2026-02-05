import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show only first 4 projects on homepage
  const displayedProjects = projects.slice(0, 4);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length);
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-primary text-primary-foreground" ref={ref}>
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4"
            >
              The Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight"
            >
              Recent Projects
            </motion.h2>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 mt-8 lg:mt-0"
          >
            <button
              onClick={prevProject}
              className="w-12 h-12 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 border border-primary-foreground/30 rounded-full flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            >
              <Link to={`/projects/${project.id}`} className="group cursor-pointer block">
                <div className="image-reveal relative aspect-[3/4] mb-4 overflow-hidden rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                      <ArrowUpRight className="h-6 w-6 text-foreground" />
                    </div>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl font-medium text-background mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-background/70">
                      {project.location} • {project.year}
                    </p>
                  </div>
                </div>

                <span className="text-sm text-accent font-medium">
                  {project.category}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
