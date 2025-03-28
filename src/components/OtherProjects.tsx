import { useRef, useEffect } from 'react';
import {
  Footprints,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Crews to the Coast",
    description: "A 160km ultra relay from London to Margate, blending running, community, and storytelling.",
    tags: ["Event Design", "Logistics", "Community"],
    icon: <Footprints className="w-5 h-5" />,
    color: "#7C6EAD",
    link: "/src/content/blog/crews-to-the-coast.md",
  },
  {
    id: 4,
    title: "Children’s Book",
    description: "A playful, illustrated book written for young readers exploring imagination and adventure.",
    tags: ["Writing", "Illustration", "Storytelling"],
    icon: "/lovable-uploads/childrensbook-icon.png",
    color: "#FBBF24",
    link: "/childrens-book",
  },
  {
    id: 6,
    title: "Pulsecheck",
    description: "A self-reflection and mood check-in app for teams and individuals.",
    tags: ["UI/UX", "Product", "Mental Health"],
    icon: "/lovable-uploads/pulsecheck-icon.png",
    color: "#F472B6",
    link: "/pulsecheck",
  },
  {
    id: 7,
    title: "Photography",
    description: "Ongoing analog and digital photography exploring color, space, and storytelling.",
    tags: ["Photography", "Creative Practice", "Visual Design"],
    icon: "/lovable-uploads/photo-icon.png",
    color: "#94A3B8",
    link: "https://lukebennettphoto.com",
  },
];

const OtherProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { current } = containerRef;
      const scrollAmount = direction === 'left' ? -current.clientWidth / 2 : current.clientWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="other-projects" ref={sectionRef} className="py-24 bg-[#121212] section-reveal">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl text-white font-display font-bold text-center mb-4">
          Other Creative Adventures
        </h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          A few more goodies from my design playground — swipe to explore!
        </p>

        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-[350px] snap-start">
              <div className="h-full bg-[#2A2A2A]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${project.color}50` }}
                    >
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: project.color }}
                      ></div>
                    </div>
                    <a
                      href={project.link}
                      target={project.link?.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-auto">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contact" className="inline-flex items-center text-white font-medium hover:text-white/70 transition-colors">
            Get in touch to learn more
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
