import dateFilter from './date';


describe('the date filter', () => {

	it('should return date when passing a year', () => {
		const date = dateFilter()('2021');
		expect(date).toEqual(new Date('2021'));
	});

	it('should return date when passing a year/month', () => {
		const date = dateFilter()('2021-02');
		expect(date).toEqual(new Date('2021-02-01'));
	});

	it('should return date when passing a year/month/day', () => {
		const date = dateFilter()('2021-02-08');
		expect(date).toEqual(new Date('2021-02-08'));
	});

});
