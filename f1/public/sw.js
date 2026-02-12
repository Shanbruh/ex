const CACHE_NAME = 'study-hub-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  'https://cdn-icons-png.flaticon.com/512/3534/3534139.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // For same-origin requests, use Cache-First, then Network
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        return cachedResponse || fetch(request);
      })
    );
  } else {
    // For external requests (notes sites), try Network then Cache
    // This allows dynamic caching of external pages
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // Check if we received a valid response
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' && networkResponse.type !== 'cors') {
            // Note: 'opaque' responses (from cross-origin without CORS) cannot be cached properly if they are not basic/cors
            // But we try to cache what we can.
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          // Offline fallback for external pages
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            // If nothing in cache, show offline page
            if (request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });
        })
    );
  }
});
