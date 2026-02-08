import { useState, useEffect, useRef, type RefObject } from 'react';

export function useInView(options?: IntersectionObserverInit): [RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px', ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
