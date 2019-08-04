importScripts('https://storage.googleapis.com/workbox-cdn/releases/__workbox_version__/workbox-sw.js');


var
	CACHE_PREFIX = 'nrmnrsh.com::',
	CACHE_PRECACHE = CACHE_PREFIX + 'cache-precache'
;


workbox.precaching.precacheAndRoute([], {cacheName: CACHE_PRECACHE});
