'use client';

import { useState } from 'react';
import { useFadeInOnScroll } from '@/hooks/useAnimations';

const servicesData = [
  {
    id: 'residential',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential House Construction',
    shortDesc: 'Custom building for private homes, duplexes, bungalows, and estates from ground foundation to roof key handover.',
    deliverables: [
      'Turnkey house building from foundation digging to roof',
      'Modern living room & bedroom architectural layout',
      'POP ceiling design, floor tiling, and painting',
      'Perimeter wall fencing, gate, and interlocked driveway',
      'Wiring for security cameras and automated gate',
    ],
  },
  {
    id: 'commercial',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <path d="M10 22v-4h4v4" />
      </svg>
    ),
    title: 'Commercial Construction (Plazas & Offices)',
    shortDesc: 'Multi-storey building execution for commercial shopping plazas, retail stores, office buildings, and corporate spaces.',
    deliverables: [
      'Heavy concrete piling foundation for multi-floor buildings',
      'Structural steel framing, blockwork, and glass facades',
      'Elevator shafting, water plumbing, and 3-phase wiring',
      'Space provisions for solar hybrid power & generators',
      'Building plan approval support with state authorities',
    ],
  },
  {
    id: 'architectural',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C49A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20" />
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <path d="M6 6l12 12" />
      </svg>
    ),
    title: 'Architectural Design & Project Management',
    shortDesc: '2D/3D building plans, official COREN/ARCON stamps, land soil testing, itemized material cost calculations (BOQ), and site supervision.',
    deliverables: [
      '2D floor plans & 3D realistic pictures of your building',
      'ARCON & COREN registered stamp approvals',
      'Soil testing & land strength survey reports',
      'Itemized Bill of Quantities (BOQ) material cost calculation',
      'On-site engineering supervision during building',
    ],
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Consultation & Site Inspection',
    description: 'We meet with you to inspect your plot, check soil condition, boundaries, and discuss your building requirements.',
  },
  {
    step: '02',
    title: 'Design & BOQ Cost Estimation',
    description: 'Our architects draft 2D/3D plans and prepare a detailed Bill of Quantities breakdown for all building materials.',
  },
  {
    step: '03',
    title: 'Permits & Approvals',
    description: 'We handle building plan submissions and secure official government stamps from the Ministry of Physical Planning.',
  },
  {
    step: '04',
    title: 'Foundation & Earthworks',
    description: 'Site clearing, excavation, raft or piling foundation casting, and damp-proof membrane installation.',
  },
  {
    step: '05',
    title: 'Superstructure & Roofing',
    description: 'Column casting, blockwork masonry, floor slab reinforcement, and roof truss installation.',
  },
  {
    step: '06',
    title: 'Finishing & Mechanical/Electrical',
    description: 'Plastering, electrical wiring, plumbing, POP ceilings, floor tile laying, glazing, and painting.',
  },
  {
    step: '07',
    title: 'Quality Testing & Handover',
    description: 'Final structural safety audit, utility testing, compound cleanup, and official key handover to you.',
  },
];

export default function ServicesPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Residential House Construction');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('20M - 50M');
  const [details, setDetails] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { ref, style } = useFadeInOnScroll({ delay: 0 });

  const selectServiceForQuote = (type: string) => {
    setProjectType(type);
    const quoteElem = document.getElementById('quote');
    if (quoteElem) {
      quoteElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          projectType,
          location,
          budget,
          details,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to send request. Please check your phone number and try again.');
      }
    } catch (err) {
      console.error('Quote submission error:', err);
      setErrorMsg('Network error. Please check your internet connection or talk to us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 'var(--section-py) 0' }} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="container-site" style={{ ...style }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">Custom Construction Services</span>
          <h1 className="section-title">
            Construction <span className="text-gradient-gold">Services &amp; Quote Request</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            We design, manage, and build residential homes, commercial plazas, and office complexes from foundation to key handover.
          </p>
        </div>

        {/* 3 Core Construction Services Cards (As defined in Spec Doc Section 7) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
          }}
        >
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--color-graphite-mid)',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '4px',
                  background: 'rgba(196, 154, 26, 0.12)',
                  border: '1px solid rgba(196, 154, 26, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {service.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.75rem' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {service.shortDesc}
              </p>

              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                Key Deliverables:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {service.deliverables.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.8rem', color: 'var(--color-muted-light)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                    <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => selectServiceForQuote(service.title)}
                className="btn btn-outline"
                style={{ marginTop: 'auto', width: '100%', fontSize: '0.75rem' }}
              >
                Request Quote for This Service →
              </button>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-eyebrow">Methodical Engineering Execution</span>
            <h2 className="section-title">The 7-Step Building Process</h2>
            <p className="section-subtitle" style={{ margin: '0.75rem auto 0' }}>
              How Muhalli handles your project from raw land to key handover.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {processSteps.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem', background: 'var(--color-graphite-mid)' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-gold)', display: 'block', marginBottom: '0.3rem' }}>
                  {item.step}
                </span>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-cream)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Get a Quote Form Section */}
        <div id="quote" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div className="card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'var(--color-graphite-mid)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.5rem', textAlign: 'center' }}>
              Request a Construction Quote
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', textAlign: 'center', marginBottom: '2rem' }}>
              Fill in your details below. Our building engineers will reply to you within 24 hours.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 0', color: 'var(--color-gold)' }}>
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
                    margin: '0 auto 1.25rem',
                    fontSize: '1.8rem',
                    color: 'var(--color-gold)',
                  }}
                >
                  ✓
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--color-gold)' }}>
                  Request Sent Successfully!
                </h4>
                <p style={{ color: 'var(--color-cream)', fontSize: '0.95rem', marginTop: '0.5rem', lineHeight: 1.6, maxWidth: '45ch', margin: '0.5rem auto 1.75rem' }}>
                  We have received your message. Our engineering team will call or WhatsApp you soon to talk about your land and building plan.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {errorMsg && (
                  <div
                    style={{
                      background: 'rgba(138, 32, 32, 0.2)',
                      border: '1px solid var(--color-danger)',
                      color: '#F08080',
                      padding: '0.75rem 1rem',
                      borderRadius: '4px',
                      fontSize: '0.85rem',
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="input-label">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="input-field"
                      placeholder="e.g. Aminu Lawan"
                    />
                  </div>
                  <div>
                    <label className="input-label">Phone or WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="input-field"
                      placeholder="+234 704 449 1274"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="input-label">Project Type *</label>
                    <select
                      required
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="input-field"
                    >
                      <option value="Residential House Construction">Residential House / Duplex / Estate</option>
                      <option value="Commercial Construction (Plazas & Offices)">Commercial Plaza / Office Building</option>
                      <option value="Architectural Design & Project Management">Architectural Design &amp; Project Management</option>
                      <option value="Renovation & Building Redevelopment">Renovation / Building Redevelopment</option>
                    </select>
                  </div>
                  <div>
                    <label className="input-label">Project Location (City / State) *</label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="input-field"
                      placeholder="e.g. Kano, Abuja, Kaduna"
                    />
                  </div>
                </div>

                <div>
                  <label className="input-label">Estimated Building Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="input-field"
                  >
                    <option value="Below 20M">Below ₦20 Million</option>
                    <option value="20M - 50M">₦20 Million – ₦50 Million</option>
                    <option value="50M - 150M">₦50 Million – ₦150 Million</option>
                    <option value="Above 150M">Above ₦150 Million</option>
                  </select>
                </div>

                <div>
                  <label className="input-label">Project Details &amp; Requirements</label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="input-field"
                    rows={4}
                    placeholder="Describe plot size, number of rooms/floors, current land status, preferred timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? 'Sending Request...' : 'Submit Quote Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
