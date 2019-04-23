const
	glob = require('glob'),
	path = require('path')
;


/* Loads and returns all webpack configs from the project root */
module.exports = (env, argv) => {
	var configs = [];
	glob.sync('./webpack.config.*.js').forEach((config) => {
		config = require(config)(env, argv);
		if (Array.isArray(config)) {
			configs = configs.concat(config);
		} else {
			configs.push(config);
		}
	});

	return configs;
};


/* Returns if the current mode is 'production' */
module.exports.isInProduction = (env, argv) =>
	(argv.mode === 'production');


/* Retuns the project webpack defaults */
module.exports.getGlobalSettings = (env, argv) =>
	({
		mode: argv.mode || 'development',
		watch: !module.exports.isInProduction(env, argv),
		stats: {
			modules: module.exports.isInProduction(env, argv),
			children: module.exports.isInProduction(env, argv)
		}
	});


/** Helper to grab multiple entries. */
module.exports.getEntries = (files, options) =>
	glob.sync(files, options)
		.reduce((entries, file) => {
			const
				extension = path.extname(file),
				name = file.replace(extension, '')
			;

			entries[name] = file;
			return entries;
		}, {});
