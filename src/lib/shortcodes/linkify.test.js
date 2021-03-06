import linkifyShortcode from './linkify';


describe('the linkify shortcode', () => {

	it('should add links into text', () => {
		expect(linkifyShortcode()(
			{
				'https://consectetur.adipisicing/': 'consectetur adipisicing',
				'/tempor.html': 'tempor'
			},
			`
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
			`
		)).toBe(
			`
			Lorem ipsum dolor sit amet, <a href="https://consectetur.adipisicing/" title="Open consectetur adipisicing" rel="noopener noreferrer" target="_blank">consectetur adipisicing</a> elit, sed do
			eiusmod <a href="/tempor.html" title="Open tempor" target="_self">tempor</a> incididunt ut labore et dolore magna aliqua.
			`
		);
	});

	it('should handle empty nullish links', () => {
		expect(linkifyShortcode()(
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

	it('should handle empty undefined links', () => {
		expect(linkifyShortcode()(
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
		expect(linkifyShortcode()({
			'https://consectetur.adipisicing/': 'consectetur adipisicing',
			'/tempor.html': 'tempor'
		})).toBe('');
	});

});
