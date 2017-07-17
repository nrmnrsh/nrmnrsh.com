var
	path = require('path'),
	Handlebars = require('handlebars'),

	TEMPLATE_I18NEXT = 'resources/grunt/templates/translation.js.hbs'
;


module.exports = function(grunt) {

	grunt.config.merge({
		i18next: {
			i18n:  {
				src: [
					'<%= files.sources.js %>**/*.{js,html}',
					'jspm_packages/github/moccu/picnic*/**/*.{js,html}'
				],
				dest: '<%= files.sources.i18n %>',
				options: {
					lngs: grunt.config.get('files').lngs,
					resource: {
						loadPath: '<%= files.sources.i18n %>{{lng}}/translation.json',
						savePath: '{{lng}}/translation.json',
					},
					func: {
						list: ['i18next.t', 'gettext'],
						extensions: ['.js', '.html']
					},
					removeUnusedKeys: true,
					nsSeparator: false,
					keySeparator: false
				}
			}
		}
	});

	grunt.task.registerTask('i18n2js', 'A simple task to wrap i18next json into js files including setup of i18next', function() {
		var
			template = Handlebars.compile(grunt.file.read(TEMPLATE_I18NEXT)),
			output = grunt.template.process('<%= files.build.i18n %>'),
			input = grunt.template.process('<%= files.sources.i18n %>*')
		;

		grunt.file.expand(input).forEach(function(dir) {
			var
				lng = path.basename(dir),
				src = path.join(dir, 'translation.json'),
				dest = path.join(output, lng, 'i18n.js'),
				translation = JSON.parse(grunt.file.read(src))
			;

			Object.keys(translation).forEach(function(key) {
				if (!translation[key]) {
					delete(translation[key]);
				}
			});

			grunt.log.writeln(src.white + ' → '.green + dest.white);
			grunt.file.write(dest, template({
				lng: lng,
				translation: JSON.stringify(translation)
			}));
		});
	});

};
