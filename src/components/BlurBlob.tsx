
import { useEffect, useRef } from 'react';

interface BlurBlobProps {
  color: string;
  size: number;
  className?: string;
}

const BlurBlob = ({ color, size, className = '' }: BlurBlobProps) => {
  const blobRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;
    
    const animateBorderRadius = () => {
      const randomValue = () => {
        return Math.floor(Math.random() * 50) + 30;
      };
      
      // Randomly change the border radius to create the morphing effect
      const borderRadius = `${randomValue()}% ${randomValue()}% ${randomValue()}% ${randomValue()}% / ${randomValue()}% ${randomValue()}% ${randomValue()}% ${randomValue()}%`;
      blob.style.borderRadius = borderRadius;
    };
    
    // Create the animation
    animateBorderRadius();
    const interval = setInterval(animateBorderRadius, 2000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div 
      ref={blobRef}
      className={`blob absolute ${className} animate-blob-bounce opacity-70 blur-2xl`}
      style={{ 
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default BlurBlob;
