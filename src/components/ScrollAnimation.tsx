import { ReactNode, forwardRef, ElementType } from 'react';
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
  as?: ElementType;
}

export const ScrollAnimation = forwardRef<Element, ScrollAnimationProps>(
  (props, forwardedRef) => {
    const {
      children,
      type = 'fade-up',
      className,
      delay = 0,
      threshold = 0.1,
      rootMargin = '0px',
      triggerOnce = true,
      as: Component = 'div',
      ...rest
    } = props;
    
    const { ref, isInView } = useScrollAnimation({
      threshold,
      rootMargin,
      triggerOnce
    });

    const animationClass = `scroll-${type}`;
    const delayStyle = delay ? { transitionDelay: `${delay}ms` } : undefined;

    // Using type assertion to avoid complex union type
    return (
      <Component
        {...rest}
        // @ts-ignore - Necessary to avoid complex union type error
        ref={(node: Element | null) => {
          // Update the inner ref
          (ref as any).current = node;
          
          // Update the forwarded ref
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            (forwardedRef as any).current = node;
          }
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