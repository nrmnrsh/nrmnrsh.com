module.exports = function(grunt) {

	grunt.config.merge({

		'watch': {
			hbs: {
				files: ['<%= settings.sources.hbs %>**/*'],
				tasks: [
					'assemble:build'
				]
			}
		}

	});
};
