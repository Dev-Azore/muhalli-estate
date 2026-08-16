'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sampleProperties } from '@/data/properties';
import { useFadeInOnScroll } from '@/hooks/useAnimations';

export default function PropertiesPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTitleGuide, setShowTitleGuide] = useState(false);

  const { ref, style } = useFadeInOnScroll({ delay: 0 });

  const filteredProperties = sampleProperties.filter((item) => {
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div style={{ padding: 'var(--section-py) 0' }} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="container-site" style={{ ...style }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">Property Marketplace</span>
          <h1 className="section-title">
            Available <span className="text-gradient-gold">Properties &amp; Land Plots</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Verified residential estates, commercial plazas, and land titles across Kano State and Nigeria.
          </p>
        </div>

        {/* Plain English Land Title Helper Banner */}
        <div
          style={{
            background: 'var(--color-graphite-mid)',
            border: '1px solid var(--color-graphite-border)',
            borderRadius: '6px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                New to Land Papers?
              </span>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--color-cream)', marginTop: '0.2rem', fontWeight: 600 }}>
                Understanding Property Titles (C of O, Governor Consent, Deed)
              </h4>
            </div>

            <button
              onClick={() => setShowTitleGuide(!showTitleGuide)}
              className="btn btn-outline"
              style={{ fontSize: '0.75rem', padding: '0.4rem 0.9rem' }}
            >
              {showTitleGuide ? 'Hide Explanation ↑' : 'Read Simple Guide ↓'}
            </button>
          </div>

          {showTitleGuide && (
            <div
              style={{
                marginTop: '1.25rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--color-graphite-border)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                fontSize: '0.82rem',
                color: 'var(--color-muted-light)',
                lineHeight: 1.6,
              }}
            >
              <div>
                <strong style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.2rem' }}>
                  C of O (Certificate of Occupancy)
                </strong>
                The highest official document issued by the State Government confirming 99-year legal ownership of land.
              </div>
              <div>
                <strong style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.2rem' }}>
                  Governor’s Consent
                </strong>
                Required when buying land from an existing owner with a C of O. Ensures the transfer is officially registered.
              </div>
              <div>
                <strong style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.2rem' }}>
                  Deed of Assignment &amp; Excision
                </strong>
                Legal agreement transferring ownership from seller to buyer, backed by official government land release (Gazette).
              </div>
            </div>
          )}
        </div>

        {/* Filter Bar */}
        <div
          style={{
            background: 'var(--color-graphite-mid)',
            border: '1px solid var(--color-graphite-border)',
            borderRadius: '6px',
            padding: '1.25rem',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <div>
            <label className="input-label">Search Location or Title</label>
            <input
              type="text"
              placeholder="e.g. Kano, Farm Centre, C of O..."
              className="input-field"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <label className="input-label">Property Type</label>
            <select
              className="input-field"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Residential Estate">Residential House</option>
              <option value="Commercial Plaza">Commercial Plaza</option>
              <option value="Land / Plot">Land Plot</option>
            </select>
          </div>

          <div>
            <label className="input-label">Availability Status</label>
            <select
              className="input-field"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="For Sale">For Sale</option>
              <option value="Off-Plan">Off-Plan Pre-Construction</option>
              <option value="Sold Out">Sold Out</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
            Showing <strong>{filteredProperties.length}</strong> available properties
          </span>
          <Link href="/properties/sell" style={{ fontSize: '0.8rem', color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 600 }}>
            Want to sell your land or property? Click here →
          </Link>
        </div>

        {/* Property Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProperties.map((item) => (
            <div key={item.id} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <span
                  className={`badge badge-${item.status.toLowerCase().replace(' ', '')}`}
                  style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}
                >
                  {item.status}
                </span>
                <span
                  className="badge badge-category"
                  style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'rgba(15,15,20,0.85)' }}
                >
                  {item.documentTitle}
                </span>
              </div>

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Location: {item.location}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-cream)',
                    margin: '0.3rem 0 0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  Size: {item.size} • Verified Land Papers: {item.documentTitle}
                </p>

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
                  <div>
                    <span style={{ fontSize: '0.65rem', color: 'var(--color-muted)', display: 'block', textTransform: 'uppercase' }}>
                      Asking Price
                    </span>
                    <span className="naira-price" style={{ fontSize: '1.2rem' }}>
                      {item.priceFormatted.replace('₦', '')}
                    </span>
                  </div>

                  <Link href={`/properties/${item.slug}`} className="btn btn-primary" style={{ fontSize: '0.7rem', padding: '0.4rem 0.85rem' }}>
                    View Property Details
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
