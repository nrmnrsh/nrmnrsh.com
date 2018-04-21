module.exports = function(grunt) {

	grunt.config.merge({

		processhtml: {
			optimize: {
				files: [{
					cwd: '<%= settings.release.html %>',
					dest: '<%= settings.release.html %>',
					expand: true,
					flatten: false,
					src: ['**/*.html']
				}]
			}
		},

		imagemin: {
			optimize: {
				files: [{
					expand: true,
					cwd: '<%= settings.release.img %>',
					src: '**/*.{png,jpg,gif}',
					dest: '<%= settings.release.img %>'
				}]
			}
		},

		svgmin: {
			optimize: {
				files: [{
					expand: true,
					cwd: '<%= settings.release.img %>',
					src: '**/*.svg',
					dest: '<%= settings.release.img %>'
				}]
			}
		},

		htmlmin: {
			optimize: {
				files: [{
					expand: true,
					cwd: '<%= settings.release.html %>',
					src: '*.html',
					dest: '<%= settings.release.html %>'
				}],
				options: {
					removeComments: true,
					removeCommentsFromCDATA: true,
					removeCDATASectionsFromCDATA: true,
					collapseWhitespace: true,
					conservativeCollapse: false,
					preserveLineBreaks: false,
					collapseBooleanAttributes: true,
					removeAttributeQuotes: false,
					removeRedundantAttributes: true,
					preventAttributesEscaping: false,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					removeOptionalTags: false,
					removeIgnored: false,
					removeEmptyElements: true,
					lint: false,
					keepClosingSlash: true,
					caseSensitive: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: false,
					ignoreCustomComments: false,
					processScripts: false,
					maxLineLength: false,
					customAttrAssign: false,
					customAttrSurround: false,
					customAttrCollapse: false
				}
			}
		}

	});

};
