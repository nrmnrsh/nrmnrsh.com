import {Action as TrackEvent} from 'components/analytics/actions/TrackEvent';
import {Optimize} from 'components/analytics/services/Optimize';
import {Registry} from 'components/analytics/services/Registry';
import {Scrolldepth} from 'components/analytics/services/Scrolldepth';


const
	ANALYTICS_PROPERTY = 'UA-17711526-1',
	ANALYTICS_SOURCE = 'https://www.google-analytics.com/analytics.js',
	ANALYTICS_INTIAL_CALLS = [
		['set', 'anonymizeIp', true],
		['send', 'pageview']
	],
	OPTIMIZE_PROPERTY = 'OPT-M6ZM5SM',
	NAMESPACE = 'analytics:',
	NAMESPACE_REGISTRY = NAMESPACE + 'registry',
	EVENT_TRACKEVENT = NAMESPACE + 'trackevent',
	VALUE_NONINTERACTION_TRUE = {
		nonInteraction: true
	},
	VALUE_NONINTERACTION_FALSE =  {
		nonInteraction: false
	}
;


function __getPathname() {
	return window.location.pathname;
}

function __getParentElement(el, selector) {
	const all = [...document.querySelectorAll(selector)];
	let current = el;

	while (current) {
		if (all.includes(current)) {
			return current;
		}
		current = current.parentElement;
	}

	return null;
}


export class Action {

	run() {
		this._load();
		this._setup();
	}

	_load() {
		const
			script = document.createElement('script'),
			ga = window.ga || function() {
				(ga.q = ga.q || []).push(Array.apply(null, arguments));
			}
		;
		ga.l = 1 * new Date();
		window.GoogleAnalyticsObject = 'ga';
		window.ga = ga;

		script.async = true;
		script.src = ANALYTICS_SOURCE;
		document.head.appendChild(script);

		ga('create', ANALYTICS_PROPERTY, 'auto');
		ANALYTICS_INTIAL_CALLS.forEach(args => ga.apply(null, args));
	}

	_setup() {
		const
			{context} = this,
			registry = new Registry({context, trackEventType: EVENT_TRACKEVENT}),
			optimize = new Optimize(OPTIMIZE_PROPERTY)
		;

		context.actions.add(EVENT_TRACKEVENT, TrackEvent);
		context.values.add(NAMESPACE_REGISTRY, registry);

		// Load google optimize script:
		optimize.init();

		// Register events from the scrolldepth service:
		new Scrolldepth({context});
		registry.registerEvent('scrolldepth:percentage', {
			category: 'scrolldepth',
			action: '.percentage',
			label: __getPathname,
			value: (data) => {
				return data.percentage < 75 ?
					VALUE_NONINTERACTION_TRUE :
					VALUE_NONINTERACTION_FALSE;
			}
		});

		// Register global click handler to catch click events for specific
		// elements. Do not attach clickhandlers directly to the selector
		// because the singlepage behaviour will result in lost references and
		// new elements won't be attached.
		document.body.addEventListener('click', (event) => {
			// Track outbound links:
			const el = __getParentElement(event.target, '[href^="http"]');
			if (el) {
				context.trigger(EVENT_TRACKEVENT, {
					category: 'outbound',
					action: 'click',
					label: el.href,
					value: VALUE_NONINTERACTION_TRUE
				});
				return;
			}
		});
	}

}
