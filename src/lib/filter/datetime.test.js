import datetimeFilter from './datetime';


describe('the datetime filter', () => {

	it('should return datetime iso string', () => {
		const date = new Date('2021-02-08T22:42:00.815Z');
		const datetime = datetimeFilter()(date);
		expect(datetime).toBe('2021-02-08T22:42:00.815Z');
	});

});
