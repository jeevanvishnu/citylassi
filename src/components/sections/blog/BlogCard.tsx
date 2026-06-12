import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight, Clock } from 'lucide-react';

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  date,
  title,
  excerpt,
  author,
  readTime,
  index,
}) => {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduceMotion } = context.conditions!;

        if (reduceMotion) return;

        // Set initial state
        gsap.set(el, { y: 60, autoAlpha: 0 });

        // Use IntersectionObserver for scroll-reveal
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                gsap.to(el, {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.8,
                  delay: 0.15 * index,
                  ease: 'power3.out',
                });
                observer.unobserve(el);
              }
            });
          },
          { threshold: 0.15 }
        );

        observer.observe(el);

        return () => {
          observer.disconnect();
        };
      }
    );

    return () => mm.revert();
  }, [index]);

  // Get initials for avatar
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <article ref={cardRef} className="blog-card" id={`blog-card-${index}`}>
      <div className="blog-card__image-wrapper">
        <img
          src={image}
          alt={title}
          className="blog-card__image"
          loading="lazy"
        />
        <div className="blog-card__image-overlay" />
        <span className="blog-card__category">{category}</span>
        <span className="blog-card__read-time">
          <Clock size={12} />
          {readTime}
        </span>
      </div>

      <div className="blog-card__body">
        <span className="blog-card__date">{date}</span>
        <h2 className="blog-card__title">{title}</h2>
        <p className="blog-card__excerpt">{excerpt}</p>
      </div>

      <div className="blog-card__footer">
        <div className="blog-card__author">
          <div className="blog-card__author-avatar">{initials}</div>
          <span className="blog-card__author-name">{author}</span>
        </div>
        <span className="blog-card__read-link">
          Read More <ArrowRight size={14} />
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
