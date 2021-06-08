import {Action as InitializeLazyWhenLoaded} from './InitializeLazyWhenLoaded';

import {NAMESPACE_MODEL} from 'components/privacy/shared/config';


export class Action extends InitializeLazyWhenLoaded {

	constructor(consentName) {
		super();

		if (!consentName) {
			throw new Error('Missing consent name.');
		}

		this._consentName = consentName;
		this._onChangeConsent = this._onChangeConsent.bind(this);
	}

	get consents() {
		return this.context.values.get(NAMESPACE_MODEL);
	}

	get isAllowed() {
		return !!this.consents.props[this._consentName];
	}

	run() {
		// If the user has not given or has not given yet a consent for analytics,
		// wait for a change and initialize again later...
		if (!this.isAllowed) {
			this.consents.on('change', this._onChangeConsent);
			return;
		}

		super.run();
	}

	_onChangeConsent(event) {
		const { data } = event;
		const { prop } = data;

		if (prop !== this._consentName) {
			return;
		}

		// We are disable listening for further change events and re-run the the
		// initialization process. If the consent is false we loop as long as the
		// user will give a consent...
		this.consents.off('change', this._onChangeConsent);
		this.run();
	}

}
