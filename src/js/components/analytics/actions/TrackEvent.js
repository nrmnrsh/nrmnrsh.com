import {CONSENT_ANALYTICS, NAMESPACE_MODEL} from 'components/privacy/shared/config';


export class Action {

	run() {
		const consents = this.context.values.get(NAMESPACE_MODEL);
		const isAllowed = !!consents.props[CONSENT_ANALYTICS];
		if (!isAllowed) {
			// Do not track if there is no consent...
			return;
		}

		const
			{action, category, label, value} = this.event.data || {},
			args = ['send', 'event', category, action]
				.concat(label ? [label] : [])
				.concat(value ? [value] : [])
		;

		if (!action || !category) {
			throw new Error('Missing action or category for event tracking.');
		}

		if (value && !label) {
			throw new Error('Missing label for value for event tracking.');
		}

		if (value &&
			typeof value !== 'number' &&
			typeof value !== 'object' &&
			value.constructor !== Object ||
			Array.isArray(value)) {
			throw new Error('Value for event tracking must be a number or object.');
		}

		window.ga.apply(null, args);
	}

}
