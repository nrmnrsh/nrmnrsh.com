const
	autoprefixer = require('autoprefixer'),
	config = require('./webpack.config.js'),
	cssnano = require('cssnano'),
	path = require('path'),
	webpackMerge = require('webpack-merge'),

	ExtractTextPlugin = require('extract-text-webpack-plugin')
;


module.exports = (env, argv) => {
	return webpackMerge.merge(
		config.getGlobalSettings(env, argv),
		{
			entry: config.getEntries('./**/*.scss', {
				ignore: ['./**/_*.scss'],
				cwd: './src/scss/'
			}),
			context: path.resolve(__dirname, 'src', 'scss'),
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
								name: '[name].[ext]',
								esModule: false
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
