const CACHE_NAME = `plastic-project-app-v0`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/index.html',
      '/shop-imgs/accenture-bg.jpg',
      '/shop-imgs/accenture-logo.jpg',
      '/shop-imgs/adrish-bg.jpg',
      '/shop-imgs/adrish-logo.png',
      '/shop-imgs/alchemy-goods-logo.png',
      '/shop-imgs/alchemy-goods.jpeg',
      '/shop-imgs/broadfork-bg.jpg',
      '/shop-imgs/broadfork-logo.jpg',
      '/shop-imgs/cactus-bg.jpg',
      '/shop-imgs/cactus-logo.png',
      '/shop-imgs/cadence3-bg.jpg',
      '/shop-imgs/cadence3-logo2.png',
      '/shop-imgs/caffe-vita-bg.jpg',
      '/shop-imgs/caffe-vita-logo.png',
      '/shop-imgs/GeoTech-bg.jpg',
      '/shop-imgs/GeoTech-logo.png',
      '/shop-imgs/greenbeanery-bg.jpg',
      '/shop-imgs/greenbeanery-logo.jpg',
      '/shop-imgs/haiku-logo.webp',
      '/shop-imgs/haiku.webp',
      '/shop-imgs/homegrown-logo.jpeg',
      '/shop-imgs/homegrown.jpeg',
      '/shop-imgs/maria-cleaning-bg.jpg',
      '/shop-imgs/maria-cleaning-logo.jpg',
      '/shop-imgs/metamorphic-logo.png',
      '/shop-imgs/metamorphic.jpeg',
      '/shop-imgs/mimis-logo.jpeg',
      '/shop-imgs/mimis.jpeg',
      '/shop-imgs/PCC-bg.jpg',
      '/shop-imgs/PCC-logo.png',
      '/shop-imgs/tamales-logo.png',
      '/shop-imgs/tamales.jpeg',
      '/shop-imgs/zoka-coffee-bg.jpg',
      '/shop-imgs/zoka-coffee-logo.jpg',
      '/AI-backend.js',
      '/AI-demo.html',
      '/ai-tips.webp',
      "/fun-ai-pic.jpg",
      "fun-fact-img.jpg",
      "home-page.js",
      "local.html",
      "script.js",
      "style.css",
      "waste-pic-cropped.png",
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