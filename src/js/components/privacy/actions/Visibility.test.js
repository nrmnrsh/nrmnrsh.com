import {Context} from 'pacto';

import {NAMESPACE_VIEW} from 'components/privacy/shared/config';

import {Action} from './Visibility';


describe('The privacy visibility action', () => {

	const EVENT_NAME = 'test:event';

	let context;

	beforeEach(() => {
		context = new Context();
		context.actions.add(EVENT_NAME, Action);
	});

	afterEach(() => {
		context = null;
	});

	it('should set visibility on views', () => {
		const views = [{}, {}];
		context.values.add(NAMESPACE_VIEW, views);

		context.trigger(EVENT_NAME, {visible: true});
		expect(views)
			.toEqual([{visible: true}, {visible: true}]);

		context.trigger(EVENT_NAME, {visible: false});
		expect(views)
				.toEqual([{visible: false}, {visible: false}]);
	});

	it('should handle missing views', () => {
		context.trigger(EVENT_NAME, {visible: true});

		expect(context.values.has(NAMESPACE_VIEW))
			.toBeFalsy();
	});

	it('should handle missing visible data in event', () => {
		const views = [{}, {}];
		context.values.add(NAMESPACE_VIEW, views);
		context.trigger(EVENT_NAME);

		expect(views)
				.toEqual([{visible: true}, {visible: true}]);
	});

});
