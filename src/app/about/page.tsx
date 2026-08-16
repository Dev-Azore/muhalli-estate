'use client';

import { teamMembers } from '@/data/team';
import { useFadeInOnScroll } from '@/hooks/useAnimations';

export default function AboutPage() {
  const { ref, style } = useFadeInOnScroll({ delay: 0 });

  return (
    <div style={{ padding: 'var(--section-py) 0' }} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="container-site" style={{ ...style }}>
        {/* Corporate Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">Corporate Profile &amp; Governance</span>
          <h1 className="section-title">
            About <span className="text-gradient-gold">Muhalli Estate &amp; Construction</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Incorporated under CAC (RC: 58726), Muhalli operates across land acquisition, real estate development, and heavy civil construction in Kano State and across Nigeria.
          </p>
        </div>

        {/* Company Core Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          <div className="card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '4px',
                background: 'rgba(196, 154, 26, 0.12)',
                border: '1px solid rgba(196, 154, 26, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
              Our Corporate Mission
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
              To engineer structural excellence, deliver dispute-free verified land titles, and build enduring commercial and residential assets for Nigerian investors.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '4px',
                background: 'rgba(196, 154, 26, 0.12)',
                border: '1px solid rgba(196, 154, 26, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
              Structural Engineering Rigor
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
              Every project is overseen directly by certified COREN civil engineers and ARCON architects, ensuring strict adherence to structural engineering standards.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '4px',
                background: 'rgba(196, 154, 26, 0.12)',
                border: '1px solid rgba(196, 154, 26, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
              Title Document Verification
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
              Zero compromise on due diligence. All properties are backed by verifiable Certificate of Occupancy (C of O), Governor’s Consent, or Excision documents.
            </p>
          </div>
        </div>

        {/* Professional Team Section */}
        <div id="team" style={{ paddingTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-eyebrow">Leadership &amp; Expertise</span>
            <h2 className="section-title">
              Meet Our <span className="text-gradient-gold">Executive Leadership</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              A multidisciplinary team of licensed architects, civil engineers, market analysts, and software engineers.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0',
                  overflow: 'hidden',
                  background: 'var(--color-graphite-mid)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Corporate Header Avatar Strip */}
                <div
                  style={{
                    padding: '2rem 1.5rem 1rem',
                    background: 'var(--color-graphite-deep)',
                    borderBottom: '1px solid var(--color-graphite-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '6px',
                      background: 'rgba(196, 154, 26, 0.12)',
                      border: '1.5px solid var(--color-gold)',
                      color: 'var(--color-gold)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .toUpperCase()}
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--color-gold)',
                        display: 'block',
                      }}
                    >
                      {member.profession}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--color-cream)',
                        lineHeight: 1.25,
                        marginTop: '0.2rem',
                      }}
                    >
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--color-muted-light)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {member.role}
                  </p>

                  <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {member.bio}
                  </p>

                  {/* Credentials Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {member.credentials.map((cred, idx) => (
                      <span key={idx} className="badge badge-category" style={{ fontSize: '0.6rem' }}>
                        ✓ {cred}
                      </span>
                    ))}
                  </div>

                  {/* Contact & Social Footer */}
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--color-graphite-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <a
                      href={`mailto:${member.email}`}
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-gold)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      Direct Email
                    </a>

                    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '2px',
                            background: 'var(--color-graphite-light)',
                            border: '1px solid var(--color-graphite-border)',
                            color: 'var(--color-cream)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-heading)',
                          }}
                        >
                          in
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '2px',
                            background: 'var(--color-graphite-light)',
                            border: '1px solid var(--color-graphite-border)',
                            color: 'var(--color-cream)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                          }}
                        >
                          𝕏
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
