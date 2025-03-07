import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollTo } from '@/hooks/useScrollTo';

interface ScrollToTopProps {
  showAfter?: number;
  className?: string;
}

export const ScrollToTop = ({
  showAfter = 300,
  className
}: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollTo } = useScrollTo();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const handleClick = () => {
    scrollTo('hero', { offset: 0, duration: 800 });
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 p-3 rounded-full bg-cyber-blue text-white shadow-lg z-50 transition-all duration-300 hover:bg-cyber-blue/90 hover:shadow-xl',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none',
        className
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}; 