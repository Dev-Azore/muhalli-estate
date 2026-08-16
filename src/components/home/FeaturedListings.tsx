'use client';

import Link from 'next/link';
import { sampleProperties } from '@/data/properties';
import { sampleProjects } from '@/data/projects';
import { useFadeInOnScroll } from '@/hooks/useAnimations';

export default function FeaturedListings() {
  const { ref, style } = useFadeInOnScroll({ delay: 100 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ ...style, padding: 'var(--section-py) 0' }}>
      <div className="container-site">
        {/* Section Header */}
        <div style={{ textTransform: 'center', textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-eyebrow">Portfolio &amp; Marketplace</span>
          <h2 className="section-title">
            Featured <span className="text-gradient-gold">Properties &amp; Projects</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Explore available land and developments, alongside verified completed construction case studies.
          </p>
        </div>

        {/* Grid of mixed items */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {/* Featured Properties */}
          {sampleProperties.slice(0, 2).map((property) => (
            <div key={property.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Image container */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={property.image}
                  alt={property.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.4rem' }}>
                  <span className={`badge badge-${property.status.toLowerCase().replace(' ', '')}`}>
                    {property.status}
                  </span>
                  <span className="badge badge-category">{property.documentTitle}</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  {property.type}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, margin: '0.3rem 0 0.5rem', color: 'var(--color-cream)' }}>
                  {property.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                  Location: {property.location} • Size: {property.size}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-graphite-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="naira-price" style={{ fontSize: '1.25rem' }}>
                    {property.priceFormatted.replace('₦', '')}
                  </span>
                  <Link href={`/properties/${property.slug}`} className="btn btn-outline" style={{ fontSize: '0.7rem', padding: '0.4rem 0.8rem' }}>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Featured Projects */}
          {sampleProjects.slice(0, 1).map((project) => (
            <div key={project.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={project.afterImage}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                  <span className="badge badge-offplan">Completed Build</span>
                </div>
              </div>

              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Case Study • {project.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, margin: '0.3rem 0 0.5rem', color: 'var(--color-cream)' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                  Location: {project.location} • Delivered {project.yearCompleted}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-graphite-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-light)' }}>
                    Before &amp; After Available
                  </span>
                  <Link href={`/projects/${project.slug}`} className="btn btn-primary" style={{ fontSize: '0.7rem', padding: '0.4rem 0.8rem' }}>
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons Footer */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/properties" className="btn btn-outline">
            Browse All Properties
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            Explore Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
