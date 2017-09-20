// Name our cache
var cacheName = 'my-pwa-cache-v1',
    dataCacheName = 'spreadsheet-data-v1',
    filesToCache = [
      "/",
      "/index.html",
      "static/js/bundle.js",

    ];

self.addEventListener('install', (e) => {
  console.log('[ServerWorker] install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[serviceWorker] caching app shell');
      return cache.addAll(filesToCache);
    })
   );
});


self.addEventListener('activate', (e) => {
  console.log('[serviceWorker] Activate');
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if(key !== cacheName && key !== dataCacheName){
          console.log('[serviceWorker] removing old cache');
          return caches.delete(key);
        }
        return false;
      }));
    })
    );
  return self.clients.claim();
});

self.addEventListener('fetch',(e) => {
  console.log('[Service Worker] Fetch');
  var dataUrl = "https://spreadsheets.google.com/feeds/list/1BKHXoRcKufFnwvip3McTGEKgUX1u6OEPHcwUjvM240E/od6/public/values?alt=json";
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then((cache) => {
        return fetch(e.request).then((response) => {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});
