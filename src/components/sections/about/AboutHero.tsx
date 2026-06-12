import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const previewImages = [
  { id: 1, src: '/about/about01.png', alt: 'City Lassy About 1' },
  { id: 2, src: '/about/about02.png', alt: 'City Lassy About 2' },
  { id: 3, src: '/about/about03.png', alt: 'City Lassy About 3' },
  { id: 4, src: '/about/about04.png', alt: 'City Lassy About 4' },
  { id: 5, src: '/about/about05.png', alt: 'City Lassy About 5' },
];

const AboutHero: React.FC = () => {
  const bgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    // Initial setup: make only the first image visible
    let ctx = gsap.context(() => {
      bgRefs.current.forEach((img, i) => {
        if (img) {
          gsap.set(img, { autoAlpha: i === 0 ? 1 : 0 });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index: number) => {
    bgRefs.current.forEach((img, i) => {
      if (!img) return;
      if (i === index) {
        // Bring in new image
        gsap.to(img, {
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
        });
      } else {
        // Fade out other images
        gsap.to(img, {
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-brand-dark">
      {/* Background Images Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {previewImages.map((image, i) => (
          <img
            key={image.id}
            ref={(el) => (bgRefs.current[i] = el)}
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        {/* Subtle overlay to ensure the cards on the right remain slightly visible if bg is too bright */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right Side 5 Image Cards Stack */}
      <div className="absolute right-5 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        {previewImages.map((image, i) => (
          <div
            key={`card-${image.id}`}
            className="w-20 h-24 md:w-28 md:h-36 rounded-xl overflow-hidden border-2 border-white/30 cursor-pointer hover:border-brand-yellow hover:scale-105 transition-all duration-300 shadow-xl"
            onMouseEnter={() => handleMouseEnter(i)}
          >
            <img
              src={image.src}
              alt={`${image.alt} thumbnail`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;
