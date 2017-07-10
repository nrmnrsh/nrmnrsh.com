var
	QUnitReporter = require('./helpers/QUnitReporter')
;


module.exports = function(grunt) {

	// Add new qunit reporter...
	new QUnitReporter(grunt);

	grunt.config.merge({

		writefile: {
			test: {
				options: {
					data: {
						tests: function() {
							return grunt.file
								.expand(grunt.template.process('<%= files.tests.js %>**/*.js'))
								.map(function(path) {
									return path.replace(/\.js$/, '');
								});
						}
					}
				},
				files: [{
					expand: false,
					src: 'resources/grunt/templates/testrunner.html.hbs',
					dest: '.grunt/testrunner.html'
				}]
			}
		},

		connect: {
			test: {
				options: {
					port: 9000,
					hostname: '127.0.0.1',
					base: '.'
				}
			}
		},

		qunit: {
			test: {
				options: {
					timeout: 10000,
					console: true,
					urls: [
						'http://127.0.0.1:9000/.grunt/testrunner.html'
					]
				}
			}
		}

	});
};
