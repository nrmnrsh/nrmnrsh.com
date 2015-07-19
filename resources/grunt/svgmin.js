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
				cwd: path,
				src: ['**/*.svg'],
				dest: path
			});
		});

	grunt.config('svgmin', {
		all: {files: files}
	});

	grunt.loadNpmTasks('grunt-svgmin');
};
