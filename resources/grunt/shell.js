module.exports = function(grunt) {
	grunt.config('shell', {
		clean: {
			command: [
				'rm -rf release',
				'mkdir release',
				'git clone git@github.com:nrmnrsh/nrmnrsh.com.git release',
				'cd release',
				'git checkout gh-pages'
			].join(' && ')
		},
		release: {
			command: [
				'cd ' + process.cwd() + '/release',
				'git add .',
				'git commit -m "Update gh-pages to latest version"',
				'git push'
			].join(' && ')
		}
	});

	grunt.loadNpmTasks('grunt-shell');
};
