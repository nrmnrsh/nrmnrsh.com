importScripts('https://storage.googleapis.com/workbox-cdn/releases/__workbox_version__/workbox-sw.js');


var
	CACHE_PREFIX = 'nrmnrsh.com::',
	CACHE_VERSION = '2',
	CACHE_POSTFIX = '::cache-precache',
	CACHE_PRECACHE = CACHE_PREFIX + CACHE_VERSION + CACHE_POSTFIX
;


workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {cacheName: CACHE_PRECACHE});
