import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import BlogCard from './BlogCard';
import { blogPosts } from '../../../data/blogData';
import './BlogHero.css';

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
