module.exports = function(grunt) {
	grunt.config('sass', {
		all: {
			files: {
				'release/styles/styles.css': 'sources/styles/styles.scss'
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
};
