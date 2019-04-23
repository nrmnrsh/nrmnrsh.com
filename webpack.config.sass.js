const
	autoprefixer = require('autoprefixer'),
	config = require('./webpack.config.js'),
	cssnano = require('cssnano'),
	merge = require('webpack-merge'),
	path = require('path'),

	ExtractTextPlugin = require('extract-text-webpack-plugin')
;


module.exports = (env, argv) => {
	return merge(
		config.getGlobalSettings(env, argv),
		{
			entry: config.getEntries('./**/*.scss', {
				ignore: ['./**/_*.scss'],
				cwd: './sources/scss/'
			}),
			context: path.resolve(__dirname, 'sources', 'scss'),
			output: {
				filename: '[name].css',
				path: path.join(__dirname, 'web', 'css')
			},
			module: {
				rules: [{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({use: [
						{loader: 'css-loader'},
						{loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: [
									autoprefixer(),
									cssnano()
								]
							}
						},
						{loader: 'sass-loader'}
					]})
				}, {
					test: /\.jpg|\.png|\.webp|\.woff|\.woff2$/,
					use: [
						{loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						}
					]
				}]
			},
			plugins: [
				new ExtractTextPlugin({
					filename: '[name].css',
					allChunks: true
				})
			]
		}
	);
};
