'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sampleProjects } from '@/data/projects';
import { useFadeInOnScroll } from '@/hooks/useAnimations';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { ref, style } = useFadeInOnScroll({ delay: 0 });

  const categories = ['All', 'Residential', 'Commercial', 'Plaza'];

  const filteredProjects = sampleProjects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <div style={{ padding: 'var(--section-py) 0' }} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="container-site" style={{ ...style }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">Proven Construction Track Record</span>
          <h1 className="section-title">
            Our <span className="text-gradient-gold">Construction Portfolio</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Verified case studies of completed residential estates, commercial plazas, and redevelopment projects built by Muhalli engineers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
              style={{ fontSize: '0.75rem', padding: '0.5rem 1.25rem' }}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Image Progression Strip */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '220px' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={project.beforeImage}
                    alt="Before Construction"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0.5rem',
                      left: '0.5rem',
                      background: 'rgba(0,0,0,0.75)',
                      color: '#fff',
                      fontSize: '0.65rem',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    BEFORE
                  </span>
                </div>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={project.afterImage}
                    alt="After Construction"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0.5rem',
                      right: '0.5rem',
                      background: 'var(--color-gold)',
                      color: 'var(--color-graphite-deep)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.5rem',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    DELIVERED BUILD
                  </span>
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="badge badge-category" style={{ marginBottom: '0.5rem', alignSelf: 'flex-start' }}>
                  {project.category} Case Study
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-cream)', margin: '0.4rem 0' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
                  Location: {project.location} • Year: {project.yearCompleted}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.summary}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--color-graphite-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-light)' }}>
                    ⏱️ {project.durationMonths} Mos Build Time
                  </span>
                  <Link href={`/projects/${project.slug}`} className="btn btn-primary" style={{ fontSize: '0.7rem', padding: '0.4rem 0.85rem' }}>
                    View Case Study &amp; Slider
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
