import fallbackShortcode from './fallback';


describe('the fallback shortcode', () => {

	it('should return predefined', () => {
		expect(fallbackShortcode()('current', 'fallback'))
			.toBe('current');
	});

	it('should return fallback when undefined', () => {
		expect(fallbackShortcode()(undefined, 'fallback'))
			.toBe('fallback');
	});

	it('should return fallback when null', () => {
		expect(fallbackShortcode()(null, 'fallback'))
			.toBe('fallback');
	});

	it('should return predefined when boolean', () => {
		expect(fallbackShortcode()(true, 'fallback'))
			.toBe(true);

		expect(fallbackShortcode()(false, 'fallback'))
			.toBe(false);
	});

});
