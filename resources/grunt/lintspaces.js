var
	sources = [
		'Gruntfile.js',
		'README.md',
		'resources/grunt/**/*.js'
	]
;

module.exports = function(grunt) {
	grunt.config('lintspaces', {
		all: {
			src: sources,
			options: {
				editorconfig: '.editorconfig',
				newlineMaximum: 2,
				ignores: ['js-comments'],
				junit: '.grunt/tests/LINTSPACES.xml'
			}
		}
	});

	grunt.loadNpmTasks('grunt-lintspaces');
};
