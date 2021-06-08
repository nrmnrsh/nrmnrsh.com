import {Context} from 'pacto';

import {Consents as Model} from 'components/privacy/models/Consents';
import {CONSENT_ANALYTICS, CONSENT_LOGROCKET, EVENT_CHANGE} from 'components/privacy/shared/config';

import {Consents as View} from './Consents';


describe('The privacy consents view', () => {

	let el;
	let model
	let context;

	beforeEach(() => {
		el = document.createElement('div');
		model = new Model();
		context = new Context();
	});

	afterEach(() => {
		el = null;
		context = null;
	});

	it('should render', () => {
		const view = new View({ el, context, model });
		view.render();

		expect(view.el)
			.toMatchSnapshot();
	});

	it('should initially be hidden', () => {
		const view = new View({ el, context, model });
		view.render();

		expect(view.visible)
			.toBeFalsy();
		expect(view.el.firstElementChild.getAttribute('aria-hidden'))
			.toBe('true');
	});

	it('should change all props as true when click on "allow all" button', () => {
		const callback = jest.fn();
		context.on(EVENT_CHANGE, callback);

		const view = new View({ el, context, model });
		view.render();

		const button = view.el.querySelector('.allow-all');
		const event = document.createEvent('MouseEvent');
		event.initMouseEvent('click');

		button.dispatchEvent(event);
		expect(callback)
			.toHaveBeenCalledTimes(1);
		expect(callback)
			.toHaveBeenCalledWith(
				expect.objectContaining({
					sender: context,
					data: {
						props: {
							[CONSENT_ANALYTICS]: true,
							[CONSENT_LOGROCKET]: true,
						},
					},
				}),
			);
	});

	it('should change all props when click on "allow selection" button', () => {
		const callback = jest.fn();
		context.on(EVENT_CHANGE, callback);

		const view = new View({ el, context, model });
		view.render();

		const analytics = view.el.querySelector(`input[value="${CONSENT_ANALYTICS}"]`);
		analytics.checked = true;

		const logrocket = view.el.querySelector(`input[value="${CONSENT_LOGROCKET}"]`);
		logrocket.checked = false;

		const button = view.el.querySelector('.allow-selection');
		const event = document.createEvent('MouseEvent');
		event.initMouseEvent('click');

		button.dispatchEvent(event);
		expect(callback)
			.toHaveBeenCalledTimes(1);
		expect(callback)
			.toHaveBeenCalledWith(
				expect.objectContaining({
					sender: context,
					data: {
						props: {
							[CONSENT_ANALYTICS]: true,
							[CONSENT_LOGROCKET]: false,
						},
					},
				}),
			);
	});

	it('should update checkboxes when model props changes', () => {
		const view = new View({ el, context, model });
		view.render();

		const analytics = view.el.querySelector(`input[value="${CONSENT_ANALYTICS}"]`);
		const logrocket = view.el.querySelector(`input[value="${CONSENT_LOGROCKET}"]`);

		model.props[CONSENT_ANALYTICS] = true;
		expect(analytics.checked).toBeTruthy();
		expect(logrocket.checked).toBeFalsy();

		model.props[CONSENT_ANALYTICS] = false;
		expect(analytics.checked).toBeFalsy();
		expect(logrocket.checked).toBeFalsy();

		model.props[CONSENT_LOGROCKET] = false;
		expect(analytics.checked).toBeFalsy();
		expect(logrocket.checked).toBeFalsy();

		model.props[CONSENT_LOGROCKET] = true;
		expect(analytics.checked).toBeFalsy();
		expect(logrocket.checked).toBeTruthy();
	});

});