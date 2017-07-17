module.exports = function(grunt) {

	grunt.config.merge({

		'watch': {
			options: {
				spawn: false
			},
			js: {
				files: ['<%= settings.sources.js %>**/*'],
				tasks: [
					'pluginbuilder:build',
					'concat:build'
				]
			},
			scss: {
				files: ['<%= settings.sources.scss %>**/*'],
				tasks: [
					'sass:build',
					'postcss:build'
				]
			},
			hbs: {
				files: ['<%= settings.sources.hbs %>**/*'],
				tasks: [
					'assemble:build'
				]
			}
		}

	});
};
