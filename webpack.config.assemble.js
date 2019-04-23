const
	config = require('./webpack.config.js'),
	merge = require('webpack-merge'),
	path = require('path'),

	AssembleWebpack = require('assemble-webpack'),
	CopyWebpackPlugin = require('copy-webpack-plugin')
;


module.exports = (env, argv) => {
	return merge(
		config.getGlobalSettings(env, argv),
		{
			entry: config.getEntries('./*.hbs', {
				cwd: './src/hbs/pages/'
			}),
			context: path.resolve(__dirname, 'src', 'hbs', 'pages'),
			output: {
				filename: '[name].html',
				path: path.join(__dirname, 'web')
			},
			module: {
				rules: [{
					test: /\.hbs$/,
					use: [
						{loader: 'assemble-webpack'}
					]
				}]
			},
			plugins: [
				new AssembleWebpack.AttachedPlugin({
					baseLayout: ['./src/hbs/layouts/**/*.hbs'],
					basePages: ['./src/hbs/pages/**/*hbs'],
					partialsLayout: ['./src/hbs/partials/**/*.hbs'],
					partialsData: ['./src/hbs/data/**/*.json'],
					helpers: ['./src/hbs/helpers/*.js']
				}),
				new CopyWebpackPlugin([
					{
						from: path.resolve(__dirname, 'src', 'img'),
						to: 'img/'
					}
				])
			]
		}
	);
};
