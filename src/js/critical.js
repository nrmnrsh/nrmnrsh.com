var
	win = window,
	doc = document,
	app = win.app,
	staticUrl = __webpack_public_path__ = app.static_url, // eslint-disable-line no-undef
	html = doc.documentElement
;

// Apply classname for available javascript
html.classList.remove('no-js');
html.classList.add('js');

// Test for webp support:
const webp = new Image();
webp.onerror = () => html.classList.add('supports-no-webp');
webp.onload = () => html.classList.add('supports-webp');
webp.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';

addPromisePolyfill(function() {
	addFrameworkPolyfills(function() {
		injectScript(app.script_url, function() {
			html.classList.add('is-ready');
		});
	});
});


// Helper to load a script using given source and continue using a callback.
function injectScript(src, callback) {
	var script = doc.createElement('script');
	script.type = 'text/javascript';
	script.charset = 'utf-8';
	script.async = true;
	script.defer = true;
	script.src = src;
	script.onload = callback || null;
	doc.body.appendChild(script);
}


// Test support of promises which is required by webpack. IE11 doesn't support
// promises. So we load a polyfill for promises without using dynamic imports
// (returns promise). A webpack copy task moves the promise-polyfill from
// node_modules into the build directory.
function addPromisePolyfill(callback) {
	return win.Promise ?
		callback() :
		injectScript(staticUrl + 'polyfill-promise.js', callback);
}


// Helper to fetch all other required polyfills using promises.
function addFrameworkPolyfills(callback) {
	Promise.all([
		(!!window.WeakMap || import(/* webpackChunkName: "polyfill-weakmap" */ 'weakmap-polyfill')),
		(!!window.IntersectionObserver || import(/* webpackChunkName: "polyfill-intersectionobserver" */ 'intersection-observer'))
	]).then(callback);
}
