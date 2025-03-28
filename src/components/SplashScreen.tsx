import { useState } from 'react';
import { Monitor } from 'lucide-react';
interface SplashScreenProps {
  onComplete: () => void;
}
const SplashScreen = ({
  onComplete
}: SplashScreenProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // After animation completes, trigger the onComplete callback
    setTimeout(() => {
      onComplete();
    }, 1000);
  };
  return <div className={`fixed inset-0 z-50 bg-cream flex items-center justify-center transition-all duration-1000 ${isAnimating ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="relative w-full max-w-3xl mx-auto px-4">
        <div className="relative bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-700 hover:shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF6A5C] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBE2E] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#2ACA44]"></div>
          </div>
          
          <div className="relative aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer group" onClick={handleClick}>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <Monitor className="w-16 h-16 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center">
                <span className="text-xl font-medium group-hover:scale-105 transition-transform">click me</span>
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-white opacity-75 ml-1.5 mt-1"></span>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <div className="mt-4 flex justify-between items-center text-dark/60 text-sm">
            <div>portfolio.luke</div>
            
          </div>
        </div>
        
        
      </div>
    </div>;
};
export default SplashScreen;