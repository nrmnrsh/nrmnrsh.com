module.exports = () => (links, str) => {
	str = str || '';
	Object.keys(links || {}).forEach((prop) => {
		const isExternal = /^https?:\/\//.test(prop);
		str = str.replace(links[prop], `<a href="${prop}" title="Open ${links[prop]}" ${isExternal ? 'rel="noopener noreferrer" target="_blank"' : 'target="_self"'}>${links[prop]}</a>`);
	});

	return str;
};
