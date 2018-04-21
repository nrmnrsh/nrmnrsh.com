(function(src) {
	const
		doc = document,
		html = doc.documentElement,
		webp = new Image()
	;

	// Test for webp support:
	webp.onerror = () => html.classList.add('supports-no-webp');
	webp.onload = () => html.classList.add('supports-webp');
	webp.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';

	Promise.all([
		// (!!window.WeakMap || import('weakmap-polyfill')),
		// (!!window.Proxy || import('proxy-polyfill')),
		// (!!window.IntersectionObserver || import('intersection-observer')),
	]).then(() => {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.async = true;
		script.defer = true;
		script.src = src;
		script.onload = () => html.classList.add('is-ready');
		document.body.appendChild(script);
	});
})('/js/app.pkg.js');
