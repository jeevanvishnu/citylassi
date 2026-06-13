import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const menuItems = [
  {
    name: 'Mango Lassi',
    description: 'A luxurious, velvety blend of fresh homemade yogurt and ripe fruits. Churned to perfection and garnished with crushed pistachios for a truly royal refreshment.',
    tag: 'Best Seller',
    accent: '#F59E0B',
    image: '/menu/lassi.png',
  },
  {
    name: 'Falooda',
    description: 'A majestic dessert layered with chilled milk, sweet rose syrup, basil seeds, and silky vermicelli. Crowned with a generous scoop of premium ice cream and roasted nuts.',
    tag: 'Fan Favourite',
    accent: '#EC4899',
    image: '/menu/falooda.png',
  },
  {
    name: 'Mint Mojito',
    description: 'An invigorating burst of freshness featuring muddled wild mint, zesty lime wedges, and crushed ice. Topped with sparkling water to instantly awaken your senses.',
    tag: 'Refreshing',
    accent: '#10B981',
    image: '/menu/Mojito.png',
  },
  {
    name: 'Fruit Smoothie',
    description: 'A thick, creamy concoction packed with an abundance of fresh, ripe fruits. Blended to a flawless smooth texture with zero artificial flavors—just pure, natural vitality.',
    tag: 'Seasonal',
    accent: '#8B5CF6',
    image: '/menu/smoothie.png',
  },
  {
    name: 'Chocolate ',
    description: 'A towering masterpiece of rich cocoa. Cascading with dark chocolate fudge, loaded with chewy brownie chunks, chocolate curls, and crowned with premium chocolate ice cream.',
    tag: 'Traditional',
    accent: '#3B82F6',
    image: '/menu/chocolate.png',
  },
];

const FullMenu: React.FC = () => {
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Kill any stale GSAP ScrollTriggers that may still be pinning the page
    try {
      // @ts-ignore
      const { ScrollTrigger } = window.__gsap__ || {};
      if (ScrollTrigger) ScrollTrigger.killAll();
    } catch (_) {}

    // Use IntersectionObserver for fade-up — zero scroll interference
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('menu-card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="full-menu" className="bg-[#FAFAF8] py-20 md:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ul className="flex flex-col gap-16 md:gap-24">
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="menu-card-init overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white flex flex-col md:flex-row"
            >
              {/* Image Side */}
              <div className={`w-full md:w-1/2 aspect-square relative overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text Side */}
              <div className={`w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8 md:p-16 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <span
                  className="inline-block px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6 md:mb-8 rounded-full"
                  style={{ color: item.accent, backgroundColor: `${item.accent}15` }}
                >
                  {item.tag}
                </span>
                <h3 className="font-display text-5xl md:text-6xl lg:text-7xl text-[#1A1200] mb-6">
                  {item.name}
                </h3>
                <p className="font-body text-base md:text-lg text-gray-600 max-w-sm mx-auto leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .menu-card-init {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .menu-card-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default FullMenu;
