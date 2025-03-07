import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

// Easing functions
const easeInOutQuad = (t: number): number => {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
};

const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4);
};

/**
 * Custom hook for smooth scrolling to elements
 */
export const useScrollTo = () => {
  const scrollTo = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const {
      offset = 0,
      duration = 800,
      easing = easeOutQuart
    } = options;

    const element = document.getElementById(elementId);
    if (!element) return;

    const start = window.scrollY;
    const elementPosition = element.getBoundingClientRect().top;
    const destination = elementPosition + start - offset;
    
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, start + (destination - start) * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return { scrollTo };
}; 