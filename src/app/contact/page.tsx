'use client';

import { useState } from 'react';
import { useFadeInOnScroll } from '@/hooks/useAnimations';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Property Buying Inquiry');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { ref, style } = useFadeInOnScroll({ delay: 0 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phone, email, subject, message }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setErrorMsg('Network error. Please try again or reach out on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 'var(--section-py) 0' }} ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="container-site" style={{ ...style }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-eyebrow">Get In Touch</span>
          <h1 className="section-title">
            Contact <span className="text-gradient-gold">Muhalli Estate &amp; Construction</span>
          </h1>
          <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
            Visit our office in Kano State, send an email, or connect instantly with our engineering and sales team on WhatsApp.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Contact Details Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
                Corporate Office
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                    Physical Address
                  </span>
                  <p style={{ color: 'var(--color-cream)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    No. 2 BB Plaza, Limawa Road, 700102, Kano State, Nigeria
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                    Phone / WhatsApp (Primary Channel)
                  </span>
                  <a href="tel:+2347044491274" style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none' }}>
                    +234 704 449 1274
                  </a>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
                    CAC Registration
                  </span>
                  <p style={{ color: 'var(--color-cream)', fontSize: '0.9rem' }}>
                    RC Number: 58726
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-graphite-border)' }}>
                <a
                  href="https://wa.me/2347044491274?text=Hello%20Muhalli%20Estate%2C%20I%20am%20contacting%20you%20from%20your%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Start WhatsApp Chat Now
                </a>
              </div>
            </div>

            {/* Static Map Image Fallback */}
            <div className="card" style={{ padding: '0', overflow: 'hidden', height: '220px', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop"
                alt="Office Location Map"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15,15,20,0.65)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a
                  href="https://maps.google.com/?q=Limawa+Road+Kano+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ background: 'rgba(15,15,20,0.9)' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'var(--color-graphite-mid)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '1.5rem' }}>
              Send Us a Message
            </h3>

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
                    margin: '0 auto 1.25rem',
                    fontSize: '1.8rem',
                    color: 'var(--color-gold)',
                  }}
                >
                  ✓
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--color-gold)' }}>
                  Message Received
                </h4>
                <p style={{ color: 'var(--color-cream)', fontSize: '0.95rem', marginTop: '0.5rem', lineHeight: 1.6, maxWidth: '40ch', margin: '0.5rem auto 1.5rem' }}>
                  Thank you for reaching out. A representative will respond promptly to your email or phone.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {errorMsg && (
                  <div style={{ background: 'rgba(138, 32, 32, 0.2)', border: '1px solid var(--color-danger)', color: '#F08080', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.85rem' }}>
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="input-label">Full Name *</label>
                  <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="input-field" placeholder="Enter your full name" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label className="input-label">Phone Number *</label>
                    <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" placeholder="+234..." />
                  </div>
                  <div>
                    <label className="input-label">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="name@example.com" />
                  </div>
                </div>

                <div>
                  <label className="input-label">Subject / Inquiry Type *</label>
                  <select required value={subject} onChange={(e) => setSubject(e.target.value)} className="input-field">
                    <option value="Property Buying">Property Buying Inquiry</option>
                    <option value="Sell Property">Sell My Property</option>
                    <option value="Construction Quote">Construction Services Quote</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="input-label">Message *</label>
                  <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="input-field" rows={5} placeholder="Write your message here..." />
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
