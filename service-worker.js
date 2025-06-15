self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
