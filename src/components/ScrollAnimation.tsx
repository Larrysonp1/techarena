import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type AnimationType = 'fade-in' | 'fade-up' | 'fade-right' | 'fade-left';

interface ScrollAnimationProps {
  children: ReactNode;
  type?: AnimationType;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export const ScrollAnimation = forwardRef<HTMLElement, ScrollAnimationProps>(
  (
    {
      children,
      type = 'fade-up',
      className,
      delay = 0,
      threshold = 0.1,
      rootMargin = '0px',
      triggerOnce = true,
      as: Component = 'div'
    },
    forwardedRef
  ) => {
    const { ref, isInView } = useScrollAnimation({
      threshold,
      rootMargin,
      triggerOnce
    });

    const animationClass = `scroll-${type}`;
    const delayStyle = delay ? { transitionDelay: `${delay}ms` } : undefined;

    return (
      <Component
        ref={(node: any) => {
          // Merge refs
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
          ref.current = node;
        }}
        className={cn(animationClass, isInView && 'in-view', className)}
        style={delayStyle}
      >
        {children}
      </Component>
    );
  }
);

ScrollAnimation.displayName = 'ScrollAnimation'; 