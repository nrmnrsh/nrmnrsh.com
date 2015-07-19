var
	sources = [
		'Gruntfile.js',
		'resources/grunt/**/*.js'
	]
;

module.exports = function(grunt) {
	grunt.config('jshint', {
		all: {
			src: sources,
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
};
