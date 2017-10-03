var slugify = require('helper-slugify');

module.exports.register = function (Handlebars, options) {
	Handlebars.registerHelper('slugify', function(str) {
		return slugify(str);
	});
};
