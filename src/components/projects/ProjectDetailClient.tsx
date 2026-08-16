'use client';

import Link from 'next/link';
import { ProjectCaseStudy } from '@/types/project';
import BeforeAfterSlider from '@/components/projects/BeforeAfterSlider';
import { useFadeInOnScroll } from '@/hooks/useAnimations';

export default function ProjectDetailClient({ project }: { project: ProjectCaseStudy }) {
  const { ref, style } = useFadeInOnScroll({ delay: 0 });

  return (
    <div style={{ padding: 'var(--section-py) 0' }} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="container-site" style={{ ...style }}>
        {/* Back Link */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href="/projects" className="btn btn-ghost" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
            ← Back to Construction Portfolio
          </Link>
        </div>

        {/* Title Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className="badge badge-category">{project.category} Case Study</span>
            <span className="badge badge-offplan">Delivered {project.yearCompleted}</span>
          </div>

          <h1 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            {project.title}
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1rem', marginTop: '0.4rem' }}>
            Location: {project.location} • Construction Duration: {project.durationMonths} Months
          </p>
        </div>

        {/* Interactive Before & After Slider Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-gold)', fontWeight: 700 }}>
              Interactive Before &amp; After Transformation
            </h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-light)' }}>
              Drag slider left or right to reveal transformation
            </span>
          </div>

          <BeforeAfterSlider
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
            beforeLabel="OLD SITE / DEMOLITION"
            afterLabel="DELIVERED BUILDING"
            height="460px"
          />
        </div>

        {/* 3-Phase Construction Progression Strip */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-eyebrow">Proven Active Building</span>
            <h2 className="section-title" style={{ fontSize: '1.75rem' }}>
              3-Phase Construction Progression
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Phase 1: Before */}
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', position: 'relative' }}>
                <img src={project.beforeImage} alt="Phase 1 Site" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-sold" style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                  Phase 1: Initial Site / Demolition
                </span>
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                  Site clearing, demolition of pre-existing structures, soil testing, and land boundary survey.
                </p>
              </div>
            </div>

            {/* Phase 2: During */}
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', position: 'relative' }}>
                <img src={project.duringImage} alt="Phase 2 Construction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-reserved" style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                  Phase 2: Foundation &amp; Frame
                </span>
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                  Concrete piling, floor slab casting, blockwork erection, and structural steel installation.
                </p>
              </div>
            </div>

            {/* Phase 3: After */}
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ height: '200px', position: 'relative' }}>
                <img src={project.afterImage} alt="Phase 3 Handover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge badge-available" style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                  Phase 3: Finishing &amp; Handover
                </span>
              </div>
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                  Glass curtain walling, interior fittings, interlocked driveway, electrical testing, and client key handover.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details & Technical Specifications */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Full Story */}
          <div className="card" style={{ padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-gold)', marginBottom: '1rem', fontWeight: 700 }}>
              Project Case Overview
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-cream)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              {project.fullStory}
            </p>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-graphite-border)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                Lead Engineering Supervision:
              </span>
              <p style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, marginTop: '0.2rem' }}>
                {project.leadEngineer}
              </p>
            </div>
          </div>

          {/* Specifications Table Card */}
          <div className="card" style={{ padding: '2rem', background: 'var(--color-graphite-mid)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-gold)', marginBottom: '1.25rem', fontWeight: 700 }}>
              Technical Specifications
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {project.specifications.map((spec, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--color-graphite-border)',
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-light)' }}>{spec.label}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-cream)', fontWeight: 700 }}>{spec.value}</span>
                </div>
              ))}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-light)' }}>Client / Sponsor</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-cream)', fontWeight: 700 }}>{project.client}</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/services#quote" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Request Similar Building Quote
              </Link>
              <a
                href={`https://wa.me/2347044491274?text=Hello%20Muhalli%20Estate%2C%20I%20saw%20your%20case%20study%20"${encodeURIComponent(project.title)}"%20and%20want%20to%20discuss%20a%20construction%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Discuss Case Study on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
