import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    image: '/product-image/freshlyshaken.webp',
    alt: 'Freshly Shaken',
  },
  {
    id: 2,
    image: '/product-image/fresh&natural.webp',
    alt: 'Fresh & Natural',
  },
  {
    id: 3,
    image: '/product-image/falooda.webp',
    alt: 'Delicious Falooda',
  },
];

const FeatureCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.feature-card', {
      y: 60,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: containerRef });

  return (
    <section className="bg-[#FAFAF8] py-12 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="feature-card rounded-3xl overflow-hidden cursor-default group"
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
