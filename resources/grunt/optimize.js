module.exports = function(grunt) {

	grunt.config.merge({

		imagemin: {
			optimize: {
				files: [{
					expand: true,
					cwd: '<%= files.release.img %>',
					src: '**/*.{png,jpg,gif}',
					dest: '<%= files.release.img %>'
				}]
			}
		},

		svgmin: {
			optimize: {
				files: [{
					expand: true,
					cwd: '<%= files.release.img %>',
					src: '**/*.svg',
					dest: '<%= files.release.img %>'
				}]
			}
		},

		htmlmin: {
			optimize: {
				files: [{
					expand: true,
					cwd: '<%= files.release.html %>',
					src: '*.html',
					dest: '<%= files.release.html %>'
				}],
				options: {
					//Strip HTML comments
					removeComments: true,

					// Strip HTML comments from scripts and styles
					removeCommentsFromCDATA: true,

					// Remove CDATA sections from script and style elements
					removeCDATASectionsFromCDATA: true,

					// Collapse white space that contributes to text nodes in a
					// document tree.
					collapseWhitespace: true,

					// Always collapse to 1 space (never remove it entirely). Must
					// be used in conjunction with collapseWhitespace=true
					conservativeCollapse: false,

					// Always collapse to 1 line break (never remove it entirely)
					// when whitespace between tags include a line break. Must be
					// used in conjunction with collapseWhitespace=true
					preserveLineBreaks: false,

					// Omit attribute values from boolean attributes
					collapseBooleanAttributes: true,

					// Remove quotes around attributes when possible.
					removeAttributeQuotes: false,

					// Remove attributes when value matches default.
					removeRedundantAttributes: true,

					// Prevents the escaping of the values of attributes.
					preventAttributesEscaping: false,

					// Replaces the doctype with the short (HTML5) doctype
					useShortDoctype: true,

					// Remove all attributes with whitespace-only values
					removeEmptyAttributes: true,

					// Remove type="text/javascript" from script tags. Other type
					// attribute values are left intact.
					removeScriptTypeAttributes: true,

					// Remove type="text/css" from style and link tags. Other type
					// attribute values are left intact.
					removeStyleLinkTypeAttributes: true,

					// Remove unrequired tags
					removeOptionalTags: false,

					// Remove all tags starting and ending with <%, %>, <?, ?>
					removeIgnored: false,

					// Remove all elements with empty contents
					removeEmptyElements: true,

					// Toggle linting
					lint: false,

					// Keep the trailing slash on singleton elements
					keepClosingSlash: true,

					// Treat attributes in case sensitive manner
					// (useful for custom HTML tags.)
					caseSensitive: true,

					// Minify Javascript in script elements and on* attributes
					// (uses UglifyJS)
					minifyJS: true,

					// Minify CSS in style elements and style attributes
					// (uses clean-css)
					minifyCSS: true,

					// Minify URLs in various attributes (uses relateurl)
					minifyURLs: false,

					// Array of regex'es that allow to ignore certain comments, when matched	[ ]
					ignoreCustomComments: false,

					// Array of strings corresponding to types of script elements to process through minifier (e.g. text/ng-template, text/x-handlebars-template, etc.)	[ ]
					processScripts: false,

					// Specify a maximum line length. Compressed output will be split by newlines at valid HTML split-points.
					maxLineLength: false,

					// Arrays of regex'es that allow to support custom attribute assign expressions (e.g. '<div flex?="{{mode != cover}}"></div>')	[ ]
					customAttrAssign: false,

					// Arrays of regex'es that allow to support custom attribute surround expressions (e.g. <input {{#if value}}checked="checked"{{/if}}>)	[ ]
					customAttrSurround: false,

					// Regex that specifies custom attribute to strip newlines from (e.g. /ng\-class/)
					customAttrCollapse: false
				}
			}
		}

	});

};
