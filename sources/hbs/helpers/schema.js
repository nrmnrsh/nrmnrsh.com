module.exports.register = function (Handlebars) {
	Handlebars.registerHelper('schema', function(schemas, str) {
		Object.keys(schemas).forEach(function(prop) {
			str = str.replace(
				schemas[prop],
				'<span itemprop="' + prop + '">' +
					schemas[prop] +
				'</span>'
			);
		});

		return new Handlebars.SafeString(str);
	});
};
