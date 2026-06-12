import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Leaf, Palette, MapPin, Smile, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Inspired by Tradition',
    desc: 'We started with a passion to bring authentic lassi and refreshing drinks from India to the vibrant streets of Dubai.',
    icon: Sparkles
  },
  {
    title: 'Freshness in Every Glass',
    desc: 'Every drink is prepared using fresh fruits, creamy milk, and natural flavors – no compromises.',
    icon: Leaf
  },
  {
    title: 'From Classics to Creativity',
    desc: 'From the traditional Sweet Lassi to modern blends like Milkshake and Strawberry Falooda, we offer something for everyone.',
    icon: Palette
  },
  {
    title: 'A Local Favorite in Deira',
    desc: 'Conveniently located near Naif Palace Hotel, City Lassy has become a must-visit spot for families, friends, and foodies.',
    icon: MapPin
  },
  {
    title: 'Spreading Happiness, One Sip at a Time',
    desc: 'Our goal is simple: to refresh you with drinks that bring joy and smiles to every customer.',
    icon: Smile
  },
  {
    title: 'Growing with Love & Support',
    desc: 'City Lassy has become one of the most loved juice shops in Dubai, and we continue to innovate with new flavors every season.',
    icon: Heart
  }
];

const AboutStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
            }
          }
        );
      }

      // Parallax effect for the image
      if (imageRef.current && containerRef.current) {
        gsap.fromTo(imageRef.current, 
          { y: -30, scale: 1.1 }, 
          {
            y: 30,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      }

      // Staggered fade in for feature cards
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-yellow/5 rounded-bl-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-orange/5 rounded-tr-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-body text-sm font-semibold text-brand-orange uppercase tracking-[0.2em] mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-8 leading-tight">
            Welcome to City Lassy, Dubai’s favorite destination.
          </h2>
          <p className="font-body text-lg text-brand-dark/70 leading-relaxed">
            Located in the heart of Deira, Dubai, we started our journey with a simple mission – to bring happiness in every sip. From our signature lassis to exotic milkshakes, faloodas, smoothies, and fresh juices, we blend authentic flavors with a modern touch to create the perfect refreshment for every mood.
          </p>
        </div>

        {/* Content Section: Sticky Image + Scrolling Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Full Height Image container */}
          <div className="lg:col-span-4 relative group rounded-3xl overflow-hidden shadow-2xl h-full min-h-[300px]">
            <div className="absolute inset-0 bg-brand-yellow/10 z-10 pointer-events-none" />
            <img 
              ref={imageRef}
              src="/about/about.jpg" 
              alt="City Lassy Story" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Glassmorphic overlay card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <p className="font-display text-xl font-bold text-brand-dark mb-1">Since Day One</p>
              <p className="font-body text-sm text-brand-dark/70">Crafting perfect moments</p>
            </div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-brand-dark/5 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center mb-5 group-hover:bg-brand-yellow transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-brand-orange group-hover:text-brand-dark transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-dark mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-brand-dark/70 leading-relaxed text-xs">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;
