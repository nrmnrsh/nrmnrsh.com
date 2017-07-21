var
	path = require('path'),
	SystemJS = require('systemjs'),
	SystemJSHelper = require('./helpers/SystemJSHelper'),
	systemJSHelper = new SystemJSHelper(SystemJS),

	THUMBNAIL_MIN = 320,
	THUMBNAIL_MAX = 2000,
	THUMBNAIL_STEP = 100,
	THUMBNAIL_COUNT = Math.ceil((THUMBNAIL_MAX - THUMBNAIL_MIN) / THUMBNAIL_STEP) + 1
;


require(process.cwd() + '/config');


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

		pluginbuilder: {
			build: {
				options: {
					out: '../build/',
					builder: 'jspm',
					basePath: '<%= settings.sources.js %>Application.js'
				}
			}
		},

		modernizr: {
			build: {
				dest: '<%= settings.build.js %>modernizr.js',
				crawl: true,
				files: {
					src: [
						'<%= settings.sources.js %>**/*.js',
						'<%= settings.sources.scss %>**/*.scss'
					]
				},
				customTests: [],
				excludeTests: ['picture', 'svg'],
				tests: [],
				options: ['setClasses', 'html5shiv'],
				uglify: false
			}
		},

		concat: {
			build: {
				options: {
					sourceMap: true
				},
				files: (function() {
					var files = {};

					grunt.config.get('settings').lngs
						.forEach(function(lng) {
							var dest = grunt.template.process('<%= settings.release.js %>Application.' + lng + '.js');
							files[dest] = [
								'<%= settings.build.js %>modernizr.js',
								'<%= settings.sources.jspm %>system-polyfills.js',
								'<%= settings.sources.jspm %>system.js',
								'./config.js',
								path.join('.', systemJSHelper.resolve('i18next'), 'i18next.js'),
								path.join('.', systemJSHelper.resolve('picnic'), 'core/app/ApplicationRunner.js'),
								'<%= settings.build.i18n %>' + lng + '/i18n.js',
								'<%= settings.build.js %>Application.js'
							];
						});

					return files;
				})()
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

		sass: {
			build: {
				options: {
					sourceMap: true,
					outputStyle: 'compressed',
					includePaths: [
						require('node-reset-scss').includePath
					]
				},
				files: [{
					expand: true,
					cwd: 'sources/scss',
					src: ['*.scss','!_*.scss'],
					dest: '<%= settings.release.css %>',
					ext: '.css'
				}]
			}
		},

		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')({
						browsers: [
							'last 4 versions',
							'Explorer >= 10',
							'Android >= 4.1',
							'Safari >= 8',
							'iOS >= 7'
						]
					}),
					require('cssnano')({
						preset: 'default',
					})
				]
			},
			build: {
				expand: true,
				flatten: false,
				src: '<%= settings.release.css %>*.css'
			}
		},

		assemble: {
			build: {
				options: {
					assets: '<%= settings.release.html %>',
					data: ['<%= settings.sources.hbs %>/*.json'],
					layouts: ['<%= settings.sources.hbs %>layouts/*.hbs'],
					partials: ['<%= settings.sources.hbs %>partials/**/*.hbs'],
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
					cwd: '<%= settings.sources.hbs %>',
					dest: '<%= settings.release.html %>',
					expand: true,
					flatten: false,
					src: ['*.hbs']
				}]
			}
		},

		responsive_images: {
			build: {
				options: {
					upscale: false,
					sizes: Array
						.apply(null, {length: THUMBNAIL_COUNT})
						.map(function(item, index) {
							return {
								width: Math.max(
									Math.round(THUMBNAIL_MIN / THUMBNAIL_STEP + index) * THUMBNAIL_STEP,
									THUMBNAIL_MIN
								)
							};
						})
				},
				files: [{
					expand: true,
					src: ['**/*.{jpg,png}'],
					cwd: '<%= settings.sources.img %>',
					dest: '<%= settings.release.img %>'
				}]
			}
		}

	});

};
