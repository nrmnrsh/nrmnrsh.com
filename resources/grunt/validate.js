module.exports = function(grunt) {

	grunt.config.merge({

		jshint: {
			validate: {
				src: [
					'<%= settings.sources.js %>**/*.js',
					'<%= settings.sources.hbs %>**/*.js',
					'<%= settings.tests.js %>**/*.js'
				],
				options: {
					jshintrc: '.jshintrc'
				}
			}
		},

		jscs: {
			validate: {
				src: [
					'<%= settings.sources.js %>**/*.js',
					'<%= settings.sources.hbs %>**/*.js',
					'<%= settings.tests.js %>**/*.js'
				],
				options: {
					config: '.jscs.json'
				}
			}
		},

		lintspaces: {
			validate: {
				src: [
					'<%= settings.sources.hbs %>**/*.hbs',
					'<%= settings.sources.hbs %>**/*.js',
					'<%= settings.sources.scss %>**/*.scss',
					'<%= settings.sources.js %>**/*.html',
					'<%= settings.sources.js %>**/*.js',
					'<%= settings.tests.js %>**/*.html',
					'<%= settings.tests.js %>**/*.js',
				],
				options: {
					rcconfig: true
				}
			}
		},

		sasslint: {
			validate: {
				src: [
					'<%= settings.sources.scss %>**/*.scss'
				],
				options: {
					configFile: '.sass-lint.yml'
				}
			}
		}

	});
};
