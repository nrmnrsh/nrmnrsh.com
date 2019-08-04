// https://developers.google.com/web/tools/workbox/modules/workbox-cli
module.exports = {
	swSrc: './src/js/components/serviceworker/sw.js',
	swDest: './web/sw.js',
	globDirectory: './web',
	globPatterns: [
		'js/**/*.pkg.js',
		'css/**/*.{css,woff2,webp}',
		'index.html'
	],
	globIgnores: [
		'js/critical.pkg.js'
	]
};
