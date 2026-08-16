'use client';

import { useEffect, useState } from 'react';

const PROMPT_KEY = 'muhalli_pwa_prompt_last_shown';
const PROMPT_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => console.log('[SW] Registered:', reg.scope))
        .catch((err) => console.warn('[SW] Registration failed:', err));
    }
  }, []);

  // Listen for the browser's beforeinstallprompt event
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Check if we should show based on 24-hour throttle
      const lastShown = localStorage.getItem(PROMPT_KEY);
      const now = Date.now();

      if (!lastShown || now - parseInt(lastShown, 10) >= PROMPT_INTERVAL_MS) {
        // Small delay so it doesn't pop up the instant the page loads
        setTimeout(() => setShowBanner(true), 3500);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Hide banner if already installed
  useEffect(() => {
    const handler = () => setShowBanner(false);
    window.addEventListener('appinstalled', handler);
    return () => window.removeEventListener('appinstalled', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    // Record the time regardless of outcome, reset after 24h
    localStorage.setItem(PROMPT_KEY, String(Date.now()));
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setDismissed(true);
    localStorage.setItem(PROMPT_KEY, String(Date.now()));
  };

  if (!showBanner || dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Install Muhalli app"
      style={{
        position: 'fixed',
        bottom: '5.5rem',         // above floating WhatsApp button
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(92vw, 420px)',
        background: 'linear-gradient(135deg, #1E1E26 0%, #16161E 100%)',
        border: '1px solid rgba(196, 154, 26, 0.45)',
        borderRadius: '12px',
        padding: '1.1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(196,154,26,0.12)',
        zIndex: 9999,
        animation: 'fadeInUp 0.4s ease forwards',
      }}
    >
      {/* MH Icon */}
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #C49A1A, #9A760E)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1rem',
          color: '#0F0F14',
          letterSpacing: '-0.02em',
        }}
      >
        MH
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-cream)', margin: 0 }}>
          Add Muhalli to your phone
        </p>
        <p style={{ fontSize: '0.74rem', color: 'var(--color-muted)', margin: '0.15rem 0 0', lineHeight: 1.4 }}>
          Browse properties &amp; contact us offline, anytime.
        </p>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flexShrink: 0 }}>
        <button
          onClick={handleInstall}
          style={{
            background: 'var(--color-gold)',
            color: '#0F0F14',
            border: 'none',
            borderRadius: '6px',
            padding: '0.4rem 0.85rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '0.75rem',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Install App
        </button>
        <button
          onClick={handleDismiss}
          style={{
            background: 'transparent',
            color: 'var(--color-muted)',
            border: 'none',
            padding: '0.2rem',
            fontSize: '0.7rem',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          Not now
        </button>
      </div>
    </div>
  );
}
