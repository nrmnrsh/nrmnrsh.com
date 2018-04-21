module.exports = function(grunt) {

	grunt.config.merge({

		clean: {
			build: ['<%= settings.release.base %>*']
		},

		copy: {
			build: {
				files: [
					{
						expand: true,
						src: '**/*',
						cwd: '<%= settings.sources.img %>',
						dest: '<%= settings.release.img %>'
					},
					{
						expand: true,
						src: '**/*',
						cwd: '<%= settings.sources.fonts %>',
						dest: '<%= settings.release.fonts %>'
					}
				]
			}
		},

		webfont: {
			build: {
				src: 'resources/icons/*.svg',
				dest: '<%= settings.release.fonts %>',
				destCss: '<%= settings.sources.scss %>settings/',
				options: {
					fontBaseName: 'icons',
					template: 'resources/grunt/templates/icons.tmpl',
					stylesheet: 'scss',
					types: 'woff',
					htmlDemo: false,
					templateOptions: {
						baseClass: 'icon',
						classPrefix: null
					}
				}
			}
		},

		assemble: {
			options: {
				assets: '<%= settings.release.html %>',
				data: '<%= settings.sources.hbs %>/**/*.yml',
				helpers: '<%= settings.sources.hbs %>helpers/*.js',
				layoutdir: '<%= settings.sources.hbs %>layouts/',
				partials: '<%= settings.sources.hbs %>partials/**/*.hbs',
				pathToRoot: '<%= settings.release.html %>'
			},
			build: {
				options: {
					plugins: [
						'grunt-assemble-sitemap'
					],
					sitemap: {
						priority: 1,
						pretty: true,
						relativedest: true
					}
				},
				files: [{
					cwd: '<%= settings.sources.hbs %>pages/',
					dest: '<%= settings.release.html %>',
					expand: true,
					flatten: false,
					src: ['**/*.hbs']
				}]
			},
			buildxml: {
				options: {
					ext: '.xml'
				},
				files: [{
					cwd: '<%= settings.sources.hbs %>pages/',
					dest: '<%= settings.release.html %>',
					expand: true,
					flatten: false,
					src: ['*.xml']
				}]
			},
			buildwebmanifest: {
				options: {
					ext: '.webmanifest'
				},
				files: [{
					cwd: '<%= settings.sources.hbs %>pages/',
					dest: '<%= settings.release.html %>',
					expand: true,
					flatten: false,
					src: ['*.webmanifest']
				}]
			}
		}

	});

};
