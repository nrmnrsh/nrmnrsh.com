import fullyearMonthFilter from './fullyear-month';


describe('the fullyear and month filter', () => {

	it('should return full year and month', () => {
		const date = new Date('2021-11-23T18:39:07.411Z');
		const value = fullyearMonthFilter()(date);
		expect(value).toBe('2021/11');
	});

	it('should return full year and month (leading zero)', () => {
		const date = new Date('2021-02-08T22:42:00.815Z');
		const value = fullyearMonthFilter()(date);
		expect(value).toBe('2021/02');
	});

});
