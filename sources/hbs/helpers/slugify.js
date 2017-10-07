var slugify = require('helper-slugify');

module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('slugify', function(str) {
		return slugify(str);
	});
};
