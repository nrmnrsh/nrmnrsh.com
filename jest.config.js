module.exports = {
	collectCoverage: true,
	coverageDirectory: './coverage/',
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/__fixtures__/'
	],
	moduleDirectories: [
		'node_modules',
		'src/js'
	],
	setupFiles: [
		'jest-date-mock'
	]
};
