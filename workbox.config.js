// https://developers.google.com/web/tools/workbox/modules/workbox-cli
module.exports = {
	swSrc: './src/js/components/serviceworker/sw.js',
	swDest: './web/sw.js',
	globDirectory: './web',
	globPatterns: [
		'js/**/*.pkg-*.js',
		'css/**/*.{woff2,webp}',
		'css/**/*-*.css'
	],
	globIgnores: [
		// 'js/critical.pkg.js'
	]
};
