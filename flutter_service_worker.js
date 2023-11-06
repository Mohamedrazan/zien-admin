'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cf4304d4d555038e4592f4930d904cf4",
"assets/AssetManifest.json": "218e790cccc6ba801743f5acf06a7114",
"assets/assets/icons/api.png": "3beff8c7a3461425fa934b18c2c3e5dd",
"assets/assets/icons/appointment.png": "4dfa5e01333262258d2a9bc030069225",
"assets/assets/icons/appointment_d.png": "844b229f219aef746057b53a5f3a5b30",
"assets/assets/icons/arrow_left.png": "b198ca9ea3bc115edda96c717f218c71",
"assets/assets/icons/calendar.png": "8e3f5227d0c4b353227885428fe4c3d6",
"assets/assets/icons/carbon_settings-adjust.png": "ac83f8269ef5c60b12fb9668d4e619a1",
"assets/assets/icons/card.png": "af925604a9c0b8a5ef5bdf7551e97a52",
"assets/assets/icons/dashboard.png": "0254a70decf916ab6ba92a4dc9fd3279",
"assets/assets/icons/ellipse.png": "04676a98fdc6941351bb9f5644b2383f",
"assets/assets/icons/email.png": "b1b9cb976d0da7329a7680d86c69238d",
"assets/assets/icons/facebook.png": "c2fe28130398eb22a1f046c4904a0d72",
"assets/assets/icons/facebook_logo.png": "fd1f7e3d0cdf3d365dbaf3bb8cfc74c9",
"assets/assets/icons/facebook_messenger.png": "bac24b59fd6aa2880c1913131f12d955",
"assets/assets/icons/gmail.png": "c927189e9e50b79af5f5f0a2c4ea146c",
"assets/assets/icons/lead.png": "e411cd8439c2843c35efb1197bb09553",
"assets/assets/icons/leads.png": "77be9b97f981b165d2bf07ace118e60a",
"assets/assets/icons/maestro.png": "d630bf17b36fc9d0dc2e716ce2d7426f",
"assets/assets/icons/more.png": "8a459c11c9e47d8ccb15dfc518b525e8",
"assets/assets/icons/new_lead.png": "dd22b9d5bab49b7eea5ae0f32157efc4",
"assets/assets/icons/partner.png": "b45c7c565d51ba94f36e43fe99b8e40d",
"assets/assets/icons/pass_due.png": "048b811cf6b4b7ec2bdc2180a5729209",
"assets/assets/icons/pin.png": "cb6f33a0cac8d6520726bb28f566cfd9",
"assets/assets/icons/profile.png": "42d7ff3970a4f5f7a06b57b627ac55e4",
"assets/assets/icons/report.png": "8b6248fe4772f73d52486d465dc34efc",
"assets/assets/icons/settings.png": "29dc1be75e4dd0c3bd4cc3e491db9f77",
"assets/assets/icons/tiktok.png": "723cb59f0b0d242933edf435a0a55167",
"assets/assets/icons/tiktok_Color.png": "7cb5d85a944b0797e98d4cb025c010e9",
"assets/assets/icons/toparrow.png": "6b3ff72a65a3ff151572b02be390ac78",
"assets/assets/icons/visa.jpg": "22f38e8d43d2c338fd67377d39d4b5e3",
"assets/assets/icons/whatapp%2520(1).png": "1eee29961c3c0a7da3bc850aec6187f1",
"assets/assets/icons/whatapp.jpg": "d15ad0b63ecb72b32463e936e795b171",
"assets/assets/icons/whatapp_logo.jpg": "76779b99b768cddf3d7b7aa77fc754cd",
"assets/assets/icons/whatsapp.png": "4ee43604ae31d2eb9538895e7942536d",
"assets/assets/icons/workspace.png": "9f94ab79cfe043c75a2820771e2021e5",
"assets/assets/icons/ZIEN_logo.png": "13e0007138eeaed7624065507e3d4832",
"assets/assets/profile/dp1.png": "8a630812ca3452184432920c20beb36f",
"assets/assets/profile/dp10.png": "d06da028a5bd88aebf47eee9763fd341",
"assets/assets/profile/dp2.png": "69185bd6a3d48044aff3204e3538ba0e",
"assets/assets/profile/dp3.jpg": "61c205888f8260d8bd5480fca022b949",
"assets/assets/profile/dp4.jpg": "4fd9da1de604e45d2fb3fd1c3c6e55d1",
"assets/assets/profile/dp5.png": "baa3ba7068eefa3a8056495e6915843d",
"assets/assets/profile/dp6.png": "f82f1b4c050f8baecacba91f3d6ac4a8",
"assets/assets/profile/dp7.jpg": "4ea4003b1f49ed084b2860a54fc2c84f",
"assets/assets/profile/dp8.png": "cdab27be5a6fac92bae78dd4a1337f8d",
"assets/assets/profile/dp9.png": "4103b95cd59f3c2d4121a204bd9c9eff",
"assets/FontManifest.json": "5958b7d6187401a3e330b3a441e4320b",
"assets/fonts/MaterialIcons-Regular.otf": "4605987c5154631164bbb519c3574fde",
"assets/NOTICES": "fafce507fb800a2d26e465ae9bf157d3",
"assets/packages/awesome_icons/fonts/Brands-Regular-400.otf": "b6eadee36948183e0753dd262df9d678",
"assets/packages/awesome_icons/fonts/Free-Regular-400.otf": "633868de8a2c3b1dd5c6c1df384777a8",
"assets/packages/awesome_icons/fonts/Free-Solid-900.otf": "68126a6648ba96530b402dd992c1feb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/simple_circular_progress_bar/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54d55bb1041ce4081f844a068d50cc19",
"/": "54d55bb1041ce4081f844a068d50cc19",
"main.dart.js": "fdc34c224a7953cb3654f036f45b790d",
"manifest.json": "e3246c845df828a985add4eb6d29e4be",
"version.json": "17ec11ef3e33d4edfd922f4fa8ae8193"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
