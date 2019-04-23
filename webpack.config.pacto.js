const
	config = require('./webpack.config.js'),
	merge = require('webpack-merge'),
	path = require('path'),

	CopyWebpackPlugin = require('copy-webpack-plugin'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin')
;


module.exports = (env, argv) => {
	return merge(
		config.getGlobalSettings(env, argv),
		{
			entry: config.getEntries('./*.js', {
				ignore: ['./**/*.test.js'],
				cwd: './sources/js/'
			}),
			context: path.resolve(__dirname, 'sources', 'js'),
			output: {
				filename: `[name].pkg.js`,
				chunkFilename: `[name]-[chunkhash].js`,
				path: path.join(__dirname, 'web', 'js')
			},
			module: {
				rules: [{
					test: /\.js$/,
					use: [
						{loader: 'babel-loader'}
					]
				}]
			},
			resolve: {
				modules: [
					path.resolve(__dirname, 'sources', 'js'),
					path.resolve(__dirname, 'node_modules')
				]
			},
			devtool: config.isInProduction(env, argv) ? 'source-map' : 'inline-source-map',
			optimization: {
				minimizer: [
					new UglifyJsPlugin({
						sourceMap: true,
						uglifyOptions: {
							output: {
								comments: false
							}
						},
					}),
				],
			},
			plugins: [
				new CopyWebpackPlugin([
					{
						from: path.resolve(__dirname, 'node_modules/promise-polyfill/dist/polyfill.min.js'),
						to: 'polyfill-promise.js'
					}
				])
			]
		}
	);
};
