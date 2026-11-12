// BAOS 공정 CHECKER - 오프라인 캐시 (Service Worker)
// 새 버전을 올릴 때 CACHE 이름의 버전을 함께 올리면 작업자 화면이 빨리 갱신됩니다.
const CACHE = 'baos-suite-v2.0.1';
const SHELL = ['./', 'index.html', 'cut.html', 'ratio.html', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/favicon-32.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // 화면(HTML)은 항상 최신 버전을 먼저 시도하고, 인터넷이 없으면 저장된 화면을 씁니다.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
      .catch(() => caches.match(req, {ignoreSearch: true}).then(hit => hit || caches.match('index.html'))));
    return;
  }
  // 그 밖의 파일(아이콘, 설명서 PDF 등)은 저장된 것을 먼저 쓰고, 없으면 받아서 저장합니다.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return r;
  })));
});
