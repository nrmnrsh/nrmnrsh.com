module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt, {
		pattern: [
			'grunt-*',
			'i18next-scanner',
			'!grunt-assemble-sitemap',
		]
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		settings: grunt.file.readJSON('resources/grunt/settings/settings.json')
	});

	// Load grunt configurations:
	grunt.loadTasks('resources/grunt');

	grunt.registerTask('validate', [
		'jshint:validate',
		'jscs:validate',
		'lintspaces:validate',
		'sasslint:validate'
	]);

	grunt.registerTask('test', [
		'writefile:test',
		'connect:test',
		'qunit:test'
	]);

	grunt.registerTask('i18n',[
		'i18next:i18n',
		'i18n2js'
	]);

	grunt.registerTask('optimize', [
		'uglify:optimize',
		'imagemin:optimize',
		'svgmin:optimize',
		'htmlmin:optimize'
	]);

	grunt.registerTask('build', [
		'clean:build',

		// Translations:
		'i18n',

		// Javascript
		'pluginbuilder:build',
		'modernizr:build',
		'concat:build',

		// Stylesheets
		'webfont:build',
		'sass:build',
		'postcss:build',

		// Templates
		'assemble:*',

		// Assets like images etc.
		'copy:build'
		//'responsive_images:build'
	]);

	grunt.registerTask('release', [
		'validate',
		'test',
		'build',
		'optimize',
		'gh-pages:release'
	]);
};
