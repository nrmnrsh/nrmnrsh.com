module.exports = function(grunt) {
	grunt.config('shell', {
		clean: {
			command: [
				'rm -rf release',
				'mkdir release',
				'git clone git@github.com:nrmnrsh/nrmnrsh.com.git release'
			].join(' && ')
		},
		compass: {

		},
		release: {

		}
	});

	grunt.loadNpmTasks('grunt-shell');
};
