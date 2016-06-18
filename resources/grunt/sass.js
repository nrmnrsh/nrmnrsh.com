module.exports = function(grunt) {
	grunt.config('sass', {
		all: {
			options: {
				includePaths: [
					require('node-reset-scss').includePath
				]
			},
			files: {
				'release/styles/styles.css': 'sources/styles/styles.scss'
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
};
