const { minify } = require('html-minifier');

module.exports = (options) => async (content, target) => {
	if (!String(target).endsWith('.html')) {
		return content;
	}

	return minify(content, options);
};
