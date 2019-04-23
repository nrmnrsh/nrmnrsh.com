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

	slugify: (str) => slugify(str),

	year: () => (new Date()).getFullYear(),

	datetime: () => (new Date()).toISOString()
};
