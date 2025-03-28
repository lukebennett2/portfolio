
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  description?: string | ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({ 
  title, 
  description, 
  align = 'center',
  className 
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        'mb-12 md:mb-16',
        {
          'text-left': align === 'left',
          'text-center': align === 'center',
          'text-right': align === 'right'
        },
        className
      )}
    >
      <h2 className="section-title">{title}</h2>
      {description && (
        <div className={cn(
          'text-lg md:text-xl text-muted-foreground mt-4',
          {
            'max-w-2xl': align === 'center',
            'mx-auto': align === 'center'
          }
        )}>
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
