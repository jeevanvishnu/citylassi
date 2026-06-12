import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { menuData } from '../../data/menuData';
import './MenuBook.css';

gsap.registerPlugin(ScrollTrigger);

// Helper component for a single category
const MenuCategory = ({ title, items }: { title: string, items: any[] }) => (
  <div className="mb-6 last:mb-0 w-full min-w-0">
    <h2 className="text-2xl font-bold text-amber-500 mb-3 text-center tracking-wide">{title}</h2>
    <ul className="flex flex-col gap-1 w-full min-w-0">
      {items.map((item, idx) => (
        <li key={idx} className="flex justify-between items-end text-[13px] sm:text-sm font-medium text-slate-800 relative group cursor-default w-full min-w-0">
          <div className="flex gap-1 items-baseline bg-[#FFF8EB] pr-1 relative z-10 shrink min-w-0 overflow-hidden">
            <span className="font-bold truncate shrink">{item.en}</span>
            <span className="text-slate-500 text-xs font-bold font-sans truncate shrink-0">({item.ar})</span>
          </div>
          <div className="flex-1 border-b-2 border-dotted border-amber-200 mb-1.5 mx-1 relative z-0 transition-colors group-hover:border-amber-400 min-w-[1rem]"></div>
          <div className="text-amber-600 font-bold bg-[#FFF8EB] pl-1 relative z-10 shrink-0 whitespace-nowrap">{item.price}</div>
        </li>
      ))}
    </ul>
  </div>
);

const MenuFace = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`page-face bg-[#FFF8EB] flex flex-col p-6 shadow-md border-x border-amber-500/10 overflow-hidden ${className}`}>
    <div className="absolute inset-2 border-2 border-amber-500/20 rounded-lg pointer-events-none"></div>
    {children}
  </div>
);

const MenuBook: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const bookContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // Scope page query to only the book container
      const pages = gsap.utils.toArray(bookContainerRef.current!.querySelectorAll('.page')) as HTMLElement[];
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${pages.length * 1000}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      pages.forEach((page, index) => {
        gsap.set(page, { zIndex: pages.length - index });
        let isFlipped = false;

        const tweenConfig = {
          rotationY: -180,
          duration: 1,
          ease: 'power1.inOut',
          onUpdate: function(this: gsap.core.Tween) {
            if (this.progress() >= 0.5 && !isFlipped) {
              isFlipped = true;
              gsap.set(page, { zIndex: index + 1 });
            } else if (this.progress() < 0.5 && isFlipped) {
              isFlipped = false;
              gsap.set(page, { zIndex: pages.length - index });
            }
          }
        };

        tl.to(page, tweenConfig);
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="menu-book-section relative z-10">
      <div className="menu-book-container">
        <div className="menu-book" ref={bookRef}>
          <div ref={bookContainerRef} className="book-right-half">
            
            {/* Page 0: Cover */}
            <div className="page">
              <MenuFace className="front flex flex-col items-center justify-center bg-[#FAFAF8] min-h-[400px]">
                <img src="/hero/logo.webp" alt="City Lassi Logo" className="w-48 h-auto mb-8" />
                <h1 className="text-2xl font-serif text-slate-800 tracking-widest uppercase">Our Menu</h1>
              </MenuFace>
              <MenuFace className="back items-center justify-center">
                <img src="/hero/logo.webp" alt="Logo Watermark" className="w-48 opacity-5" />
              </MenuFace>
            </div>

            {/* Page 1: Lassi | Dry Shakes & Smoothies */}
            <div className="page">
              <MenuFace className="front">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 h-full w-full min-w-0">
                  <div className="min-w-0 w-full">
                    <MenuCategory title="Lassi" items={menuData.lassi} />
                  </div>
                  <div className="flex flex-col min-w-0 w-full">
                    <MenuCategory title="Dry Shakes" items={menuData.dryShakes} />
                    <MenuCategory title="Smoothies" items={menuData.smoothies} />
                  </div>
                </div>
              </MenuFace>
              {/* Page 1 Back: Avil Milk | Boba */}
              <MenuFace className="back">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 h-full w-full min-w-0">
                  <div className="min-w-0 w-full">
                    <MenuCategory title="Avil Milk" items={menuData.avilMilk} />
                  </div>
                  <div className="min-w-0 w-full">
                    <MenuCategory title="Boba" items={menuData.boba} />
                  </div>
                </div>
              </MenuFace>
            </div>

            {/* Page 2: Kulki, Ice Crushes, Fresh Juices | Milk Shake (Part 1) */}
            <div className="page">
              <MenuFace className="front">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 h-full w-full min-w-0">
                  <div className="flex flex-col min-w-0 w-full">
                    <MenuCategory title="Kulki" items={menuData.kulki} />
                    <MenuCategory title="Ice Crushes" items={menuData.iceCrushes} />
                    <MenuCategory title="Fresh Juices" items={menuData.freshJuices.slice(0, 8)} />
                  </div>
                  <div className="flex flex-col min-w-0 w-full">
                    <MenuCategory title="Milk Shake" items={menuData.milkShake.slice(0, 16)} />
                  </div>
                </div>
              </MenuFace>
              {/* Page 2 Back: Fresh Juices (cont) | Milk Shake (cont) */}
              <MenuFace className="back">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 h-full w-full min-w-0">
                  <div className="flex flex-col min-w-0 w-full">
                    <MenuCategory title="Fresh Juices (Cont.)" items={menuData.freshJuices.slice(8)} />
                    <div className="mt-auto opacity-5 pointer-events-none self-center mb-10">
                      <img src="/hero/logo.webp" alt="Logo Watermark" className="w-32" />
                    </div>
                  </div>
                  <div className="flex flex-col min-w-0 w-full">
                    <MenuCategory title="Milk Shake (Cont.)" items={menuData.milkShake.slice(16)} />
                  </div>
                </div>
              </MenuFace>
            </div>

            {/* Page 3: Falooda | Mojito */}
            <div className="page">
              <MenuFace className="front">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 h-full w-full min-w-0">
                  <div className="min-w-0 w-full">
                    <MenuCategory title="Falooda" items={menuData.falooda} />
                  </div>
                  <div className="min-w-0 w-full">
                    <MenuCategory title="Mojito" items={menuData.mojito} />
                  </div>
                </div>
              </MenuFace>
              {/* Page 3 Back: Ice Creams | With Cream */}
              <MenuFace className="back">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 h-full w-full min-w-0">
                  <div className="min-w-0 w-full">
                    <MenuCategory title="Ice Creams" items={menuData.iceCreams} />
                  </div>
                  <div className="min-w-0 w-full">
                    <MenuCategory title="With Cream" items={menuData.withCream} />
                  </div>
                </div>
              </MenuFace>
            </div>

            {/* Page 4: End Cover */}
            <div className="page">
              <MenuFace className="front flex flex-col items-center justify-center text-center min-h-[400px]">
                 <h3 className="text-3xl font-serif text-amber-500 mb-4 relative z-10">Craving more?</h3>
                 <p className="text-slate-600 font-sans relative z-10 mb-8">Visit us at our nearest outlet to taste the freshness.</p>
                 <img src="/hero/logo.webp" alt="City Lassi Logo" className="w-48 h-auto opacity-50 relative z-10" />
              </MenuFace>
              <MenuFace className="back items-center justify-center">
                 <div className="absolute inset-2 border-2 border-amber-500/30 rounded-lg pointer-events-none"></div>
                 <img src="/hero/logo.webp" alt="City Lassi Logo" className="w-48 h-auto" />
              </MenuFace>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBook;
