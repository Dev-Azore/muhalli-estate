'use client';

import { useEffect, useRef, useState } from 'react';

interface UseFadeInOnScrollOptions {
  threshold?: number;
  delay?: number; // ms
  rootMargin?: string;
}

interface UseFadeInOnScrollReturn {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
  style: React.CSSProperties;
}

/**
 * Reusable Intersection Observer hook for scroll-triggered reveal animations.
 * Returns a ref to attach to the target element, an isVisible boolean,
 * and a pre-built style object for CSS transitions.
 *
 * Usage:
 *   const { ref, style } = useFadeInOnScroll({ delay: 100 });
 *   return <div ref={ref as React.RefObject<HTMLDivElement>} style={style}>...</div>
 */
export function useFadeInOnScroll({
  threshold = 0.12,
  delay = 0,
  rootMargin = '0px 0px -40px 0px',
}: UseFadeInOnScrollOptions = {}): UseFadeInOnScrollReturn {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return { ref, isVisible, style };
}

/**
 * Hook for animating a number counter from 0 to a target value.
 * Used in TrustBar stats.
 */
export function useCountUp(
  target: number,
  duration = 1500,
  isActive = false
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive || target === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    const start = performance.now();
    const step = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, isActive]);

  return count;
}

/**
 * Hook to detect if element is in viewport (simple boolean, no style).
 */
export function useInView(threshold = 0.1): {
  ref: React.RefObject<HTMLElement | null>;
  inView: boolean;
} {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
