import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import BlogCard from './BlogCard';
import './BlogHero.css';

const blogPosts = [
  {
    image: '/blog/blog01.webp',
    category: 'Health & Wellness',
    date: 'June 10, 2026',
    title: 'Smoothies vs. Milkshakes – Which is Better for You?',
    excerpt:
      'When it comes to refreshing drinks in Dubai, two favorites always stand out – smoothies and milkshakes. Both are delicious, but which one is the healthier choice? Discover the key differences, nutritional benefits, and when to reach for each.',
    author: 'City Lassi',
    readTime: '5 min read',
  },
  {
    image: '/blog/blog02.webp',
    category: 'Dubai Lifestyle',
    date: 'June 5, 2026',
    title: 'Top 5 Refreshing Drinks to Beat the Dubai Heat',
    excerpt:
      "Dubai's sunny weather calls for something cool, fresh, and full of flavor. Whether you're working, shopping, or just relaxing, a chilled drink can instantly lift your mood. Here are our top 5 picks to keep you refreshed all summer long.",
    author: 'City Lassi',
    readTime: '4 min read',
  },
];

const BlogSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions!;

        if (reduceMotion) return;

        // Animate the section header
        if (headerRef.current) {
          gsap.from(headerRef.current, {
            y: 40,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power3.out',
          });
        }
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <>
      {/* Blog Grid */}
      <section className="blog-section" id="blog" aria-label="Blog articles">
        <div className="blog-section__container">
          <div ref={headerRef} className="blog-section__header">
            <h2 className="blog-section__heading">Latest Articles</h2>
            <span className="blog-section__count">
              {blogPosts.length} Stories
            </span>
          </div>

          <div className="blog-grid blog-grid--featured">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.title} {...post} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;
