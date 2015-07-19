var
	sources = []
;

module.exports = function(grunt) {
	grunt.config('scsslint', {
		all: {
			src: sources,
			options: {
				configuration: '.scss-lint.yml'
			}
		}
	});

	grunt.loadNpmTasks('grunt-scsslint');
};
