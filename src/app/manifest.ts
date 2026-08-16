import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhalli Estate & Construction Ltd.',
    short_name: 'Muhalli',
    description:
      'Buy verified land & property or build your home and commercial plaza with Muhalli Estate & Construction Ltd. in Kano, Nigeria.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0F14',
    theme_color: '#C49A1A',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['business', 'lifestyle', 'finance'],
    lang: 'en',
    dir: 'ltr',
  };
}
