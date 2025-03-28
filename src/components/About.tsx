import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return <section id="about" ref={sectionRef} className="py-24 bg-dark text-white section-reveal">
      <div className="container-section">
        <SectionTitle title="About me" description="Merging design, code, and strategy to build better tools." />
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-lg">
              <p>I’m Luke — a creative technologist working at the intersection of design, product, and storytelling.</p>
              <p>My background blends strategy, design, and growth, but at the heart of it all is a love for building things that sit between creativity and technology. I’ve rebranded edtech companies, launched AI tools for therapists, run design sprints disguised as events, and built apps that help people meet in the moment.</p>
              <p className="font-medium">I think the best ideas happen when logic and imagination collide — when a concept is beautiful and functional, poetic and practical. That’s the space I like to work in.




Right now, I’m exploring how to design tools, experiences, and communities that bring people closer together — online and IRL.</p>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-display font-bold mb-6">My Skillset</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>Product Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>UX/UI Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>Growth + Marketing
                  </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>Brand Identity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>Creative Direction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>Prototyping</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Profile" className="w-full h-full object-cover" src="/lovable-uploads/luke-headshot-2.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;