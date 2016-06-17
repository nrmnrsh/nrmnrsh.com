var
	sources = [
		'sources/**/*'
	]
;

module.exports = function(grunt) {
	grunt.config('watch', {
		all: {
			files: sources,
			tasks: ['build-fast'],
			options: {
				spawn: false,
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
