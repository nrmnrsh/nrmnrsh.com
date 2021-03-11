const { promises: fs } = require('fs');
const { fromFile } = require('hasha');
const path = require('path');

module.exports = ({ rootpath }) => async (file) => {
	if (file, process.env.NODE_ENV === 'development') {
		return file;
	}

	const source = path.join(rootpath, file);
	const extname = path.extname(file);
	const basename = path.basename(file, extname);
	const dirname = path.dirname(file);

	const hash = await fromFile(source, {algorithm: 'md5'});
	const hashed = path.join(dirname, `${basename}-${hash}${extname}`);
	const dest = path.join(rootpath, hashed);

	await fs.copyFile(source, dest);
	return hashed;
};
