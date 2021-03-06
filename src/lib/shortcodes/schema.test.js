import schemaShortcode from './schema';


describe('the schema shortcode', () => {

	it('should add schema tags into text', () => {
		expect(schemaShortcode()(
			{
				'foo': 'consectetur adipisicing',
				'bar': 'tempor'
			},
			`
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
			`
		)).toBe(
			`
			Lorem ipsum dolor sit amet, <span itemprop="foo">consectetur adipisicing</span> elit, sed do
			eiusmod <span itemprop="bar">tempor</span> incididunt ut labore et dolore magna aliqua.
			`
		);
	});

	it('should handle empty nullish schema', () => {
		expect(schemaShortcode()(
			null,
			`
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
			`
		)).toBe(
			`
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
			`
		);
	});

	it('should handle empty undefined schema', () => {
		expect(schemaShortcode()(
			undefined,
			`
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
			`
		)).toBe(
			`
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
			`
		);
	});

	it('should handle empty text', () => {
		expect(schemaShortcode()({
			'foo': 'consectetur adipisicing',
			'bar': 'tempor'
		})).toBe('');
	});

});
