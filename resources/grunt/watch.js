module.exports = function(grunt) {

	grunt.config.merge({

		'watch': {
			options: {
				spawn: false
			},
			js: {
				files: ['<%= files.sources.js %>**/*'],
				tasks: [
					'pluginbuilder:build',
					'concat:build'
				]
			},
			scss: {
				files: ['<%= files.sources.scss %>**/*'],
				tasks: [
					'sass:build',
					'postcss:build'
				]
			},
			hbs: {
				files: ['<%= files.sources.hbs %>**/*'],
				tasks: [
					'assemble:build'
				]
			}
		}

	});
};
