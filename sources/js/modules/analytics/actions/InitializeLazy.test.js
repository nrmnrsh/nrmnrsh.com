import {Context} from 'pacto';
import {Action} from './InitializeLazy';
import {Action as InitializeAction} from './Initialize';
import FixtureAction from './__fixtures__/Action';


describe('The analytics initialize lazy action', () => {

	const EVENT_TYPE = 'test:event';

	let context;

	function runAndCompleteWhen(eventPostfix) {
		return new Promise((resolve) => {
			const type = EVENT_TYPE + ':' + eventPostfix;
			context.on(type, () => resolve());
			context.trigger(EVENT_TYPE);
		});
	}

	class TestAction extends Action {

		get import() {
			return import('./__fixtures__/Action');
		}

		run() {
			super.run();
			this.context.trigger(this.event.type + ':done');
		}

	}

	beforeEach(() => {
		context = new Context();
		context.actions.add(EVENT_TYPE, TestAction);
	});

	afterEach(() => {
		context = null;
		window.navigator.doNotTrack = null;
		window.navigator.msDoNotTrack = undefined;
		window.doNotTrack = undefined;
	});

	test('should pay attention to enabled do-not-track setting of user', (done) => {
		window.navigator.doNotTrack = '1'; // Enabled

		runAndCompleteWhen('done').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toBeUndefined();
			done();
		});
	});

	test('should pay attention to enabled do-not-track setting of user with legacy value "yes"', (done) => {
		window.navigator.doNotTrack = 'yes'; // Enabled by Gecko 32 Firefox

		runAndCompleteWhen('done').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toBeUndefined();
			done();
		});
	});

	test('should pay attention to disabled do-not-track setting of user', (done) => {
		window.navigator.doNotTrack = '0'; // Disabled

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should pay attention to unspecified do-not-track setting of user', (done) => {
		window.navigator.doNotTrack = 'unspecified'; // Unspecified

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should pay attention to null-unspecified do-not-track setting of user', (done) => {
		window.navigator.doNotTrack = null; // Unspecified

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should pay attention to enabled do-not-track setting of user using ms-vendorprefix', (done) => {
		window.navigator.doNotTrack = undefined;
		window.navigator.msDoNotTrack = '1'; // Enabled

		runAndCompleteWhen('done').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toBeUndefined();
			done();
		});
	});

	test('should pay attention to disabled do-not-track setting of user using ms-vendorprefix', (done) => {
		window.navigator.doNotTrack = undefined;
		window.navigator.msDoNotTrack = '0'; // Disabled

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should pay attention to unspecified do-not-track setting of user using ms-vendorprefix', (done) => {
		window.navigator.doNotTrack = undefined;
		window.navigator.msDoNotTrack = 'unspecified'; // Unspecified

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should pay attention to null-unspecified do-not-track setting of user using ms-vendorprefix', (done) => {
		window.navigator.doNotTrack = undefined;
		window.navigator.msDoNotTrack = null; // Unspecified

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should pay attention to enabled do-not-track setting of user specified at window-object', (done) => {
		window.navigator.doNotTrack = undefined;
		window.doNotTrack = '1'; // Enabled

		runAndCompleteWhen('done').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toBeUndefined();
			done();
		});
	});

	test('should pay attention to disabled do-not-track setting of user specified at window-object', (done) => {
		window.navigator.doNotTrack = undefined;
		window.doNotTrack = '0'; // Disabled

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should pay attention to unspecified do-not-track setting of user specified at window-object', (done) => {
		window.navigator.doNotTrack = undefined;
		window.doNotTrack = 'unspecified'; // Unspecified

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should pay attention to null-unspecified do-not-track setting of user specified at window-object', (done) => {
		window.navigator.doNotTrack = undefined;
		window.doNotTrack = null; // Unspecified

		runAndCompleteWhen('loaded').then(() => {
			expect(context.actions.get(EVENT_TYPE)).toEqual([FixtureAction]);
			done();
		});
	});

	test('should import initialize action', (done) => {
		const action = new Action();
		action.import.then((module) => {
			expect(module.Action).toBe(InitializeAction);
			done();
		});
	});

});
