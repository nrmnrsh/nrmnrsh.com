const dateFilter = require('./src/lib/filter/date');
const datetimeFilter = require('./src/lib/filter/datetime');
const yearFilter = require('./src/lib/filter/year');

const fallbackShortcode = require('./src/lib/shortcodes/fallback');
const linkifyShortcode = require('./src/lib/shortcodes/linkify');
const schemaShortcode = require('./src/lib/shortcodes/schema');
const staticShortcode = require('./src/lib/shortcodes/static');

const htmlminTransform = require('./src/lib/transforms/htmlmin');
const inlineTransform = require('./src/lib/transforms/inline');

const ROOT_PATH = `${__dirname}/web`;

module.exports = (config) => {
	config.setTemplateFormats(['njk']);
	config.addPassthroughCopy({'./src/img/': 'img'});
	config.addPassthroughCopy({'./src/img/meta/favicon.ico': 'favicon.ico'});
	config.addWatchTarget('./web/js/critical.pkg.js');

	// Transforms:
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

	// Short codes:
	config.addNunjucksShortcode('fallback', fallbackShortcode());
	config.addNunjucksShortcode('linkify', linkifyShortcode());
	config.addNunjucksShortcode('schema', schemaShortcode());
	config.addNunjucksAsyncShortcode('static', staticShortcode({ rootpath: ROOT_PATH }));

	// Filter:
	config.addNunjucksFilter('date', dateFilter());
	config.addNunjucksFilter('datetime', datetimeFilter());
	config.addNunjucksFilter('fullyear', yearFilter());

	return {
		dir: {
			input: 'src/templates',
			output: 'web'
		}
	}
};
