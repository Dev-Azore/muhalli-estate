'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Property } from '@/data/properties';

export default function PropertyDetailClient({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(property.image);
  const [showModal, setShowModal] = useState(false);
  const [inspectionDate, setInspectionDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [booked, setBooked] = useState(false);

  const gallery = [
    property.image,
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <div style={{ padding: 'var(--section-py) 0' }}>
      <div className="container-site">
        {/* Back button */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href="/properties" className="btn btn-ghost" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
            ← Back to All Properties
          </Link>
        </div>

        {/* Title and Badge */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className={`badge badge-${property.status.toLowerCase().replace(' ', '')}`}>
              {property.status}
            </span>
            <span className="badge badge-category">Verified Title: {property.documentTitle}</span>
            <span className="badge badge-offplan">{property.type}</span>
          </div>

          <h1 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            {property.title}
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '1rem', marginTop: '0.4rem' }}>
            Location: {property.location} • Size: {property.size}
          </p>
        </div>

        {/* Grid layout: Main gallery left, Details right */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          {/* Gallery Column */}
          <div>
            <div style={{ position: 'relative', height: '380px', borderRadius: '6px', overflow: 'hidden', marginBottom: '1rem' }}>
              <img
                src={activeImage}
                alt={property.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Thumbnail Strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  style={{
                    height: '75px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: activeImage === imgUrl ? '2px solid var(--color-gold)' : '1px solid var(--color-graphite-border)',
                    cursor: 'pointer',
                    padding: 0,
                    background: 'none',
                  }}
                >
                  <img src={imgUrl} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Pricing & Inspection CTA Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="card" style={{ padding: '2rem', background: 'var(--color-graphite-mid)', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-light)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                Asking Price
              </span>
              <div className="naira-price" style={{ fontSize: '2.5rem', margin: '0.2rem 0 1rem' }}>
                {property.priceFormatted.replace('₦', '')}
              </div>

              {property.paymentPlan && (
                <div style={{ padding: '0.75rem 1rem', background: 'var(--color-graphite-deep)', borderRadius: '4px', borderLeft: '3px solid var(--color-gold)', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                    Payment Plan Available
                  </span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-muted-light)', marginTop: '0.2rem' }}>
                    {property.paymentPlan}
                  </p>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Schedule Site Inspection
                </button>
                <a
                  href={`https://wa.me/2347044491274?text=Hello%20Muhalli%20Estate%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(property.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>

            {/* Document Verification Box */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: 'var(--color-gold)', marginBottom: '0.5rem', fontWeight: 700 }}>
                Title &amp; Due Diligence
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                Title Document: <strong style={{ color: 'var(--color-cream)' }}>{property.documentTitle}</strong>. Verified by Muhalli legal team. Clients are welcome to conduct independent search at the Kano State Ministry of Lands.
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="card" style={{ padding: '2rem', marginBottom: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-gold)', marginBottom: '1rem', fontWeight: 700 }}>
            Property Overview &amp; Infrastructure
          </h3>
          <p style={{ color: 'var(--color-cream)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            {property.description}
          </p>

          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--color-muted-light)', marginBottom: '0.75rem', fontWeight: 600 }}>
            Key Infrastructure &amp; Features:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {[
              'Perimeter Security Fencing',
              '24/7 Gated Security Patrol',
              'Interlocked Access Roads',
              'Solar Street Lighting',
              'Dedicated Transformer & Power Line',
              'Dispute-Free Title Deed',
            ].map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-muted-light)' }}>
                <span style={{ color: 'var(--color-gold)' }}>✓</span> {feat}
              </div>
            ))}
          </div>
        </div>

        {/* Inspection Modal */}
        {showModal && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(10, 10, 15, 0.9)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <div
              className="card"
              style={{
                width: '100%',
                maxWidth: '500px',
                padding: '2rem',
                background: 'var(--color-graphite-mid)',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-muted)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                }}
              >
                ×
              </button>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-gold)', marginBottom: '0.5rem', fontWeight: 700 }}>
                Schedule Site Inspection
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
                Inspection for: <strong style={{ color: 'var(--color-cream)' }}>{property.title}</strong>
              </p>

              {booked ? (
                <div style={{ textAlign: 'center', padding: '1.5rem 0', color: 'var(--color-gold)' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(196, 154, 26, 0.15)',
                      border: '2px solid var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      fontSize: '1.5rem',
                      color: 'var(--color-gold)',
                    }}
                  >
                    ✓
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-gold)' }}>
                    Inspection Booked
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', marginTop: '0.4rem' }}>
                    We will confirm your appointment via phone/WhatsApp.
                  </p>
                  <button onClick={() => { setBooked(false); setShowModal(false); }} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                    Close
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBooked(true);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <div>
                    <label className="input-label">Your Name *</label>
                    <input type="text" required value={clientName} onChange={(e) => setClientName(e.target.value)} className="input-field" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="input-label">Phone / WhatsApp Number *</label>
                    <input type="tel" required value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} className="input-field" placeholder="+234..." />
                  </div>
                  <div>
                    <label className="input-label">Preferred Inspection Date *</label>
                    <input type="date" required value={inspectionDate} onChange={(e) => setInspectionDate(e.target.value)} className="input-field" />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Confirm Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
