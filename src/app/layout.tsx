import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Montserrat, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import './globals.css';

/* ---------- Google Fonts ---------- */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

/* ---------- Site Metadata ---------- */
export const metadata: Metadata = {
  metadataBase: new URL('https://muhalliestates.com'),
  title: {
    default: 'Muhalli Estate & Construction Ltd. | Buy, Sell & Build in Nigeria',
    template: '%s | Muhalli Estate & Construction',
  },
  description:
    'Muhalli Estate & Construction Ltd. — premium residential and commercial property in Nigeria. Browse listings and full-scale construction services in Kano and beyond.',
  keywords: [
    'real estate Kano Nigeria',
    'buy land Kano',
    'construction company Kano',
    'property for sale Nigeria',
    'commercial plaza Nigeria',
    'Muhalli Estate',
  ],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  authors: [{ name: 'Muhalli Estate & Construction Ltd.' }],
  creator: 'Muhalli Estate & Construction Ltd.',
  publisher: 'Muhalli Estate & Construction Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'Muhalli Estate & Construction Ltd.',
    title: 'Muhalli Estate & Construction Ltd.',
    description:
      'Buy, sell, and build premium property in Nigeria. From residential estates to commercial plazas — Muhalli handles acquisition, development, and full-scale construction.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Muhalli Estate & Construction Ltd.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhalli Estate & Construction Ltd.',
    description: 'Buy, sell, and build premium property in Nigeria.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: '#C49A1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/* ---------- Root Layout ---------- */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${montserrat.variable} ${inter.variable}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--color-graphite)',
          color: 'var(--color-cream)',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          animation: 'fadeIn 0.35s ease forwards',
        }}
      >
        <Navbar />

        <main style={{ flex: 1, paddingTop: '4.5rem' /* height of fixed Navbar */ }}>
          {children}
        </main>

        <Footer />

        {/* PWA Install Prompt Banner */}
        <PWAInstallPrompt />

        {/* Floating WhatsApp Action Button */}
        <a
          href="https://wa.me/2347044491274?text=Hello%20Muhalli%20Estate%2C%20I%27d%20like%20to%20inquire%20about%20your%20properties."
          className="floating-cta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Chat with Us
        </a>
      </body>
    </html>
  );
}
