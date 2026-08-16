'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SellPropertyPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ padding: 'var(--section-py) 0' }}>
      <div className="container-site">
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href="/properties" className="btn btn-ghost" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem' }}>
            ← Back to Properties
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">Property Owner Portal</span>
          <h1 className="section-title">
            Sell Your Property <span className="text-gradient-gold">With Muhalli</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            List your land or building on Muhalli Marketplace. Our valuation team will review your property details and respond within 24–48 hours.
          </p>
        </div>

        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div className="card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'var(--color-graphite-mid)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--color-gold)' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(196, 154, 26, 0.15)',
                    border: '2px solid var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.8rem',
                    color: 'var(--color-gold)',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>Property Submission Received!</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                  Our property acquisition analysts will review your title documents and details, then reach out to schedule a physical valuation inspection.
                </p>
                <Link href="/properties" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                  Return to Marketplace
                </Link>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                  Property &amp; Owner Details
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="input-label">Owner / Agent Name *</label>
                    <input type="text" required className="input-field" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="input-label">Phone / WhatsApp Number *</label>
                    <input type="tel" required className="input-field" placeholder="+234..." />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="input-label">Property Type *</label>
                    <select required className="input-field">
                      <option value="Land / Plot">Land / Plot</option>
                      <option value="Residential House / Duplex">Residential House / Duplex</option>
                      <option value="Commercial Plaza">Commercial Plaza</option>
                      <option value="Unfinished Building">Unfinished Structure</option>
                    </select>
                  </div>
                  <div>
                    <label className="input-label">Property Location *</label>
                    <input type="text" required className="input-field" placeholder="e.g. Farm Centre, Kano" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="input-label">Title Document Type *</label>
                    <select required className="input-field">
                      <option value="C of O">Certificate of Occupancy (C of O)</option>
                      <option value="Governor's Consent">Governor's Consent</option>
                      <option value="Deed of Assignment">Deed of Assignment</option>
                      <option value="Excision / Gazetted">Excision / Gazetted</option>
                    </select>
                  </div>
                  <div>
                    <label className="input-label">Asking Price (₦) *</label>
                    <input type="text" required className="input-field" placeholder="e.g. ₦35,000,000" />
                  </div>
                </div>

                <div>
                  <label className="input-label">Property Description &amp; Land Size *</label>
                  <textarea required className="input-field" rows={4} placeholder="Describe plot size, number of bedrooms, perimeter fencing, accessibility..." />
                </div>

                <div style={{ padding: '1rem', background: 'var(--color-graphite-deep)', borderRadius: '4px', border: '1px border var(--color-graphite-border)' }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-muted-light)', lineHeight: 1.5 }}>
                    ℹ️ <strong>Note:</strong> All submitted properties undergo legal title verification at the Ministry of Lands before listing.
                  </p>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Submit Property for Valuation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
