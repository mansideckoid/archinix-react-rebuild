import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, MapPin, Calendar, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectById, projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container-wide text-center">
            <h1 className="font-serif text-4xl text-foreground mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related projects (same category or next projects)
  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .filter((p) => p.category === project.category)
    .slice(0, 3);

  // If not enough related, add other projects
  if (relatedProjects.length < 3) {
    const otherProjects = projects
      .filter((p) => p.id !== project.id && !relatedProjects.includes(p))
      .slice(0, 3 - relatedProjects.length);
    relatedProjects.push(...otherProjects);
  }

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
                to="/projects"
                className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-widest mb-6 hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                All Projects
              </Link>

              <span className="text-accent text-sm uppercase tracking-widest mb-4 block">
                {project.category}
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{project.year}</span>
                </div>
              </div>
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
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-24 bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Project Overview
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {project.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      Our Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-secondary p-8 rounded-sm">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Project Details
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Location</span>
                      <span className="text-foreground font-medium">{project.location}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Category</span>
                      <span className="text-foreground font-medium">{project.category}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Year</span>
                      <span className="text-foreground font-medium">{project.year}</span>
                    </div>
                  </div>

                  <h4 className="font-medium text-foreground mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.galleryImages.length > 1 && (
          <section className="py-24 bg-secondary">
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
                  Project Gallery
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {project.galleryImages.map((image, index) => (
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
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-24 bg-background">
            <div className="container-narrow">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <Quote className="h-12 w-12 text-accent mx-auto mb-8" />
                <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
                  "{project.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-medium text-foreground">{project.testimonial.author}</div>
                  <div className="text-muted-foreground text-sm">{project.testimonial.role}</div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Related Projects */}
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
                More Work
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground">
                Related Projects
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/projects/${relatedProject.id}`} className="group block">
                    <div className="image-reveal aspect-[4/3] mb-4 overflow-hidden rounded-sm">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-accent text-sm">{relatedProject.category}</span>
                    <h3 className="font-serif text-xl font-medium text-primary-foreground group-hover:text-accent transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm mt-1">
                      {relatedProject.location} • {relatedProject.year}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/projects">
                  View All Projects
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
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
                Start Your Project Today
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
                Let's create something exceptional together. Contact us to discuss your vision.
              </p>
              <Button size="lg" asChild>
                <Link to="/#contact">
                  Request Consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
