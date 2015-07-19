var
	sources =  [
		'release/'
	]
;

module.exports = function(grunt) {
	var files = [];

	grunt.file
		.expand(sources)
		.map(function(path) {
			files.push({
				expand: true,
				pngquant: false,
				cwd: path,
				src: ['**/*.{png,jpg,gif}'],
				dest: path
			});
		});

	grunt.config('imagemin', {
		all: {files: files}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
};
