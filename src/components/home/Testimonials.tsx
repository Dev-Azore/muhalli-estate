'use client';

import { useState, useEffect } from 'react';
import { useFadeInOnScroll } from '@/hooks/useAnimations';

const testimonials = [
  {
    name: 'Alhaji Ibrahim Sani',
    role: 'Commercial Property Investor',
    location: 'Kano State',
    text: 'Muhalli Estate delivered our 3-storey plaza on Limawa Road ahead of schedule. Their engineering standards, transparency on title documents, and progress reporting gave us total peace of mind.',
    propertyPhoto: '/constructional-site-1.webp',
  },
  {
    name: 'Dr. Amina Garba',
    role: 'Homeowner',
    location: 'Farm Centre, Kano',
    text: 'Acquiring our residential plot through Muhalli was seamless. Verified C of O, zero dispute issues, and their architecture team handled the complete building approval process.',
    propertyPhoto: '/estate-1.webp',
  },
  {
    name: 'Engr. Kabiru Usman',
    role: 'Off-Plan Investor',
    location: 'Abuja & Kano',
    text: 'Investing off-plan with Muhalli yielded over 35% capital growth before completion. Highly structured team led by qualified engineers and architects.',
    propertyPhoto: '/estate-2.webp',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, style } = useFadeInOnScroll({ delay: 100 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[current];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ ...style, padding: 'var(--section-py) 0' }}>
      <div className="container-site">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-eyebrow">Client Verification</span>
          <h2 className="section-title">
            Trusted by <span className="text-gradient-gold">Investors &amp; Homeowners</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Real experiences from clients standing at their completed Muhalli properties.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="card"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            background: 'var(--color-graphite-mid)',
          }}
        >
          {/* Property Image */}
          <div style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', height: '220px' }}>
            <img
              src={active.propertyPhoto}
              alt={active.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0.75rem',
                left: '0.75rem',
                background: 'rgba(15, 15, 20, 0.85)',
                backdropFilter: 'blur(4px)',
                padding: '0.3rem 0.6rem',
                borderRadius: '2px',
                border: '1px solid var(--color-gold-muted)',
              }}
            >
              <span style={{ fontSize: '0.65rem', color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                Verified Property
              </span>
            </div>
          </div>

          {/* Testimonial Text */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '2rem', color: 'var(--color-gold)', lineHeight: 1, marginBottom: '0.5rem' }}>
              “
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--color-cream)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
              {active.text}
            </p>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                {active.name}
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                {active.role} • {active.location}
              </p>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: current === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: current === idx ? 'var(--color-gold)' : 'var(--color-graphite-border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
