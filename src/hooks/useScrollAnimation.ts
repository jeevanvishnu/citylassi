import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animation: 'fadeUp' | 'clipReveal' = 'fadeUp') => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (animation === 'fadeUp') {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }
      if (animation === 'clipReveal') {
        gsap.from(el, {
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, [animation]);

  return ref;
};
