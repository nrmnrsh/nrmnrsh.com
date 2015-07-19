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
			'lintspaces',
			'scsslint'
		]
	);

	grunt.registerTask(
		'test',
		'Run JavaScript tests.',
		[]
	);

	grunt.registerTask(
		'build',
		'Build all files for a deploy.',
		[
			'shell:clean',
			'markdown',
			'shell:compass',
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
			'bump',
			'shell:release'
		]
	);
};
