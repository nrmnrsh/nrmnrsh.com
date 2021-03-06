module.exports = () => (value, alternative) =>
	typeof value === 'undefined' || value === null ?
		alternative :
		value;
