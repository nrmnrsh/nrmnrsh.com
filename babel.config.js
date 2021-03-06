module.exports = {
	presets: [
		'@babel/preset-env'
	],
	plugins: [
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-transform-spread'
	],
	env: {
		test: {
			plugins: [
				'@babel/plugin-transform-runtime',
				'dynamic-import-node'
			]
		}
	}
};
