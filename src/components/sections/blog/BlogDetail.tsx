import React, { useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Share2 } from 'lucide-react';
import { getBlogBySlug, getRelatedPosts, type BlogContentBlock } from '../../../data/blogData';
import './BlogDetail.css';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug) : [];

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    const mm = gsap.matchMedia();

    mm.add(
      { reduceMotion: '(prefers-reduced-motion: reduce)' },
      (context) => {
        const { reduceMotion } = context.conditions!;
        if (reduceMotion) return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Hero entrance
        tl.from('.blog-detail-hero__image', {
          scale: 1.1,
          autoAlpha: 0,
          duration: 1.2,
        })
          .from(
            '.blog-detail-hero__overlay-content > *',
            {
              y: 40,
              autoAlpha: 0,
              duration: 0.8,
              stagger: 0.12,
            },
            '-=0.7'
          );

        // Content entrance
        if (contentRef.current) {
          gsap.from(contentRef.current.children, {
            y: 30,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.06,
            delay: 0.5,
            ease: 'power2.out',
          });
        }

        // Sidebar entrance
        if (sidebarRef.current) {
          gsap.from(sidebarRef.current, {
            x: 40,
            autoAlpha: 0,
            duration: 0.8,
            delay: 0.7,
            ease: 'power3.out',
          });
        }

        // Related cards entrance using IntersectionObserver
        if (relatedRef.current) {
          const cards = relatedRef.current.querySelectorAll('.blog-related__card');
          gsap.set(cards, { y: 60, autoAlpha: 0 });

          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  gsap.to(cards, {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                  });
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.15 }
          );
          observer.observe(relatedRef.current);

          return () => observer.disconnect();
        }
      }
    );

    return () => mm.revert();
  }, [post, slug]);

  if (!post) {
    return (
      <section className="blog-detail-404">
        <div className="blog-detail-404__content">
          <h1>Article Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="blog-detail-404__link">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  const initials = post.author
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const renderContentBlock = (block: BlogContentBlock, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="blog-article__paragraph">
            {block.text}
          </p>
        );
      case 'heading':
        return (
          <h2 key={index} className="blog-article__heading">
            {block.text}
          </h2>
        );
      case 'subheading':
        return (
          <h3 key={index} className="blog-article__subheading">
            {block.text}
          </h3>
        );
      case 'list':
        return (
          <ul key={index} className="blog-article__list">
            {block.items.map((item, i) => (
              <li key={i} className="blog-article__list-item">
                {item}
              </li>
            ))}
          </ul>
        );
      case 'highlight':
        return (
          <div key={index} className="blog-article__highlight">
            {block.text}
          </div>
        );
      case 'table':
        return (
          <div key={index} className="blog-article__table-wrapper">
            <table className="blog-article__table">
              <thead>
                <tr>
                  {block.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => (
                      <td key={ci}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'callout':
        return (
          <div key={index} className="blog-article__callout">
            <span className="blog-article__callout-icon">{block.icon}</span>
            <span>{block.text}</span>
          </div>
        );
      case 'divider':
        return <hr key={index} className="blog-article__divider" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section ref={heroRef} className="blog-detail-hero" aria-label="Blog article hero">
        <div className="blog-detail-hero__grain" />
        <img
          src={post.image}
          alt={post.title}
          className="blog-detail-hero__image"
        />
        <div className="blog-detail-hero__gradient" />

        <div className="blog-detail-hero__overlay-content">
          <Link to="/blog" className="blog-detail-hero__back">
            <ArrowLeft size={18} />
            <span>All Articles</span>
          </Link>

          <span className="blog-detail-hero__category">{post.category}</span>

          <h1 className="blog-detail-hero__title">{post.title}</h1>

          <div className="blog-detail-hero__meta">
            <div className="blog-detail-hero__meta-item">
              <User size={14} />
              <span>By {post.author}</span>
            </div>
            <span className="blog-detail-hero__meta-divider">·</span>
            <div className="blog-detail-hero__meta-item">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <span className="blog-detail-hero__meta-divider">·</span>
            <div className="blog-detail-hero__meta-item">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Body ────────────────────────────────────────── */}
      <section className="blog-detail-body">
        <div className="blog-detail-body__container">
          {/* Main Content */}
          <article ref={contentRef} className="blog-article" id="blog-article-content">
            {post.content.map((block, i) => renderContentBlock(block, i))}
          </article>

          {/* Sidebar */}
          <aside ref={sidebarRef} className="blog-sidebar">
            {/* Author Card */}
            <div className="blog-sidebar__card">
              <div className="blog-sidebar__author">
                <div className="blog-sidebar__author-avatar">{initials}</div>
                <div>
                  <div className="blog-sidebar__author-name">{post.author}</div>
                  <div className="blog-sidebar__author-role">citylassi.com</div>
                </div>
              </div>
              <p className="blog-sidebar__author-bio">
                Blending freshness & tradition in every sip. Dubai's favorite juice & lassi destination, serving health and happiness since day one.
              </p>
            </div>

            {/* Share Card */}
            <div className="blog-sidebar__card">
              <h3 className="blog-sidebar__card-title">Share This Article</h3>
              <button
                className="blog-sidebar__share-btn"
                onClick={handleShare}
                aria-label="Share this article"
                id="blog-share-btn"
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>

            {/* CTA Card */}
            <div className="blog-sidebar__card blog-sidebar__card--cta">
              <h3 className="blog-sidebar__cta-title">Thirsty Yet?</h3>
              <p className="blog-sidebar__cta-text">
                Order fresh smoothies, juices & lassi – delivered to your doorstep in Dubai.
              </p>
              <Link to="/menu" className="blog-sidebar__cta-btn" id="blog-sidebar-cta">
                View Our Menu
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Navigation ──────────────────────────────────────────── */}
      <section className="blog-detail-nav">
        <div className="blog-detail-nav__container">
          {relatedPosts.length > 0 && (
            <button
              className="blog-detail-nav__link blog-detail-nav__link--prev"
              onClick={() => navigate(`/blog/${relatedPosts[0].slug}`)}
              id="blog-nav-prev"
            >
              <ArrowLeft size={16} />
              <div>
                <span className="blog-detail-nav__label">Previous Article</span>
                <span className="blog-detail-nav__title">{relatedPosts[0].title}</span>
              </div>
            </button>
          )}
        </div>
      </section>

      {/* ── Related Articles ────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section ref={relatedRef} className="blog-related" aria-label="Related articles">
          <div className="blog-related__container">
            <div className="blog-related__header">
              <h2 className="blog-related__heading">You Might Also Like</h2>
              <Link to="/blog" className="blog-related__view-all" id="blog-related-view-all">
                View All <ArrowRight size={16} />
              </Link>
            </div>

            <div className="blog-related__grid">
              {relatedPosts.map((related) => {
                const ri = related.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase();
                return (
                  <Link
                    to={`/blog/${related.slug}`}
                    key={related.slug}
                    className="blog-related__card"
                    id={`blog-related-${related.slug}`}
                  >
                    <div className="blog-related__card-image-wrapper">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="blog-related__card-image"
                        loading="lazy"
                      />
                      <div className="blog-related__card-overlay" />
                      <span className="blog-related__card-category">{related.category}</span>
                    </div>
                    <div className="blog-related__card-body">
                      <span className="blog-related__card-date">{related.date}</span>
                      <h3 className="blog-related__card-title">{related.title}</h3>
                      <p className="blog-related__card-excerpt">{related.excerpt}</p>
                    </div>
                    <div className="blog-related__card-footer">
                      <div className="blog-related__card-author">
                        <div className="blog-related__card-avatar">{ri}</div>
                        <span>{related.author}</span>
                      </div>
                      <span className="blog-related__card-read-more">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogDetail;
