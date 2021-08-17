module.exports = () => (links, str) => {
	str = str || '';
	Object.keys(links || {}).forEach((prop) => {
		const isExternal = /^https?:\/\//.test(prop);
		str = str.replace(links[prop], `<a href="${prop}"${isExternal ? ' rel="noopener noreferrer" target="_blank"' : ''}>${links[prop]}</a>`);
	});

	return str;
};
