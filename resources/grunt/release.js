module.exports = function(grunt) {

	grunt.config.merge({

		'gh-pages': {
			release: {
				options: {
					base: 'release',
				},
				src: ['**']
			}
		}

	});
};
