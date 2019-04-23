const
	config = require('./webpack.config.js'),
	merge = require('webpack-merge'),
	path = require('path'),

	AssembleWebpack = require('assemble-webpack')
;


module.exports = (env, argv) => {
	return merge(
		config.getGlobalSettings(env, argv),
		{
			entry: config.getEntries('./*.hbs', {
				cwd: './sources/hbs/pages/'
			}),
			context: path.resolve(__dirname, 'sources', 'hbs', 'pages'),
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
					baseLayout: ['./sources/hbs/layouts/**/*.hbs'],
					basePages: ['./sources/hbs/pages/**/*hbs'],
					partialsLayout: ['./sources/hbs/partials/**/*.hbs'],
					partialsData: ['./sources/hbs/data/**/*.json'],
					helpers: ['./sources/hbs/helpers/*.js']
				})
			]
		}
	);
};
