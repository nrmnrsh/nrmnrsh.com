var
	sources = [
		'sources/documents/**/*.md'
	]
;

module.exports = function(grunt) {
	grunt.config('markdown', {
		all: {
			files: [{
				expand: true,
				src: sources,
				flatten: true,
				dest: 'release/',
				ext: '.html'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-markdown');
};
