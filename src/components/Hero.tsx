import { useEffect, useState } from 'react';
import BlurBlob from './BlurBlob';
import { motion } from "framer-motion";
import './Hero.css'; 

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);



  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
      {/* Background blobs */}
      <BlurBlob color="#2A669C" size={400} className="left-0 top-1/4 -ml-32" />
      <BlurBlob color="#E28F13" size={350} className="right-0 bottom-1/4 -mr-32" />
    
    {/* Conatiner */}
      <div className="container mx-auto px-4 sm:px-6 z-10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start gap-8">
                {/* Animated Dots */}
<div className="absolute inset-0 z-0 pointer-events-none">
  <div className="dot dot-1" />
  <div className="dot dot-2" />
  <div className="dot dot-3" />
</div>

<div className="relative z-10 max-w-7xl mx-auto">
  {/* Floating Luke - now outside the black card */}
  <img
    src="/lovable-uploads/Luke running opposite.png"
    alt="Hero Floating Luke"
    className="
      hidden sm:block
      absolute z-20 
      bottom-[-10px] right-[-120px]
      w-[300px] sm:w-[400px] md:w-[500px]
      drop-shadow-2xl
      pointer-events-none
    "
  />
              {/* Black Card */}
            <div className="relative z-10 max-w-7xl mx-auto rounded-3xl bg-[#1A1A1A] text-white px-10 py-20 shadow-xl overflow-hidden">
              <div className="flex-1">
              <div className="max-w-6xl mx-auto pr-0 md:pr-[300px]">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight">
  Hey, I'm Luke
  <span className="block mt-2">
    — I{" "}
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="relative inline-flex items-center justify-center bg-[#2A669C]/20 text-[#2A669C] rounded-full px-3 py-0.5"
    >
      design
      <motion.svg
        animate={{
          y: [0, -2, 0, 2, 0],
          x: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0.5 -right-1 w-3 h-3 text-[#2A669C]"
        viewBox="0 0 12 12"
        fill="currentColor"
      >
        <circle cx="6" cy="6" r="6" />
      </motion.svg>
    </motion.span>
    <span className="ml-1">,</span> strategise, and{" "}
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative inline-flex items-center justify-center bg-[#E28F13]/20 text-[#E28F13] rounded-full px-4 py-2"
    >
      build
      <motion.svg
        animate={{
          y: [0, 2, 0, -2, 0],
          x: [0, -1, 0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0.5 -right-1 w-3 h-3 text-[#E28F13]"
        viewBox="0 0 12 12"
        fill="currentColor"
      >
        <circle cx="6" cy="6" r="6" />
      </motion.svg>
    </motion.span>{" "}
    things people love.
  </span>
</h1>
</div>
</div>
              </div>
            </div>
          </div>
          
          <div className={`mt-8 max-w-3xl text-lg md:text-xl text-dark/80 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>I’m a creative technologist who blends strategy, design, and code to bring bold ideas to life. This is a collection of the things I’ve built — digital, physical, playful, purposeful.

</p>
          </div>
          
          <div className={`mt-10 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap gap-3">
              <a href="#case-studies" className="pill-button">
                Show me the goods!
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all bg-secondary text-foreground hover:bg-secondary/80">
                Let's chat
              </a>
            </div>
          </div>
          
          <div className={`mt-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-medium transition-all border border-dark/20 hover:bg-black/5">
                Instagram
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-medium transition-all border border-dark/20 hover:bg-black/5">
                LinkedIn
              </a>
              
            </div>
          </div>
        </div>
      </div>

      
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-dark/50 hover:text-dark transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div
  className="pointer-events-none fixed z-0 w-40 h-40 rounded-full bg-[#FF9D5C]/20 blur-3xl transition-transform duration-300 ease-out"
  style={{
    transform: `translate(${cursor.x}px, ${cursor.y}px)`
  }}
></div>
</div>
    </section>;
    
};
export default Hero;