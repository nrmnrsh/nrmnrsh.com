import {Context} from 'pacto';

import {Action} from './InitializeLazyWhenLoaded';
import {Action as FixtureAction} from './__fixtures__/Action';


describe('The generic initialize lazy action', () => {

	const EVENT_TYPE = 'test:event';

	let context;

	class TestAction extends Action {

		get import() {
			return import('./__fixtures__/Action');
		}

	}

	beforeEach(() => {
		context = new Context();
		context.actions.add(EVENT_TYPE, TestAction);
	});

	afterEach(() => {
		context = null;
	});

	test('should import initialize action', (done) => {
		const action = new TestAction();
		action.import.then((module) => {
			expect(module.Action).toBe(FixtureAction);
			done();
		});
	});

});
