import React from 'react';

const items = Array(10).fill('🚚 Free and Fast Home Delivery');

const MarqueeBanner: React.FC = () => {
  const content = [...items, ...items]; // doubled for seamless loop

  return (
    <section
      className="overflow-hidden bg-brand-yellow py-4 border-y-2 border-brand-amber"
      aria-label="City Lassi brand values"
    >
      <div
        className="flex w-max animate-marquee whitespace-nowrap will-change-transform"
        aria-hidden="true"
      >
        {content.map((item, i) => (
          <span
            key={i}
            className="font-body font-bold text-lg md:text-xl mx-8 text-brand-dark tracking-wide select-none"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeBanner;
