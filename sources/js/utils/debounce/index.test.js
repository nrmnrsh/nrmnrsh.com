import {debounce} from './index';


describe('The debounce util', () => {

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.clearAllTimers();
	});

	test('should create function', () => {
		const debounced = debounce(jest.fn(), 100);
		expect(debounced).toBeInstanceOf(Function);
	});

	test('should create debounced function of original', () => {
		const
			original = jest.fn(),
			debounced = debounce(original, 100)
		;

		debounced();
		debounced();
		debounced();
		expect(original).not.toHaveBeenCalled();

		jest.advanceTimersByTime(100);
		expect(original).toHaveBeenCalledTimes(1);

		jest.advanceTimersByTime(1000);
		expect(original).toHaveBeenCalledTimes(1);
	});

	test('should pass arguments to orignal function', () => {
		const
			original = jest.fn(),
			debounced = debounce(original, 100)
		;

		debounced(1, 'A');
		debounced(2, 'B');

		jest.advanceTimersByTime(100);
		expect(original).toHaveBeenCalledTimes(1);
		expect(original).toHaveBeenCalledWith(2, 'B');
	});

});
