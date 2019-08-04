const Handlebars = require('handlebars');
const slugify = require('helper-slugify');


module.exports = {
	fallback: (value, alternative) =>
		typeof value === 'undefined' ?
			alternative :
			value,

	schema: (schemas, str) => {
		str = str || '';
		Object.keys(schemas || {}).forEach((prop) => {
			str = str.replace(schemas[prop], `<span itemprop="${prop}">${schemas[prop]}</span>`);
		});

		return new Handlebars.SafeString(str);
	},

	linkify: (links, str) => {
		str = str || '';
		Object.keys(links || {}).forEach((prop) => {
			var isExternal = /^https?:\/\//.test(prop);
			str = str.replace(links[prop], `<a href="${prop}" title="Open ${links[prop]}" ${isExternal ? 'rel="noopener noreferrer" target="_blank"' : 'target="_self"'}>${links[prop]}</a>`);
		});

		return new Handlebars.SafeString(str);
	},

	slugify: (str) => slugify(str),

	year: () => (new Date()).getFullYear(),

	datetime: () => (new Date()).toISOString()
};
