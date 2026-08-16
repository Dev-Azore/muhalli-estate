'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'calc(100svh - 4.5rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 'clamp(3rem, 6vw, 6rem) 0',
      }}
    >
      {/* Background Image with slow elegant zoom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          zIndex: 0,
          animation: 'heroZoom 25s ease-out infinite alternate',
        }}
      />

      {/* Premium dark gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 15, 20, 0.65) 0%, rgba(15, 15, 20, 0.85) 60%, rgba(15, 15, 20, 0.98) 100%)',
          zIndex: 1,
        }}
      />

      {/* Subtle blueprint grid for texture */}
      <div
        className="bg-blueprint"
        style={{ position: 'absolute', inset: 0, opacity: 0.15, zIndex: 2, pointerEvents: 'none' }}
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Trust Badge */}
          <div
            className="animate-fade-in-down"
            style={{ display: 'inline-block', marginBottom: '1.5rem' }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1.25rem',
                background: 'rgba(196, 154, 26, 0.12)',
                border: '1px solid rgba(196, 154, 26, 0.4)',
                borderRadius: '100px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
              }}
            >
              Official Registered Company • CAC RC: 58726
            </span>
          </div>

          {/* Main Headline - Using modern premium sans-serif var(--font-heading) */}
          <h1
            className="animate-fade-in-up"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-cream)',
              maxWidth: '22ch',
              margin: '0 auto 1.25rem',
              animationDelay: '150ms',
            }}
          >
            Buy Verified Land &amp; Houses or{' '}
            <span className="shimmer-gold-text" style={{ display: 'inline-block' }}>
              Build Your Own Project
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'var(--color-muted-light)',
              maxWidth: '62ch',
              margin: '0 auto 3rem',
              lineHeight: 1.7,
              animationDelay: '250ms',
            }}
          >
            Muhalli Estate makes real estate easy. We sell verified properties with clean government papers and construct buildings from foundation to roof in Kano and across Nigeria.
          </p>

          {/* Clean, Professional Grid Card Arrangement */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              textAlign: 'left',
              marginBottom: '3rem',
            }}
          >
            {/* Card 1: Buy Land or House */}
            <Link
              href="/properties"
              className="card animate-fade-in-up stagger-3"
              style={{
                padding: '2rem 1.75rem',
                background: 'rgba(26, 26, 31, 0.85)',
                border: '1px solid var(--color-graphite-border)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
                minHeight: '220px',
                transition: 'all 0.3s var(--ease-spring)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-6px)';
                el.style.borderColor = 'var(--color-gold)';
                el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(196,154,26,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'var(--color-graphite-border)';
                el.style.boxShadow = '';
              }}
            >
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Property Acquisition
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-cream)', margin: '0.4rem 0 0.5rem', fontWeight: 700 }}>
                  Buy Land or House
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.55 }}>
                  Explore premium residential plots, commercial properties, and completed buildings with verified titles.
                </p>
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-gold)', fontWeight: 700, marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                Browse Marketplace →
              </span>
            </Link>

            {/* Card 2 (Center): Talk to an Agent (Distinct Styling) */}
            <a
              href="https://wa.me/2347044491274?text=Hello%20Muhalli%20Estate%2C%20I%20want%20to%20ask%20about%20your%20properties%20or%20building%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="card animate-fade-in-up stagger-4"
              style={{
                padding: '2rem 1.75rem',
                background: 'rgba(20, 35, 25, 0.85)', // Distinct greenish tint
                border: '1px solid #25D366', // Green border
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
                minHeight: '220px',
                transition: 'all 0.3s var(--ease-spring)',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.08)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-6px)';
                el.style.boxShadow = '0 16px 36px rgba(37, 211, 102, 0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.08)';
              }}
            >
              <div>
                <span style={{ fontSize: '0.68rem', color: '#25D366', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Direct Consultation
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-cream)', margin: '0.4rem 0 0.5rem', fontWeight: 700 }}>
                  Talk to an Expert
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}>
                  Chat directly with our property advisors on WhatsApp to resolve questions instantly.
                </p>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#25D366', fontWeight: 700, marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                Chat on WhatsApp →
              </span>
            </a>

            {/* Card 3: Build a House or Plaza */}
            <Link
              href="/services#quote"
              className="card animate-fade-in-up stagger-5"
              style={{
                padding: '2rem 1.75rem',
                background: 'rgba(26, 26, 31, 0.85)',
                border: '1px solid var(--color-graphite-border)',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textDecoration: 'none',
                minHeight: '220px',
                transition: 'all 0.3s var(--ease-spring)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-6px)';
                el.style.borderColor = 'var(--color-gold)';
                el.style.boxShadow = '0 12px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(196,154,26,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'var(--color-graphite-border)';
                el.style.boxShadow = '';
              }}
            >
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Design &amp; Construction
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-cream)', margin: '0.4rem 0 0.5rem', fontWeight: 700 }}>
                  Build a House or Plaza
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.55 }}>
                  Get custom architectural designs, material scheduling, and full construction building layout estimates.
                </p>
              </div>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-gold)', fontWeight: 700, marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                Request Construction Quote →
              </span>
            </Link>
          </div>

          {/* Quick Property Finder bar */}
          <div
            className="animate-fade-in-up"
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              background: 'rgba(24, 24, 30, 0.94)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--color-graphite-border)',
              borderRadius: '8px',
              padding: '1.25rem',
              animationDelay: '550ms',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Quick Property Finder
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                Select options below to search
              </span>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `/properties?type=${encodeURIComponent(propertyType)}&location=${encodeURIComponent(location)}`;
              }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.75rem',
                alignItems: 'end',
              }}
            >
              <div>
                <label className="input-label" style={{ textAlign: 'left' }}>Property Type</label>
                <select
                  className="input-field"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="Residential Estate">House / Villa</option>
                  <option value="Commercial Plaza">Commercial Plaza</option>
                  <option value="Land / Plot">Land / Plot</option>
                </select>
              </div>

              <div>
                <label className="input-label" style={{ textAlign: 'left' }}>City Location</label>
                <select
                  className="input-field"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">All Cities</option>
                  <option value="Kano">Kano State</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Kaduna">Kaduna</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ height: '42px', width: '100%', fontSize: '0.8rem' }}>
                Search Listings
              </button>
            </form>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.06); }
        }
      `}</style>
    </section>
  );
}
