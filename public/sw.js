// Muhalli Estate & Construction Ltd. — Service Worker
// Caches key static assets for offline resilience and fast repeat visits.

const CACHE_NAME = 'muhalli-v1';

const PRECACHE_ASSETS = [
  '/',
  '/properties',
  '/services',
  '/projects',
  '/about',
  '/contact',
  '/estate-1.webp',
  '/estate-2.webp',
  '/land-1.webp',
  '/constructional-site-1.webp',
  '/constructional-site-2.webp',
  '/Muhalli Logo.jpg',
];

// --- Install: pre-cache key assets ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

// --- Activate: clear old caches ---
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// --- Fetch: network-first for API routes, cache-first for assets ---
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and API/external requests
  if (
    request.method !== 'GET' ||
    url.pathname.startsWith('/api/') ||
    !url.origin.includes(self.location.origin)
  ) {
    return;
  }

  // For navigation requests: network-first with offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return res;
        })
        .catch(() => caches.match('/') || caches.match(request))
    );
    return;
  }

  // For static assets (images, fonts): cache-first
  if (
    url.pathname.match(/\.(webp|jpg|jpeg|png|svg|gif|woff2?|css|js)$/)
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            return res;
          })
      )
    );
    return;
  }
});
