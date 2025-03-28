
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CaseStudies from '@/components/CaseStudies';
import OtherProjects from '@/components/OtherProjects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    // Observe all section-reveal elements
    document.querySelectorAll('.section-reveal').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      // Clean up observer
      document.querySelectorAll('.section-reveal').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <OtherProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
