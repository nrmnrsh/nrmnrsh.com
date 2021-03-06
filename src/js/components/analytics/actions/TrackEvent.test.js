import {Context} from 'pacto';

import {Consents} from 'components/privacy/models/Consents';
import {NAMESPACE_MODEL} from 'components/privacy/shared/config';

import {Action} from './TrackEvent';


describe('The analytics trackevent action', () => {

	const EVENT_TYPE = 'test:event';

	let ga;
	let consents;
	let context;

	beforeEach(() => {
		window.ga = ga = jest.fn();

		consents = new Consents();
		consents.props.analytics = true;

		context = new Context();
		context.values.add('tracking:api', ga);
		context.values.add(NAMESPACE_MODEL, consents);
		context.actions.add(EVENT_TYPE, Action);
	});

	afterEach(() => {
		window.ga = ga = null;
		consents = null;
		context = null;
	});

	test('should require category and action in data', () => {
		expect(() => context.trigger(EVENT_TYPE))
			.toThrow(new Error('Missing action or category for event tracking.'));

		expect(() => context.trigger(EVENT_TYPE, {}))
			.toThrow(new Error('Missing action or category for event tracking.'));

		expect(() => context.trigger(EVENT_TYPE, {category: 'category-name'}))
			.toThrow(new Error('Missing action or category for event tracking.'));

		expect(() => context.trigger(EVENT_TYPE, {action: 'action-name'}))
			.toThrow(new Error('Missing action or category for event tracking.'));
	});

	test('should not track when user consent for analytics is not given', () => {
		consents.props.analytics = false;

		context.trigger(EVENT_TYPE, {
			category: 'category-name',
			action: 'action-name'
		});

		expect(ga).not.toHaveBeenCalled();
	});

	test('should not track when user consent for analytics is unset', () => {
		consents.props.analytics = undefined;

		context.trigger(EVENT_TYPE, {
			category: 'category-name',
			action: 'action-name'
		});

		expect(ga).not.toHaveBeenCalled();
	});

	test('should track category and action', () => {
		context.trigger(EVENT_TYPE, {
			category: 'category-name',
			action: 'action-name'
		});

		expect(ga).toHaveBeenCalledTimes(1);
		expect(ga).toHaveBeenCalledWith(
			'send',
			'event',
			'category-name',
			'action-name'
		);
	});

	test('should track label', () => {
		context.trigger(EVENT_TYPE, {
			category: 'category-name',
			action: 'action-name',
			label: 'label-name'
		});

		expect(ga).toHaveBeenCalledTimes(1);
		expect(ga).toHaveBeenCalledWith(
			'send',
			'event',
			'category-name',
			'action-name',
			'label-name'
		);
	});

	test('should throw an error when tracking an value without label', () => {
		expect(() => context.trigger(EVENT_TYPE, {category: 'category', action: 'action', value: 42}))
			.toThrow(new Error('Missing label for value for event tracking.'));
	});

	test('should track value', () => {
		context.trigger(EVENT_TYPE, {
			category: 'category-name',
			action: 'action-name',
			label: 'label-name',
			value: 42
		});

		expect(ga).toHaveBeenCalledTimes(1);
		expect(ga).toHaveBeenCalledWith(
			'send',
			'event',
			'category-name',
			'action-name',
			'label-name',
			42
		);
	});

	test('should track value as object', () => {
		context.trigger(EVENT_TYPE, {
			category: 'category-name',
			action: 'action-name',
			label: 'label-name',
			value: {
				foo: 'bar'
			}
		});

		expect(ga).toHaveBeenCalledTimes(1);
		expect(ga).toHaveBeenCalledWith(
			'send',
			'event',
			'category-name',
			'action-name',
			'label-name',
			{foo: 'bar'}
		);
	});

	test('should track combined category, label and value', () => {
		context.trigger(EVENT_TYPE, {
			action: 'action-name',
			category: 'category-name',
			label: 'label-name',
			value: 42
		});

		expect(ga).toHaveBeenCalledTimes(1);
		expect(ga).toHaveBeenCalledWith(
			'send',
			'event',
			'category-name',
			'action-name',
			'label-name',
			42
		);
	});

	test('should throw an error when passing value format as string', () => {
		expect(() => context.trigger(EVENT_TYPE, {category: 'test', action: 'test', label: 'test', value: '42'}))
			.toThrow(new Error('Value for event tracking must be a number or object.'));
	});

	test('should throw an error when passing value format as function', () => {
		expect(() => context.trigger(EVENT_TYPE, {category: 'test', action: 'test', label: 'test', value: () => 42}))
			.toThrow(new Error('Value for event tracking must be a number or object.'));
	});

	test('should throw an error when passing value format as array', () => {
		expect(() => context.trigger(EVENT_TYPE, {category: 'test', action: 'test', label: 'test', value: [42]}))
			.toThrow(new Error('Value for event tracking must be a number or object.'));
	});

	test('should throw an error when passing value format as boolean', () => {
		expect(() => context.trigger(EVENT_TYPE, {category: 'test', action: 'test', label: 'test', value: true}))
			.toThrow(new Error('Value for event tracking must be a number or object.'));
	});

});
