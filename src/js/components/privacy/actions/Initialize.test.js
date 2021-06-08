import {Context, Initialize} from 'pacto';

import {Consents as Model} from 'components/privacy/models/Consents';
import {Consents as View} from 'components/privacy/views/Consents';
import {
	EVENT_CHANGE,
	EVENT_VISIBILITY,
	NAMESPACE_MODEL,
	NAMESPACE_VIEW,
} from 'components/privacy/shared/config';

import {Action} from './Initialize';
import {Action as ChangeAction} from './Change';
import {Action as VisibilityAction} from './Visibility';


describe('The privacy initialize action', () => {

	const EVENT_NAME = 'test:event';

	let context;

	beforeEach(() => {
		context = new Context();
		context.actions.add(EVENT_NAME, Action);

		document.body.innerHTML = `<div class="privacy" />`;
	});

	afterEach(() => {
		context = null;

		document.body.innerHTML = '';
	});

	it('should be an instance of pacto initialize action', () => {
		const action = new Action();
		expect(action)
			.toBeInstanceOf(Initialize);
	});

	it('should use settings', () => {
		const action = new Action();
		expect(action.settings)
			.toEqual({
				selector: '.privacy',
				namespace: 'privacy:views',
				view: View,
			});
	});

	it('should create consent model', () => {
		expect(context.values.has(NAMESPACE_MODEL))
			.toBeFalsy();

		context.trigger('test:event');
		expect(context.values.has(NAMESPACE_MODEL))
			.toBeTruthy();
		expect(context.values.get(NAMESPACE_MODEL))
			.toBeInstanceOf(Model);
	});

	it('should not create consent model more than once', () => {
		const model = new Model();
		context.values.add(NAMESPACE_MODEL, model);

		context.trigger('test:event');
		expect(context.values.get(NAMESPACE_MODEL))
			.toBe(model);
	});

	it('should load consent from storage', () => {
		global.localStorage.getItem.mockReturnValue('{"foo":true}');
		context.trigger('test:event');

		const model = context.values.get(NAMESPACE_MODEL);
		expect(model.props.foo)
			.toBeTruthy();
	});

	it('should register actions', () => {
		context.trigger('test:event');

		expect(context.actions.get(EVENT_CHANGE))
			.toEqual([ChangeAction]);
		expect(context.actions.get(EVENT_VISIBILITY))
			.toEqual([VisibilityAction]);
	});

	it('should register actions only once', () => {
		context.trigger('test:event');
		context.trigger('test:event');
		context.trigger('test:event');

		expect(context.actions.get(EVENT_CHANGE))
			.toEqual([ChangeAction]);
		expect(context.actions.get(EVENT_VISIBILITY))
			.toEqual([VisibilityAction]);
	});

	it('should pass consent model into view', () => {
		context.trigger('test:event');

		const el = document.querySelector('.privacy');
		const model = context.values.get(NAMESPACE_MODEL);
		const views = context.values.get(NAMESPACE_VIEW);
		expect(views)
			.toHaveLength(1);

		const [view] = views;
		expect(view)
			.toBeInstanceOf(View);
		expect(view.options)
			.toEqual({ el, context, model });
	});

});
