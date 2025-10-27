self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('meu-pwa').then(function(cache) {
      return cache.addAll(['index.html']);
    })
  );
});