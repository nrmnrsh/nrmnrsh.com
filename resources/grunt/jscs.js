var
	sources = [
		'Gruntfile.js',
		'resources/grunt/**/*.js'
	]
;

module.exports = function(grunt) {
	grunt.config('jscs', {
		all: {
			src: sources,
			options: {
				config: '.jscs.json'
			}
		}
	});

	grunt.loadNpmTasks('grunt-jscs');
};
