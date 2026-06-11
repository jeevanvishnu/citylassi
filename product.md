City Lassi — React.js Website

Senior UI/UX + Frontend Design Brief & Developer Prompt


Reference site to redesign: https://citylassi.com/
Stack: React.js · Tailwind CSS · Framer Motion · GSAP ScrollTrigger




📦 Tech Stack

LayerToolPurposeFrameworkReact.js (Vite)Component architecture, routingStylingTailwind CSS v3Utility-first, responsive designAnimationFramer MotionComponent enter/exit, scroll revealsScroll FXGSAP + ScrollTriggerComplex scroll-driven sequencesIconsLucide ReactClean SVG icon setFontsGoogle Fonts (via @fontsource)Playfair Display, DM Sans, CaveatRoutingReact Router v6Page navigation


🎨 Design Token System

Color Palette — tailwind.config.js

js// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          yellow:      '#FB9D25',  // Golden Saffron — primary brand
          amber:       '#E0A800',  // Deep Amber — hover, depth
          lemon:       '#FFF3B0',  // Pale Lemon — card tints, section bg
          cream:       '#FFFBF0',  // Warm Cream — hero/page background
          dark:        '#1A1200',  // Near-black amber — footer, headings
          muted:       '#7A6520',  // Muted Gold — captions, labels
          orange:      '#FF8C00',  // Burst Orange — CTAs, price tags
        }
      },
      fontFamily: {
        display:  ['Playfair Display', 'Georgia', 'serif'],
        heading:  ['Fraunces', 'Georgia', 'serif'],
        body:     ['DM Sans', 'system-ui', 'sans-serif'],
        accent:   ['Caveat', 'cursive'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 8vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      animation: {
        'float':    'float 4s ease-in-out infinite',
        'marquee':  'marquee 25s linear infinite',
        'halo':     'halo 2.5s ease-in-out infinite',
        'drift':    'drift 8s ease-in-out infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-22px)' } },
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        halo:    { '0%,100%': { boxShadow: '0 0 0 0px rgba(251,157,37,0.33)' }, '50%': { boxShadow: '0 0 0 28px rgba(251,157,37,0)' } },
        drift:   { '0%,100%': { transform: 'translateY(0) rotate(0deg)' }, '50%': { transform: 'translateY(-30px) rotate(15deg)' } },
      }
    }
  }
}


🗂️ Project File Structure

city-lassi/
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx                    ← Vite entry point
│   ├── App.jsx                     ← Root: Router + layout wrapper
│   ├── index.css                   ← Tailwind directives + Google Fonts import
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx          ← Fixed nav, scroll-aware, mobile hamburger
│   │   │   └── Footer.jsx          ← 4-col dark footer
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx            ← Split hero, headline, floating drink
│   │   │   ├── MarqueeBanner.jsx   ← Infinite running text ticker
│   │   │   ├── PopularDrinks.jsx   ← 6-card drink grid section
│   │   │   └── DrinkCard.jsx       ← Individual drink card component
│   │   │
│   │   └── ui/
│   │       ├── Button.jsx          ← Reusable CTA button (primary/outline)
│   │       ├── SectionHeading.jsx  ← Heading + Caveat sub-badge combo
│   │       └── ScrollReveal.jsx    ← Framer Motion scroll wrapper
│   │
│   ├── hooks/
│   │   ├── useScrollNavbar.js      ← Tracks scroll for navbar state
│   │   └── useScrollAnimation.js  ← GSAP ScrollTrigger helper hook
│   │
│   ├── data/
│   │   └── drinks.js               ← Drink menu data array
│   │
│   └── assets/
│       ├── images/                 ← Drink photos / hero image
│       └── icons/                  ← Brand SVG logo, leaf icon
│
├── tailwind.config.js
├── vite.config.js
├── package.json
└── project.md                      ← This file


🧩 Component Breakdown

Navbar.jsx

Props: none
State: isScrolled (bool), isMenuOpen (bool)
Hook: useScrollNavbar()

Behavior:
- bg-transparent text-brand-dark on top
- bg-white shadow-md on scroll (transition-all duration-300)
- Mobile: hamburger icon → full-screen slide-down menu
- "Order Now" → <Button variant="primary" />
- Active link → animated yellow underline via Framer Motion layoutId

DOM structure:
<nav>
  <Logo />                  ← SVG leaf + "City Lassi" in font-display
  <DesktopLinks />          ← hidden md:flex
  <MobileHamburger />       ← flex md:hidden
  <Button>Order Now</Button>
</nav>


Hero.jsx

Animations:
  - GSAP timeline on mount: stagger headline words from y:80 opacity:0
  - Drink image: animate-float (CSS keyframes)
  - Halo ring: animate-halo on the circular image wrapper
  - Particles: 6x <span> fruit emojis with random animate-drift delays

Layout: grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-brand-cream

Left column:
  <span class="font-accent text-brand-orange">           ← "Est. Since 2010" badge
  <h1 class="font-display text-hero text-brand-dark">   ← Main headline (split into words for GSAP)
  <p class="font-body text-brand-muted">                ← Sub-copy
  <div class="flex gap-4">
    <Button variant="primary">Explore Our Menu</Button>
    <Button variant="outline">Order Now</Button>
  </div>

Right column:
  <div class="relative flex items-center justify-center">
    <div class="animate-halo rounded-full ...">          ← Pulsing yellow halo (SIGNATURE ELEMENT)
      <img class="animate-float rounded-full ..." />    ← Drink photo
    </div>
    {particles}                                          ← Scattered fruit emojis
  </div>


MarqueeBanner.jsx

No props needed — static content

Structure:
<section class="overflow-hidden bg-brand-yellow py-4 border-y-2 border-brand-amber">
  <div class="flex w-max animate-marquee whitespace-nowrap">
    {[...items, ...items].map(item => (         ← Doubled for seamless loop
      <span class="font-accent text-xl mx-6 text-brand-dark">
        ✦ {item}
      </span>
    ))}
  </div>
</section>

Items: ["FRESH DAILY", "PURE INGREDIENTS", "NO PRESERVATIVES",
        "HAND-CRAFTED", "BLENDED WITH LOVE", "100% NATURAL"]


PopularDrinks.jsx

Uses: drinks.js data, Framer Motion staggerChildren, DrinkCard.jsx

Framer Motion variants:
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
  card:      { hidden: { y: 60, opacity: 0 }, show: { y: 0, opacity: 1 } }

Trigger: whileInView + viewport={{ once: true, amount: 0.2 }}

Layout:
<section class="bg-brand-cream py-24 px-5">
  <SectionHeading title="Our Popular Drinks" badge="Freshly Made Every Day" />
  <motion.div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {drinks.map(drink => <DrinkCard key={drink.id} {...drink} />)}
  </motion.div>
</section>


DrinkCard.jsx

jsx// Props: { name, description, price, emoji, tag }

Hover state (useState): isHovered
Framer Motion: whileHover={{ y: -12, boxShadow: "0 24px 48px #F5C51840" }}

<motion.article
  variants={cardVariant}
  whileHover={{ y: -12 }}
  className="bg-white rounded-3xl p-6 flex flex-col items-center text-center
             border border-brand-lemon cursor-pointer group"
>
  {/* Circular drink image with yellow ring */}
  <div className="w-36 h-36 rounded-full border-4 border-brand-yellow
                  bg-brand-lemon flex items-center justify-center mb-5
                  group-hover:border-brand-orange transition-colors duration-300">
    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
      {emoji}
    </span>
  </div>

  {/* Tag badge */}
  <span className="font-accent text-brand-orange text-sm mb-1">{tag}</span>

  {/* Name */}
  <h3 className="font-heading text-xl font-semibold text-brand-dark mb-2">{name}</h3>

  {/* Description */}
  <p className="font-body text-brand-muted text-sm leading-relaxed mb-4">{description}</p>

  {/* Price + CTA */}
  <div className="flex items-center justify-between w-full mt-auto pt-4
                  border-t border-brand-lemon">
    <span className="font-display text-2xl font-bold text-brand-orange">{price}</span>
    <Button variant="primary" size="sm">Add to Order</Button>
  </div>
</motion.article>


Footer.jsx

Framer Motion: fade-up stagger on each column (whileInView)

Structure:
<footer class="bg-brand-dark text-white">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-10 py-16">

    Col 1 — Brand:
      <Logo variant="white" />
      <p>Tagline</p>
      <SocialIcons />          ← Instagram, Facebook, Twitter (Lucide icons)

    Col 2 — Quick Links:
      <h4>Quick Links</h4>
      <nav> Home · About · Menu · Blog · Contact </nav>

    Col 3 — Opening Hours:
      <h4>We're Open</h4>
      <p>Monday – Sunday</p>
      <p>8:00 AM – 10:00 PM</p>

    Col 4 — Contact:
      <h4>Get in Touch</h4>
      <address> ... </address>

  </div>
  <div class="border-t border-white/10 px-10 py-4 flex justify-between text-sm">
    <span>© 2025 City Lassi. All rights reserved.</span>
    <a>Privacy Policy</a>
  </div>
</footer>


📊 Data Layer — src/data/drinks.js

jsexport const drinks = [
  {
    id: 1,
    name: "Mango Lassi",
    description: "Thick Alphonso mango blended with chilled yogurt and a whisper of cardamom.",
    price: "₹80",
    emoji: "🥭",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Rose Lassi",
    description: "Creamy yogurt swirled with rose syrup, topped with saffron strands.",
    price: "₹75",
    emoji: "🌹",
    tag: "Fan Favourite",
  },
  {
    id: 3,
    name: "Fresh Lime Soda",
    description: "Hand-pressed lime, fresh mint, and fizzy soda — the original summer fix.",
    price: "₹55",
    emoji: "🍋",
    tag: "Refreshing",
  },
  {
    id: 4,
    name: "Sugarcane Juice",
    description: "Cold-pressed from fresh sugarcane stalks with ginger and lemon.",
    price: "₹60",
    emoji: "🌿",
    tag: "Pure & Natural",
  },
  {
    id: 5,
    name: "Watermelon Cooler",
    description: "Juiced-to-order watermelon with mint and black salt. Zero sugar added.",
    price: "₹65",
    emoji: "🍉",
    tag: "Seasonal",
  },
  {
    id: 6,
    name: "Masala Chaas",
    description: "Spiced buttermilk with roasted cumin, ginger, and fresh coriander.",
    price: "₹50",
    emoji: "🥛",
    tag: "Traditional",
  },
];


🪝 Custom Hooks

useScrollNavbar.js

jsimport { useState, useEffect } from 'react';

export const useScrollNavbar = (threshold = 60) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};

useScrollAnimation.js

jsimport { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animation = 'fadeUp') => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (animation === 'fadeUp') {
        gsap.from(el, {
          y: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
      }
      if (animation === 'clipReveal') {
        gsap.from(el, {
          clipPath: 'inset(0 100% 0 0)', duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 80%' }
        });
      }
    });

    return () => ctx.revert();
  }, [animation]);

  return ref;
};


📦 package.json Dependencies

json{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.23.0",
    "framer-motion": "^11.2.0",
    "gsap": "^3.12.5",
    "lucide-react": "^0.383.0",
    "@fontsource/playfair-display": "^5.0.0",
    "@fontsource/dm-sans": "^5.0.0",
    "@fontsource/caveat": "^5.0.0",
    "@fontsource/fraunces": "^5.0.0"
  },
  "devDependencies": {
    "vite": "^5.2.0",
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}


🚀 Setup Commands

bash# 1. Create Vite + React project
npm create vite@latest city-lassi -- --template react

# 2. Install dependencies
cd city-lassi
npm install framer-motion gsap lucide-react react-router-dom
npm install @fontsource/playfair-display @fontsource/dm-sans @fontsource/caveat @fontsource/fraunces

# 3. Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Run dev server
npm run dev