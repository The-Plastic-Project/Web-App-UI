const CACHE_NAME = `plastic-project-app-dev`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    console.log("installing")
    console.log(CACHE_NAME)
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/',
      '/style.css',
      '/index.html',
      '/local.html',
      '/AI-demo.html',
      'script.js',
      '/manifest.json',
      '/caffe vita logo.png',
      '/coffee img.png',
      '/script.js',
      '/home-page.js',
      '/AI-backend.js'
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
      try {
        // If the resource was not in the cache, try the network.
        const fetchResponse = await fetch(event.request);

        // Save the resource in the cache and return it.
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      } catch (e) {
        // The network failed.
      }
    }
  })());
});