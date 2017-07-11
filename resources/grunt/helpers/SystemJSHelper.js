function SystemJSHelper(SystemJS) {
	this._SystemJS = SystemJS;
}

SystemJSHelper.prototype.resolve = function(name) {
	var
		pkg = this._SystemJS.map[name].split(':'),
		registry = pkg[0],
		directory = pkg[1],
		location = this._SystemJS.paths[registry + ':*']
	;

	return location
		.replace('*', directory)
		.replace('file://', '');
};

module.exports = SystemJSHelper;
