import {Context} from 'pacto';

import {Consents as ConsentsModel} from 'components/privacy/models/Consents';
import {EVENT_VISIBILITY, NAMESPACE_MODEL} from 'components/privacy/shared/config';

import {Action} from './Change';


describe('The privacy change action', () => {

	const EVENT_NAME = 'test:event';

	let context;
	let model;

	beforeEach(() => {
		model = new ConsentsModel();

		context = new Context();
		context.values.add(NAMESPACE_MODEL, model);
		context.actions.add(EVENT_NAME, Action);
	});

	afterEach(() => {
		model = null;
		context = null;
	});

	it('should update props in model', () => {
		const props = Object.keys(model.defaults).reduce((acc, key) => ({ ...acc, [key]: true }), {});
		context.trigger(EVENT_NAME, { props });

		expect(model.props)
			.toEqual(props);
	});

	it('should handle missing props in event', () => {
		context.trigger(EVENT_NAME);

		expect(model.props)
			.toEqual(model.defaults);
	});

	it('should save props in model', () => {
		jest.spyOn(model, 'save');

		const props = Object.keys(model.defaults).reduce((acc, key) => ({ ...acc, [key]: true }), {});
		context.trigger(EVENT_NAME, { props });

		expect(model.save)
			.toHaveBeenCalledTimes(1);
		expect(model.save)
			.toHaveBeenCalledWith();
	});

	it('should trigger hidden visibility event when props have explicit consent', () => {
		const callback = jest.fn();
		context.on(EVENT_VISIBILITY, callback);

		const props = Object.keys(model.defaults).reduce((acc, key) => ({ ...acc, [key]: true }), {});
		context.trigger(EVENT_NAME, { props });

		expect(callback)
			.toHaveBeenCalledTimes(1);
		expect(callback)
			.toHaveBeenCalledWith(
				expect.objectContaining({
					data: {
						visible: false,
					},
				}),
			);
	});

	it('should trigger visible visibility event when at least one prop have no consent', () => {
		const callback = jest.fn();
		context.on(EVENT_VISIBILITY, callback);

		const props = Object.keys(model.defaults).reduce((acc, key) => ({ ...acc, [key]: true }), {});
		props.notSpecified = undefined;
		context.trigger(EVENT_NAME, { props });

		expect(callback)
			.toHaveBeenCalledTimes(1);
		expect(callback)
			.toHaveBeenCalledWith(
				expect.objectContaining({
					data: {
						visible: true,
					},
				}),
			);
	});

});
