import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './BlogHero.css';

const BlogHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions!;
        const dur = reduceMotion ? 0 : 0.9;

        // Staggered entrance for hero elements
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(labelRef.current, {
          y: 30,
          autoAlpha: 0,
          duration: dur,
        })
          .from(
            titleRef.current,
            {
              y: 50,
              autoAlpha: 0,
              duration: dur * 1.1,
            },
            '-=0.5'
          )
          .from(
            subtitleRef.current,
            {
              y: 30,
              autoAlpha: 0,
              duration: dur,
            },
            '-=0.5'
          )
          .from(
            lineRef.current,
            {
              scaleX: 0,
              duration: dur * 1.2,
              ease: 'power2.inOut',
            },
            '-=0.3'
          );
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="blog-hero" aria-label="Blog page hero">
      <div className="blog-hero__grain" />

      <div className="blog-hero__content">
        <div ref={labelRef} className="blog-hero__label">
          <span className="blog-hero__label-dot" />
          Fresh Stories
        </div>

        <h1 ref={titleRef} className="blog-hero__title">
          The City Lassi{' '}
          <span className="blog-hero__title-accent">Journal</span>
        </h1>

        <p ref={subtitleRef} className="blog-hero__subtitle">
          Discover refreshing recipes, healthy living tips, and behind-the-scenes
          stories from Dubai's most-loved beverage destination.
        </p>
      </div>

      <div ref={lineRef} className="blog-hero__line" />
    </section>
  );
};

export default BlogHero;
