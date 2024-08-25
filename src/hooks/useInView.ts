import { useEffect, useState, useRef } from 'react';

interface UseInViewOptions {
  root?: HTMLDivElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useInView = (options?: UseInViewOptions): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      {
        root: options?.root || null,
        rootMargin: options?.rootMargin || '0px',
        threshold: options?.threshold || 0,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isInView, options]);

  return [ref, isInView];
};