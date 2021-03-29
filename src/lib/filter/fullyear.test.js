import fullyearFilter from './fullyear';


describe('the fullyear filter', () => {

	it('should return full year', () => {
		const date = new Date('2021-02-08T22:42:00.815Z');
		const year = fullyearFilter()(date);
		expect(year).toBe(2021);
	});

});
