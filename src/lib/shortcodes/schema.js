module.exports = () => (schemas, str) => {
	str = str || '';
	Object.keys(schemas || {}).forEach((prop) => {
		str = str.replace(schemas[prop], `<span itemprop="${prop}">${schemas[prop]}</span>`);
	});

	return str;
};
