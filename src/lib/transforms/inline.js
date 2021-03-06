const { inlineSource } = require('inline-source');

module.exports = ({ rootpath }) => async (content, target) => {
	if (!String(target).endsWith('.html')) {
		return content;
	}

	return await inlineSource(content, { rootpath, compress: true });
};
