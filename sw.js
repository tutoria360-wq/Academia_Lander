// Service Worker mínimo — su única función es habilitar que Chrome/Android
// ofrezca "Instalar app". No cachea nada (siempre se conecta a internet para
// tomar los datos más recientes), así que no hay riesgo de que se quede
// mostrando información vieja.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Deja pasar todas las peticiones directo a la red, sin interceptar ni
  // cachear — el lector siempre necesita datos en vivo del Google Sheet.
  event.respondWith(fetch(event.request));
});
