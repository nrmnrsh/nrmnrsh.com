const dateFilter = require('./src/lib/filter/date');
const datetimeFilter = require('./src/lib/filter/datetime');
const fullyearFilter = require('./src/lib/filter/fullyear');

const fallbackShortcode = require('./src/lib/shortcodes/fallback');
const linkifyShortcode = require('./src/lib/shortcodes/linkify');
const schemaShortcode = require('./src/lib/shortcodes/schema');
const staticShortcode = require('./src/lib/shortcodes/static');

const htmlminTransform = require('./src/lib/transforms/htmlmin');
const inlineTransform = require('./src/lib/transforms/inline');

const ROOT_PATH = `${__dirname}/web`;

module.exports = (config) => {
	config.setUseGitIgnore(false);
	config.addWatchTarget('./web/js');
	config.addWatchTarget('./web/css');
	config.setTemplateFormats(['njk']);
	config.addPassthroughCopy({'./src/img/': 'img'});
	config.addPassthroughCopy({'./src/img/meta/favicon.ico': 'favicon.ico'});

	// Transforms for production:
	if (process.env.NODE_ENV === 'production') {
		config.addTransform('inline', inlineTransform({ rootpath: ROOT_PATH }));
		config.addTransform('htmlmin', htmlminTransform({
			collapseWhitespace: true,
			removeComments: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeTagWhitespace: true,
			useShortDoctype: true,
			minifyCSS: true,
			minifyJS: true
		}));
	}

	// Short codes:
	config.addNunjucksShortcode('fallback', fallbackShortcode());
	config.addNunjucksShortcode('linkify', linkifyShortcode());
	config.addNunjucksShortcode('schema', schemaShortcode());
	config.addNunjucksAsyncShortcode('static', staticShortcode({ rootpath: ROOT_PATH }));

	// Filter:
	config.addNunjucksFilter('date', dateFilter());
	config.addNunjucksFilter('datetime', datetimeFilter());
	config.addNunjucksFilter('fullyear', fullyearFilter());

	return {
		dir: {
			input: 'src/templates',
			output: 'web'
		}
	}
};
