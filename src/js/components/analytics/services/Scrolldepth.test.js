import {Context} from 'pacto';

import {Scrolldepth} from './Scrolldepth';


describe('The analytics scrolldepth', () => {

	const
		EVENT_TYPE = 'scrolldepth:percentage',
		DEBOUNCE_TIME = 250
	;

	let context, service, vph;

	function __scrollTo(yPos) {
		const event = new Event('scroll');
		window.pageYOffset = yPos;
		window.dispatchEvent(event);

		jest.advanceTimersByTime(DEBOUNCE_TIME);
	}

	beforeEach(() => {
		jest.useFakeTimers();

		vph = window.innerHeight;
		context = new Context();
		service = new Scrolldepth({context});
		document.body.style.height = (vph * 5) + 'px';
		window.clientHeight = vph * 5;
	});

	afterEach(() => {
		jest.clearAllTimers();
		service.destroy();

		context = null;
		service = null;
		document.body.style.height = '';
		window.clientHeight = undefined;
	});

	test('shoul trigger events on scroll', () => {
		const callback = jest.fn();

		context.on(EVENT_TYPE, callback);

		__scrollTo(vph - 1);
		expect(callback).not.toHaveBeenCalled();

		__scrollTo(vph);
		expect(callback).toHaveBeenCalledTimes(1);
		expect(callback).toHaveBeenCalledWith({
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 25}
		});

		__scrollTo(vph * 2);
		expect(callback).toHaveBeenCalledTimes(2);
		expect(callback).toHaveBeenCalledWith({
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 50}
		});

		__scrollTo(vph * 3);
		expect(callback).toHaveBeenCalledTimes(3);
		expect(callback).toHaveBeenCalledWith({
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 75}
		});

		__scrollTo(vph * 4);
		expect(callback).toHaveBeenCalledTimes(4);
		expect(callback).toHaveBeenCalledWith({
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 100}
		});
	});

	test('should not trigger events with same percentage twice on scroll', () => {
		const callback = jest.fn();

		context.on(EVENT_TYPE, callback);

		__scrollTo(vph - 1);
		expect(callback).not.toHaveBeenCalled();

		__scrollTo(vph);
		expect(callback).toHaveBeenCalledTimes(1);
		expect(callback).toHaveBeenCalledWith({
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 25}
		});

		__scrollTo(vph + 10);
		__scrollTo(vph);
		__scrollTo(vph);
		__scrollTo(vph);
		expect(callback).toHaveBeenCalledTimes(1);
	});

	test('should trigger events with all percentage steps in a row if scrolling fast', () => {
		const callback = jest.fn();

		context.on(EVENT_TYPE, callback);

		__scrollTo(vph * 4);
		expect(callback).toHaveBeenCalledTimes(4);

		expect(callback).toHaveBeenNthCalledWith(1, {
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 25}
		});
		expect(callback).toHaveBeenNthCalledWith(2, {
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 50}
		});
		expect(callback).toHaveBeenNthCalledWith(3, {
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 75}
		});
		expect(callback).toHaveBeenNthCalledWith(4, {
			type: EVENT_TYPE,
			sender: context,
			data: {percentage: 100}
		});
	});
});
