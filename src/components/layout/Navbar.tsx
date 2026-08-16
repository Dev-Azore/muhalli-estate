'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Properties', href: '/properties' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(15, 15, 20, 0.94)'
            : 'linear-gradient(to bottom, rgba(10,10,15,0.9) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(58, 58, 74, 0.6)' : '1px solid transparent',
        }}
      >
        <div
          className="container-site"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4.5rem',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <MuhalliMark />
            <div style={{ lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  background: 'linear-gradient(135deg, #D4AE35, #C49A1A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'block',
                }}
              >
                MUHALLI
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(0.42rem, 1.2vw, 0.55rem)',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  color: 'var(--color-muted)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginTop: '1px',
                  whiteSpace: 'nowrap',
                }}
              >
                Estate &amp; Construction Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav-bar" style={{ alignItems: 'center', gap: '0.15rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted-light)',
                  padding: '0.45rem 0.65rem',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s ease, background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--color-gold-light)';
                  el.style.backgroundColor = 'rgba(196, 154, 26, 0.08)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--color-muted-light)';
                  el.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/services#quote"
              className="btn btn-primary"
              style={{ marginLeft: '0.75rem', fontSize: '0.7rem', padding: '0.5rem 1.2rem' }}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-trigger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'var(--color-graphite-mid)',
              border: '1px solid var(--color-graphite-border)',
              borderRadius: '4px',
              padding: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '4px',
              width: '38px',
              height: '38px',
              alignItems: 'center',
              transition: 'border-color 0.2s ease',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '20px',
                  height: '2px',
                  background: menuOpen ? 'var(--color-gold)' : 'var(--color-muted-light)',
                  borderRadius: '1px',
                  transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0
                      ? 'translateY(6px) rotate(45deg)'
                      : i === 2
                      ? 'translateY(-6px) rotate(-45deg)'
                      : 'scaleX(0)'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu Full Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(12, 12, 16, 0.98)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          padding: '5.5rem 1.75rem 2rem',
          overflowY: 'auto',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
                fontWeight: 600,
                color: 'var(--color-cream)',
                padding: '0.65rem 0',
                borderBottom: '1px solid var(--color-graphite-border)',
                transition: 'color 0.2s ease, padding-left 0.2s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-gold)';
                el.style.paddingLeft = '0.5rem';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'var(--color-cream)';
                el.style.paddingLeft = '0';
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <Link
            href="/services#quote"
            className="btn btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ textAlign: 'center', width: '100%', padding: '0.85rem' }}
          >
            Request a Construction Quote
          </Link>
          <a
            href="https://wa.me/2347044491274?text=Hello%20Muhalli%20Estate%2C%20I%27d%20like%20to%20inquire%20about%20your%20properties."
            className="btn btn-outline"
            style={{ textAlign: 'center', width: '100%', padding: '0.85rem' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp (+234 704 449 1274)
          </a>
        </div>

        {/* Contact info at bottom */}
        <div style={{ marginTop: 'auto', paddingTop: '2rem', color: 'var(--color-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--color-muted-light)' }}>
            No. 2 BB Plaza, Limawa Road, Kano
          </p>
          <p>CAC Reg: 58726 • Muhalli Estate &amp; Construction Ltd.</p>
        </div>
      </div>

      {/* Media queries for header responsiveness */}
      <style>{`
        .desktop-nav-bar { display: none; }
        .mobile-menu-trigger { display: flex; }
        @media (min-width: 900px) {
          .desktop-nav-bar { display: flex; }
          .mobile-menu-trigger { display: none; }
        }
      `}</style>
    </>
  );
}

/* MH Monogram SVG Mark */
function MuhalliMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Muhalli MH monogram">
      <defs>
        <linearGradient id="goldGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AE35" />
          <stop offset="50%" stopColor="#C49A1A" />
          <stop offset="100%" stopColor="#9A760E" />
        </linearGradient>
      </defs>
      <rect x="3" y="6" width="4" height="24" rx="0.5" fill="url(#goldGradNav)" />
      <rect x="11" y="6" width="4" height="24" rx="0.5" fill="url(#goldGradNav)" />
      <polygon points="3,6 7,6 13,16 9,16" fill="url(#goldGradNav)" />
      <polygon points="15,6 11,6 9,16 13,16" fill="url(#goldGradNav)" />
      <rect x="19" y="6" width="4" height="24" rx="0.5" fill="url(#goldGradNav)" />
      <rect x="29" y="6" width="4" height="24" rx="0.5" fill="url(#goldGradNav)" />
      <rect x="19" y="16" width="14" height="4" rx="0.5" fill="url(#goldGradNav)" />
    </svg>
  );
}
