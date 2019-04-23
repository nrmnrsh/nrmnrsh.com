import {debounce} from 'utils/debounce';

const
	EVENT_TYPE = 'scrolldepth:percentage',
	PERCENTAGE_TRIGGERS = [25, 50, 75, 100]
;


export class Scrolldepth {

	constructor(options) {
		this.options = options;
		this.context = options.context;
		this.reset();

		this._onScroll = debounce(this._onScroll.bind(this), 250);
		window.addEventListener('scroll', this._onScroll);
	}

	destroy() {
		window.removeEventListener('scroll', this._onScroll);
	}

	reset() {
		this._percentage = 0;
		this._triggers = [].concat(PERCENTAGE_TRIGGERS);
	}

	update() {
		const
			// References:
			doc = document,
			html = doc.documentElement,
			body = doc.body,
			values = [],

			// Dimensions:
			viewportHeight = Math.max(
				html.clientHeight,
				window.innerHeight || 0
			),
			documentHeight = Math.max(
				body.scrollHeight,
				body.offsetHeight,
				html.clientHeight,
				html.scrollHeight,
				html.offsetHeight,
				window.clientHeight || 0 // For testing
			),
			scrollTop = window.pageYOffset,

			// Calculation:
			percentage = scrollTop / (documentHeight - viewportHeight) * 100
		;

		if (percentage !== this._percentage) {
			this._percentage = percentage;

			this._triggers.forEach((trigger) => {
				// Push trigger from available list into list of trigger values
				// which will be fired.
				if (percentage >= trigger) {
					values.push(trigger);
				}
			});

			if (values.length) {
				// Remove triggers to be fired from available list:
				this._triggers = this._triggers.filter((trigger) =>
					!values.includes(trigger));

				// Notify into context collected triggers:
				values.forEach((trigger) =>
					this.context.trigger(EVENT_TYPE, {percentage: trigger}));
			}
		}
	}

	_onScroll() {
		this.update();
	}

}
