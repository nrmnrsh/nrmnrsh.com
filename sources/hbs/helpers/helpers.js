const Handlebars = require('handlebars');
const slugify = require('helper-slugify');


module.exports.fallback = (value, alternative) =>
	typeof value === 'undefined' ?
		alternative :
		value;


module.exports.schema = function(schemas, str) {
	Object.keys(schemas).forEach(function(prop) {
		str = str.replace(
			schemas[prop],
			'<span itemprop="' + prop + '">' +
				schemas[prop] +
			'</span>'
		);
	});

	return new Handlebars.SafeString(str);
};


module.exports.slugify = function(str) {
	return slugify(str);
};


module.exports.year = function() {
	return (new Date()).getFullYear();
}
