import yearFilter from './year';


describe('the year filter', () => {

	it('should return full year', () => {
		const date = new Date('2021-02-08T22:42:00.815Z');
		const year = yearFilter()(date);
		expect(year).toBe(2021);
	});

});
