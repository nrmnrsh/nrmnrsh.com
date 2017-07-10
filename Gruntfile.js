module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		files: grunt.file.readJSON('resources/grunt/settings/files.json')
	});

	// This grunt task needs to be loaded directly because the npm module name
	// differs from the config name. So it can't be loaded via jit-grunt.
	grunt.loadNpmTasks('i18next-scanner');

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
		'uglify:build',

		// Stylesheets
		'webfont:build',
		'sass:build',
		'postcss:build',

		// Templates
		'assemble:build',

		// Optimizations
		'optimize'
	]);

	grunt.registerTask('release', [
		'validate',
		'test',
		'build',
		'gh-pages:release'
	]);
};
