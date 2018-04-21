module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt, {
		pattern: [
			'grunt-*',
			'!grunt-assemble-sitemap',
		]
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		settings: grunt.file.readJSON('resources/grunt/settings/settings.json')
	});

	// Load grunt configurations:
	grunt.loadTasks('resources/grunt');

	grunt.registerTask('optimize', [
		'processhtml:optimize',
		'imagemin:optimize',
		'svgmin:optimize',
		'htmlmin:optimize'
	]);

	grunt.registerTask('build', [
		'clean:build',
		'webfont:build',
		'assemble:*',
		'copy:build'
	]);

	grunt.registerTask('release', [
		'gh-pages:release'
	]);
};
