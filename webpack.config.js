const
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	glob = require('glob'),
	merge = require('webpack-merge'),
	path = require('path'),

	ExtractTextPlugin = require('extract-text-webpack-plugin')
;


/**
 * Helper to grab multiple entries.
 */
function entries(files, extension, ignore = []) {
	return glob.sync(files, {ignore})
		.reduce((entries, file) => {
			const name = path.basename(file, extension);
			entries[name] = file;
			return entries;
		}, {});
}


module.exports = (env, argv) => {
	const
		COMMON = {
			mode: argv.mode || 'development',
			watch: !argv.mode,
			stats: {
				modules: false,
				children: false
			}
		},
		JAVASCRIPT = {
			entry: entries('./sources/js/*.js', '.js', ['./sources/js/*.test.js']),
			output: {
				filename: '[name].pkg.js',
				path: path.join(__dirname, 'release', 'js'),
				chunkFilename: '[name]-[chunkhash].js',
				publicPath: './js/'
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
			}
		},
		STYLESHEET = {
			entry: entries('./sources/scss/*.scss', '.scss', ['./sources/scss/_*.scss']),
			output: {
				filename: '[name].css',
				path: path.join(__dirname, 'release', 'css'),
			},
			module: {
				rules: [{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({use: [
						{loader: 'css-loader'},
						{loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: [autoprefixer, cssnano]
							}
						},
						{loader: 'sass-loader'}
					]})
				}, {
					test: /\.woff|\.woff2|\.jpg|\.webp$/,
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
	;

	return [
		merge(COMMON, JAVASCRIPT),
		merge(COMMON, STYLESHEET)
	];
};
