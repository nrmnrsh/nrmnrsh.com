import staticShortcode from './static';


describe('the schema shortcode', () => {

	const rootpath = __dirname;

	it('should return hashed file name', async () => {
		const name = await staticShortcode({ rootpath })('__fixtures__/static.file');
		expect(name)
			.toBe('__fixtures__/static-3fe23b6a86a04d8d3928eddcf3992864.file');
	});

});
