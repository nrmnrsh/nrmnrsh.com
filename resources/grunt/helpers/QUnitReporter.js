var
	SIGN_SUCCESS = String.fromCharCode(0x2714).green,
	SIGN_FAILED = String.fromCharCode(0x2613).red
;

function QUnitReporter(grunt) {
	this._grunt = grunt;
	this.reset();

	this._grunt.event.on('qunit.spawn', this._onSpawn.bind(this));
	this._grunt.event.on('qunit.moduleStart', this._onModuleStart.bind(this));
	this._grunt.event.on('qunit.testDone', this._onTestDone.bind(this));
	this._grunt.event.on('qunit.done', this._onDone.bind(this));
	this._grunt.event.on('qunit.fail.load', this._onFailLoad.bind(this));
	this._grunt.event.on('qunit.error.onError', this._onError.bind(this));
}

QUnitReporter.prototype.reset = function() {
	this._report = '';
	this._cases = 0;
};

QUnitReporter.prototype.addReport = function(message) {
	this._report += '\n' + message;
};

QUnitReporter.prototype._onSpawn = function(url) {
	this.addReport('Running test: '.green + url);
};

QUnitReporter.prototype._onModuleStart = function(name) {
	this.addReport(name.green);
};

QUnitReporter.prototype._onTestDone = function(name, failed, passed, total) {
	this.addReport(
		'    ' +
		(failed === 0 ? SIGN_SUCCESS : SIGN_FAILED) + ' ' +
		name + ' (' + total + ')'
	);
	this._cases++;
};

QUnitReporter.prototype._onDone = function(failed, passed, total, runtime) {
	this._grunt.log.writeln(this._report);
	this._grunt.log.writeln((
		' Ran '.gray +
		this._cases.toString().bold.blue +
		' in '.gray +
		runtime.toString().bold.blue +
		'ms '.bold.blue
	).bgWhite);

	this.reset();
};

QUnitReporter.prototype._onFailLoad = function(url) {
	this._grunt.log.writeln();
	this._grunt.log.writeln('Failed to load: ' + url.yellow);
};

QUnitReporter.prototype._onError = function(message, stackTrace) {
	this._grunt.log.writeln();
	this._grunt.log.errorlns(message);
	(stackTrace || []).forEach(function(trace) {
		this._grunt.log.error(
			'"' + trace.function +
			'" in ' + trace.file +
			':' + trace.line
		);
	}.bind(this));
};

module.exports = QUnitReporter;
