
import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

const services = [
  {
    id: 1,
    title: 'Product Design',
    description: 'I craft user-centered digital products with intuitive interfaces and seamless experiences that delight users.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.0004 5V3M12.0004 21V19M5.00043 12H3.00043M21.0004 12H19.0004M18.3645 18.364L16.9503 16.95M18.3645 5.63603L16.9503 7.05025M5.63632 5.63603L7.05053 7.05025M5.63632 18.364L7.05053 16.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Brand Identity',
    description: 'I develop distinctive brand identities that tell compelling stories and create lasting impressions on your audience.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9997 8L10.0008 12.0002L11.9997 16.0002L13.9994 12.0002L11.9997 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.0001 9.99987L13.9994 12.0002L19.0001 13.9994L17.0003 9.99987L19.0001 9.99987Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.00043 9.99985L7.00014 9.99985L4.99957 13.9994L10.0008 12.0002L5.00043 9.99985Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Art Direction',
    description: 'I guide creative vision through collaboration with photographers, illustrators, and designers to achieve cohesive outputs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 7.5V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V16.5M16 12L12 8M12 8L8 12M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Design Systems',
    description: 'I build scalable design systems that provide consistency, efficiency, and cohesion across all digital touchpoints.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Strategy & Consulting',
    description: 'I help businesses align their design and brand efforts with strategic goals to maximize impact and ROI.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16C2.814 16 2.5 13 2.5 12M9 16C15.186 16 15.5 13 15.5 12M9 16V20M9 20H5M9 20H13M2.5 12C2.5 11 2.814 8 9 8M2.5 12H5M15.5 12C15.5 11 15.186 8 9 8M15.5 12H19M9 8V4M9 4H5M9 4H13M15 20L18 17M18 17L21 20M18 17L18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Workshops & Training',
    description: "I facilitate tailored workshops and training sessions to elevate your team&apos;s design thinking and creative problem-solving.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.042C10.3516 4.56336 8.2144 4 6 4C4.94079 4 3.19359 4.19063 2 4.5C2 11.8125 6.04219 16.5956 12 20C17.9578 16.5956 22 11.8125 22 4.5C20.8064 4.19063 19.0578 4 18 4C15.7856 4 13.6484 4.56336 12 6.042Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const Services = () => {
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
    <section id="services" ref={sectionRef} className="py-24 bg-dark text-white section-reveal">
      <div className="container-section">
        <SectionTitle 
          title="My Services" 
          description="I offer a range of services to help businesses create meaningful connections with their audience."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <div key={service.id} className="glass-card p-8 transition-transform hover:-translate-y-2 duration-300">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <span className="text-white">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Ready to elevate your brand?</h3>
              <p className="text-white/70 mb-6">
                Let&apos;s collaborate on a project that brings your vision to life. I&apos;m currently available for 
                new projects and would love to discuss how we can work together.
              </p>
              <a href="#contact" className="pill-button">Get in touch</a>
            </div>
            <div className="relative hidden md:block">
              <div className="aspect-[3/2] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531496730074-83b874c21912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Collaboration" 
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

export default Services;
