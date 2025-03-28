
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-10 bg-dark text-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-dark font-display font-bold">LB</span>
            </div>
          </div>
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-white/70">
              &copy; {new Date().getFullYear()} Luke B. All rights reserved.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
