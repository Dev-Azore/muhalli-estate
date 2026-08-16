'use client';

import { useInView, useCountUp } from '@/hooks/useAnimations';

/* Individual animated stat — each one tracks its own counter */
function StatItem({
  prefix,
  numericValue,
  suffix,
  label,
  description,
  delay,
  isVisible,
}: {
  prefix: string;
  numericValue: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
  isVisible: boolean;
}) {
  const count = useCountUp(numericValue, 1800, isVisible);

  return (
    <div
      className="animate-fade-in-up"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        opacity: 0,                        // starts invisible; animation handles it
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {/* Animated value */}
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
          fontWeight: 800,
          color: 'var(--color-gold)',
          lineHeight: 1.1,
          marginBottom: '0.3rem',
          transition: 'transform 0.2s ease',
          display: 'inline-block',
        }}
      >
        {prefix}{numericValue > 0 ? count.toLocaleString() : ''}{suffix}
      </span>

      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--color-cream)',
          marginBottom: '0.35rem',
          textAlign: 'center',
        }}
      >
        {label}
      </span>

      <p
        style={{
          fontSize: '0.78rem',
          color: 'var(--color-muted)',
          lineHeight: 1.45,
          maxWidth: '26ch',
          textAlign: 'center',
        }}
      >
        {description}
      </p>

      {/* Gold underline accent */}
      <div
        style={{
          width: isVisible ? '2.5rem' : '0',
          height: '2px',
          background: 'linear-gradient(90deg, var(--color-gold), transparent)',
          marginTop: '0.75rem',
          transition: `width 0.6s var(--ease-spring) ${delay + 400}ms`,
          borderRadius: '1px',
        }}
      />
    </div>
  );
}

export default function TrustBar() {
  const { ref, inView } = useInView(0.3);

  const stats = [
    {
      prefix: 'RC: ',
      numericValue: 58726,
      suffix: '',
      label: 'CAC Registered Company',
      description: 'Fully licensed & verified by Corporate Affairs Commission Nigeria.',
      delay: 0,
    },
    {
      prefix: '',
      numericValue: 5,
      suffix: '+ Years',
      label: 'Active Building Experience',
      description: 'Over half a decade of structural engineering in Northern Nigeria.',
      delay: 120,
    },
    {
      prefix: '',
      numericValue: 20,
      suffix: '+ Projects',
      label: 'Delivered Buildings & Estates',
      description: 'Completed commercial plazas, duplexes, and residential land developments.',
      delay: 240,
    },
    {
      prefix: '',
      numericValue: 100,
      suffix: '% Title Safety',
      label: 'Verified Land Documents',
      description: 'Every property comes with authentic C of O or Governor Consent.',
      delay: 360,
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: 'var(--color-graphite-mid)',
        borderTop: '1px solid var(--color-graphite-border)',
        borderBottom: '1px solid var(--color-graphite-border)',
        padding: '2.5rem 0',
        overflow: 'hidden',
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}
        >
          {stats.map((stat, idx) => (
            <StatItem key={idx} {...stat} isVisible={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
