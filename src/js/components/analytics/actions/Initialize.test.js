import {advanceTo, clear} from 'jest-date-mock';
import {Context} from 'pacto';

import {Consents} from 'components/privacy/models/Consents';
import {NAMESPACE_MODEL} from 'components/privacy/shared/config';

import {Action} from './Initialize';
import {Action as TrackEvent} from './TrackEvent';
import {Registry} from '../services/Registry';


describe('The analytics initialize action', () => {

	const EVENT_NAME = 'test:event';

	let consents;
	let context;

	function __createLinkAndClick(href) {
		const
			link = document.createElement('a'),
			event = new MouseEvent('click', {bubbles: true, target: link})
		;

		link.href = href;
		document.body.appendChild(link);
		link.dispatchEvent(event);
	}

	beforeEach(() => {
		advanceTo(new Date(Date.UTC(2018, 11, 25, 0, 0 ,0)));

		consents = new Consents();
		consents.props.analytics = true;

		context = new Context();
		context.values.add(NAMESPACE_MODEL, consents);
		context.actions.add(EVENT_NAME, Action);
	});

	afterEach(() => {
		clear();

		window.ga = null;
		consents = null;
		context = null;

		document.querySelectorAll('script').forEach((script) => script.parentNode.removeChild(script));
	});

	test('should load google analytics script source async', () => {
		context.trigger(EVENT_NAME);

		const script = document.querySelectorAll('script[src="https://www.google-analytics.com/analytics.js"]');
		expect(script).toHaveLength(1);
		expect(script[0].async).toBeTruthy();
	});

	test('should setup global ga property with initial pushs', () => {
		context.trigger(EVENT_NAME);
		expect(window.ga).toBeInstanceOf(Function);
		expect(window.ga.q).toEqual([
			['create', 'UA-17711526-1', 'auto'],
			['set', 'anonymizeIp', true],
			['send', 'pageview']
		]);
	});

	test('should setup ga api', () => {
		context.trigger(EVENT_NAME);

		window.ga('foo', 'bar', true);
		expect(window.ga).toBeInstanceOf(Function);
		expect(window.ga.q).toEqual([
			['create', 'UA-17711526-1', 'auto'],
			['set', 'anonymizeIp', true],
			['send', 'pageview'],
			['foo', 'bar', true]
		]);
	});

	test('should expose registry in context', () => {
		context.trigger(EVENT_NAME);
		expect(context.values.get('analytics:registry')).toBeInstanceOf(Registry);
	});

	test('should register trackevent action for event type', () => {
		context.trigger(EVENT_NAME);
		expect(context.actions.get('analytics:trackevent')).toEqual([TrackEvent]);
	});

	test('should setup registry behaviour map events', (done) => {
		context.trigger(EVENT_NAME);

		context.values.get('analytics:registry')
			.registerEvent('test:action', {
				category: 'category-name',
				action: 'action-name'
			});

		context
			.on('analytics:trackevent', () => done())
			.trigger('test:action');
	});

	test('should handle dynamicly created outbound-links', () => {
		const callback = jest.fn();
		context.on('analytics:trackevent', callback);
		context.trigger(EVENT_NAME);

		__createLinkAndClick('/internal/');
		expect(callback).not.toHaveBeenCalled();

		__createLinkAndClick('https://www.external.com/');
		expect(callback).toHaveBeenCalledWith({
			type: 'analytics:trackevent',
			sender: context,
			data: {
				category: 'outbound',
				action: 'click',
				label: 'https://www.external.com/',
				value: {
					nonInteraction: true
				}
			}
		});
	});

	test('should setup app event mapping', () => {
		context.trigger(EVENT_NAME);
		const {mappings} = context.values.get('analytics:registry');
		expect(Object.keys(mappings)).toEqual([
			'scrolldepth:percentage'
		]);
	});

	test('should not load google optimize', () => {
		context.trigger(EVENT_NAME);
		const script = document.querySelectorAll('script[src="https://www.googleoptimize.com/optimize.js?id=OPT-M6ZM5SM"]');
		expect(script).toHaveLength(0);
	});

});
