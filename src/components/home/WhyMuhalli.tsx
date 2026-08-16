'use client';

import Link from 'next/link';
import { useInView } from '@/hooks/useAnimations';

export default function WhyMuhalli() {
  const { ref, inView } = useInView(0.1);

  const pillars = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Property Acquisition & Marketplace',
      subtitle: 'Marketplace',
      description: 'Buy verified residential plots, commercial plazas, and ready-to-move properties with guaranteed legal title documents (C of O, Governor\'s Consent).',
      link: '/properties',
      btnText: 'Explore Marketplace',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M12 12h.01" />
          <path d="M17 12h.01" />
          <path d="M7 12h.01" />
        </svg>
      ),
      title: 'Custom Construction Engineering',
      subtitle: 'Full Building Services',
      description: 'Turnkey building execution from ground excavation to luxury handover. Overseen directly by certified ARCON architects and COREN civil engineers.',
      link: '/services',
      btnText: 'Get Construction Quote',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: 'Commercial Redevelopment & Land Banking',
      subtitle: 'Corporate Projects',
      description: 'Transforming prime location sites into high-yield commercial plazas and office developments delivered on strict schedules.',
      link: '/projects',
      btnText: 'View Case Studies',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-blueprint"
      style={{
        padding: 'var(--section-py) 0',
        borderTop: '1px solid var(--color-graphite-border)',
        borderBottom: '1px solid var(--color-graphite-border)',
      }}
    >
      <div className="container-site">
        {/* Section header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s var(--ease-spring), transform 0.7s var(--ease-spring)',
          }}
        >
          <span className="section-eyebrow">Strategic Capabilities</span>
          <h2 className="section-title">
            Three Pillars of <span className="text-gradient-gold">Muhalli Operations</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Whether acquiring prime land, constructing a multi-storey plaza, or listing property for valuation, Muhalli provides end-to-end expertise.
          </p>
        </div>

        {/* Cards — staggered slide up */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(26, 26, 31, 0.94)',
                backdropFilter: 'blur(8px)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
                transition: `opacity 0.65s var(--ease-spring) ${idx * 130}ms, transform 0.65s var(--ease-spring) ${idx * 130}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-6px) scale(1.01)';
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(196,154,26,0.3)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0) scale(1)';
                el.style.boxShadow = '';
              }}
            >
              {/* Icon with hover bounce */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '4px',
                  background: 'rgba(196, 154, 26, 0.12)',
                  border: '1px solid rgba(196, 154, 26, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  transition: 'background 0.25s ease, border-color 0.25s ease, transform 0.3s var(--ease-spring)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.12) rotate(-3deg)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(196,154,26,0.22)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1) rotate(0deg)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(196,154,26,0.12)';
                }}
              >
                {pillar.icon}
              </div>

              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '0.35rem' }}>
                {pillar.subtitle}
              </span>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.75rem' }}>
                {pillar.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                {pillar.description}
              </p>

              <div style={{ marginTop: 'auto' }}>
                <Link href={pillar.link} className="btn btn-outline" style={{ width: '100%', fontSize: '0.75rem' }}>
                  {pillar.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
