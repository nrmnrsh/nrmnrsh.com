module.exports = function(grunt) {
	grunt.config('site', {
		site: {
			options: {
				site: {},
				templates: 'templates',
				extend: {},
				marked: {},
				content: 'documents',
				defaultTemplate: 'base.html'
			},
			src: 'sources',
			dest: 'release'
		}
	});

	grunt.loadNpmTasks('grunt-site');
};
