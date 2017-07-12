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
			build: ['<%= files.release.base %>*']
		},

		copy: {
			build: {
				files: [
					{
						expand: true,
						src: '**/*',
						cwd: '<%- files.sources.img %>',
						dest: '<%- files.release.img %>'
					}
				]
			}
		},

		pluginbuilder: {
			build: {
				options: {
					out: '../build/',
					builder: 'jspm',
					basePath: '<%= files.sources.js %>Application.js'
				}
			}
		},

		modernizr: {
			build: {
				dest: '<%= files.build.js %>modernizr.js',
				crawl: true,
				files: {
					src: [
						'<%= files.sources.js %>**/*.js',
						'<%= files.sources.scss %>**/*.scss'
					]
				},
				customTests: [],
				excludeTests: ['picture', 'svg'],
				tests: [],
				options: ['setClasses', 'html5shiv'],
				uglify: false
			}
		},

		uglify: {
			build: {
				options: {
					mangle: true,
					compress: true,
					report: 'gzip',
					sourceMap: true,
					preserveComments: false,
					quoteStyle: 1
				},
				files: grunt.file.expand(grunt.template.process('<%= files.sources.i18n %>*'))
					.map(function(dir) {
						var lng = path.basename(dir);

						return {
							src: [
								'<%= files.build.js %>modernizr.js',
								'<%= files.sources.jspm %>system-polyfills.js',
								'<%= files.sources.jspm %>system.js',
								'./config.js',
								path.join('.', systemJSHelper.resolve('i18next'), 'i18next.js'),
								path.join('.', systemJSHelper.resolve('picnic'), 'core/app/ApplicationRunner.js'),
								'<%= files.build.i18n %>' + lng + '/i18n.js',
								'<%= files.build.js %>Application.js'
							],
							dest: '<%= files.release.js %>Application.' + lng + '.min.js'
						};
					})
			}
		},

		webfont: {
			build: {
				src: 'resources/icons/*.svg',
				dest: '<%= files.release.fonts %>',
				destCss: '<%= files.sources.scss %>settings/',
				options: {
					fontBaseName: 'icons',
					template: 'resources/grunt/templates/icons.tmpl',
					stylesheet: 'scss',
					types: 'woff2,woff',
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
					dest: '<%= files.release.css %>',
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
				src: '<%= files.release.css %>*.css'
			}
		},

		assemble: {
			build: {
				options: {
					data: ['<%= files.sources.hbs %>/*.json'],
					partials: ['<%= files.sources.hbs %>partials/**/*.hbs'],
					layouts: ['<%= files.sources.hbs %>layouts/*.hbs']
				},
				files: [{
					cwd: '<%= files.sources.hbs %>',
					dest: '<%= files.release.html %>',
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
					cwd: '<%= files.sources.img %>',
					dest: '<%= files.release.img %>'
				}]
			}
		}

	});

};
