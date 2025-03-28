
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { ArrowRight, Briefcase, Brush, Lightbulb, Users, Zap } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: 'Atom Learning',
    subtitle: 'Brand Strategy',
    description: 'A full company rebrand for an edtech company transforming how children learn through adaptive technology.',
    image: '/lovable-uploads/atom_learning_header.png',
    color: '#5D7AFF',
    icon: <Briefcase className="w-5 h-5" />,
    slug: 'atom-learning'
  },
  {
    id: 2,
    title: 'Stash Running',
    subtitle: 'Brand, Design, UI/UX, Event Organising',
    description: 'A creative racing studio I founded, combining strategic design with innovative event experiences for running enthusiasts.',
    image: '/lovable-uploads/alice-stash-running.png',
    color: '#FF9D5C',
    icon: <Zap className="w-5 h-5" />,
    slug: 'stash-running'
  },
  {
    id: 3,
    title: 'BuildStuff',
    subtitle: 'Brand, Design, Event Organising, Marketing',
    description: 'A creative sprint night where participants build something in 2–3 hours, fostering innovation through time-constrained creativity.',
    image: '/public/lovable-uploads/Buildstuff New.png',
    color: '#22CAAA',
    icon: <Lightbulb className="w-5 h-5" />,
    slug: 'buildstuff'
  },
  {
    id: 4,
    title: 'Rally',
    subtitle: 'Product Design, Brand',
    description: 'A spontaneous meet-up app that brings people together through intelligent matching and seamless experience design.',
    image: '/public/lovable-uploads/iphone Mockup rally.png',
    color: '#F87171',
    icon: <Users className="w-5 h-5" />,
    slug: 'rally'
  },
  {
    id: 5,
    title: 'Ogma Therapy',
    subtitle: 'Marketing, Growth, Product Management',
    description: 'Using AI to improve outcomes in speech and language therapy, combining cutting-edge technology with human-centered care.',
    image: '/lovable-uploads/ogma-header-new.png',
    color: '#A78BFA',
    icon: <Brush className="w-5 h-5" />,
    slug: 'ogma-therapy'
  }
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="case-studies" ref={sectionRef} className="py-24 bg-cream section-reveal">
      <div className="container-section">
        <SectionTitle 
          title="Case Studies" 
          description="Where the magic happens! Take a peek at some of my favorite creative adventures."
        />
        
        <div className="space-y-20 mt-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:grid-flow-col md:grid-cols-2' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <Link to={`/case-study/${project.slug}`} className="aspect-[4/3] relative overflow-hidden rounded-2xl group block">
                  <div className="absolute top-0 left-0 z-10 m-4">
                    <span className="inline-flex items-center justify-center bg-white/90 backdrop-blur-sm text-dark rounded-full px-3 py-1 text-xs font-medium">
                      {project.icon}
                      <span className="ml-1">{project.subtitle}</span>
                    </span>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center">
                    <span className="text-white font-medium">Dive into the details</span>
                    <ArrowRight className="ml-2 w-5 h-5 text-white" />
                  </div>
                </Link>
              </div>
              
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                  {project.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h3>
                <p className="text-dark/70 text-lg mb-6">{project.description}</p>
                <Link to={`/case-study/${project.slug}`} className="inline-flex items-center text-dark font-medium hover:opacity-70 transition-opacity">
                  See how I did it
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Let's create something amazing together!</h3>
              <p className="text-dark/70 mb-6">
                Got a wild idea or a tricky problem to solve? I'm all ears! Let's team up and cook up something that'll make your audience do a double-take.
              </p>
              <a href="#contact" className="pill-button">Get in touch</a>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/luke-working.png" 
                  alt="Luke portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
