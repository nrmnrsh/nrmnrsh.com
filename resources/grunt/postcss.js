module.exports = function(grunt) {
	grunt.config('postcss', {
		options: {
			processors: [
				require('autoprefixer')({browsers: 'last 2 versions'})
				// require('cssnano')()
			]
		},
		all: {
			src: 'release/**/*.css'
		}
	});

	grunt.loadNpmTasks('grunt-postcss');
};
