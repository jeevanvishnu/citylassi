import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FullMenu.css';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    name: 'Lassi',
    description: 'Our signature blend of yogurt and fresh fruits, crafted for the perfect balance of sweet and tangy.',
    price: '₹80',
    tag: 'Best Seller',
    accent: '#F59E0B',
  },
  {
    name: 'Falooda',
    description: 'A rich, layered dessert drink with sweet basil seeds, vermicelli, rose syrup, and ice cream.',
    price: '₹120',
    tag: 'Fan Favourite',
    accent: '#EC4899',
  },
  {
    name: 'Mojito',
    description: 'Refreshing mint and lime muddled to perfection, topped with sparkling water for a revitalizing kick.',
    price: '₹90',
    tag: 'Refreshing',
    accent: '#10B981',
  },
  {
    name: 'Smoothies',
    description: 'Thick, creamy, and packed with nutrients. Made with 100% natural fruit and zero artificial flavors.',
    price: '₹110',
    tag: 'Seasonal',
    accent: '#8B5CF6',
  },
  {
    name: 'Ice Cream',
    description: 'Indulgent, velvety ice cream available in classic and unique flavors to satisfy your sweet tooth.',
    price: '₹95',
    tag: 'Traditional',
    accent: '#3B82F6',
  },
];

const FullMenu: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.full-menu-card');

    if (cards.length === 0) return;

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `${window.innerHeight * 5} top`,
        scrub: true,
        pin: true,
      },
    });

    tl.from('.full-menu-card:not(:first-child)', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1,
      stagger: 2,
    });

    tl.to('.full-menu-card:not(:last-child)', {
      y: window.innerHeight,
      duration: 1,
      stagger: 2,
    }, '<');

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="full-menu" className="full-menu-section bg-[#FAFAF8]">
      <ul className="full-menu-cards" ref={cardsRef}>
        {menuItems.map((item) => (
          <li key={item.name} className="full-menu-card overflow-hidden shadow-2xl relative">

            {/* Full-width mango image */}
            <img
              src="/mango.png"
              alt={item.name}
              className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FullMenu;
