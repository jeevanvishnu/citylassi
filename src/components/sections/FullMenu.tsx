import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FullMenu.css';

gsap.registerPlugin(ScrollTrigger);

const FullMenu: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.full-menu-card');
    
    if (cards.length === 0) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `${window.innerHeight * 5} top`,
        scrub: true, 
        pin: true,
        // markers: true, // You can uncomment this for debugging
      }
    });

    // Exclude the first child from from() animation, exclude the last from to()
    tl.from(".full-menu-card:not(:first-child)", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      stagger: 2
    });

    tl.to(".full-menu-card:not(:last-child)", {
      y: window.innerHeight,
      duration: 1,
      stagger: 2
    }, "<");

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="full-menu" className="full-menu-section bg-[#FAFAF8]">
      <div className="w-full flex justify-center mb-8 absolute top-10 z-10">
        <h2 className="font-heading font-bold text-4xl text-brand-dark">Full Menu</h2>
      </div>
      <ul className="full-menu-cards" ref={cardsRef}>
        <li className="full-menu-card bg-[#FFB020] rounded-3xl flex flex-col md:flex-row items-center justify-center p-8 gap-8 overflow-hidden shadow-xl">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 p-4 flex-shrink-0">
            <img src="/product-image/Lassi.webp" alt="Lassi" className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white text-4xl md:text-6xl font-heading font-bold mb-4">Lassi</h3>
            <p className="text-white/90 text-lg md:text-xl font-body max-w-md">Our signature blend of yogurt and fresh fruits, crafted for the perfect balance of sweet and tangy.</p>
          </div>
        </li>
        <li className="full-menu-card bg-[#E45B5B] rounded-3xl flex flex-col md:flex-row items-center justify-center p-8 gap-8 overflow-hidden shadow-xl">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 p-4 flex-shrink-0">
            <img src="/product-image/Falooda_citylassi.webp" alt="Falooda" className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white text-4xl md:text-6xl font-heading font-bold mb-4">Falooda</h3>
            <p className="text-white/90 text-lg md:text-xl font-body max-w-md">A rich, layered dessert drink with sweet basil seeds, vermicelli, rose syrup, and ice cream.</p>
          </div>
        </li>
        <li className="full-menu-card bg-[#4EA850] rounded-3xl flex flex-col md:flex-row items-center justify-center p-8 gap-8 overflow-hidden shadow-xl">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 p-4 flex-shrink-0">
            <img src="/product-image/Mojito.webp" alt="Mojito" className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white text-4xl md:text-6xl font-heading font-bold mb-4">Mojito</h3>
            <p className="text-white/90 text-lg md:text-xl font-body max-w-md">Refreshing mint and lime muddled to perfection, topped with sparkling water for a revitalizing kick.</p>
          </div>
        </li>
        <li className="full-menu-card bg-[#A668E2] rounded-3xl flex flex-col md:flex-row items-center justify-center p-8 gap-8 overflow-hidden shadow-xl">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 p-4 flex-shrink-0">
            <img src="/product-image/Smoothies.webp" alt="Smoothies" className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white text-4xl md:text-6xl font-heading font-bold mb-4">Smoothies</h3>
            <p className="text-white/90 text-lg md:text-xl font-body max-w-md">Thick, creamy, and packed with nutrients. Made with 100% natural fruit and zero artificial flavors.</p>
          </div>
        </li>
        <li className="full-menu-card bg-[#4285F4] rounded-3xl flex flex-col md:flex-row items-center justify-center p-8 gap-8 overflow-hidden shadow-xl">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/20 p-4 flex-shrink-0">
            <img src="/product-image/Icecream.webp" alt="Ice Cream" className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-white text-4xl md:text-6xl font-heading font-bold mb-4">Ice Cream</h3>
            <p className="text-white/90 text-lg md:text-xl font-body max-w-md">Indulgent, velvety ice cream available in classic and unique flavors to satisfy your sweet tooth.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default FullMenu;
