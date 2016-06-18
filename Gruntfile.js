module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
	});

	grunt.loadTasks('resources/grunt');

	grunt.registerTask(
		'validate',
		'Validate all files.',
		[
			'jshint',
			'jscs',
			'lintspaces'
		]
	);

	grunt.registerTask(
		'test',
		'Run JavaScript tests.',
		[]
	);

	grunt.registerTask(
		'build-fast',
		'Build all files for a deploy.',
		[
			'site',
			'sass',
			'postcss'
		]
	);

	grunt.registerTask(
		'build',
		'Build all files for a deploy.',
		[
			'shell:clean',
			'build-fast'
		]
	);

	grunt.registerTask(
		'optimize',
		'Optimze all files.',
		[
			'imagemin',
			'svgmin',
			'htmlmin'
		]
	);

	grunt.registerTask(
		'release',
		'Release a new update.',
		[
			'validate',
			'test',
			'build',
			'optimize',
			'shell:release'
		]
	);
};
