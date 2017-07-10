module.exports = function(grunt) {

	grunt.config.merge({

		jshint: {
			validate: {
				src: [
					'<%= files.sources.js %>**/*.js',
					'<%= files.tests.js %>**/*.js'
				],
				options: {
					jshintrc: '.jshintrc'
				}
			}
		},

		jscs: {
			validate: {
				src: [
					'<%= files.sources.js %>**/*.js',
					'<%= files.tests.js %>**/*.js'
				],
				options: {
					config: '.jscs.json'
				}
			}
		},

		lintspaces: {
			validate: {
				src: [
					'<%= files.sources.hbs %>**/*.hbs',
					'<%= files.sources.scss %>**/*.scss',
					'<%= files.sources.js %>**/*.html',
					'<%= files.sources.js %>**/*.js',
					'<%= files.tests.js %>**/*.html',
					'<%= files.tests.js %>**/*.js',
				],
				options: {
					rcconfig: true
				}
			}
		},

		sasslint: {
			validate: {
				src: [
					'<%= files.sources.scss %>**/*.scss'
				],
				options: {
					configFile: '.sass-lint.yml'
				}
			}
		}

	});
};
