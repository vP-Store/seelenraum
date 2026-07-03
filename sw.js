/* Seelenraum Service Worker — Offline-Fähigkeit & Installierbarkeit
   Hinweis: Bei jedem inhaltlichen Update der App die CACHE-Version
   erhöhen (z. B. v1 -> v2), damit Mitglieder die neue Version sehen. */
const CACHE = "seelenraum-v25";
const ASSETS = [
  "seelenraum-app.html",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Stale-while-revalidate: sofort aus dem Cache antworten,
   im Hintergrund frisch laden und Cache erneuern. */
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const live = fetch(e.request).then((res) => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || live;
    })
  );
});
