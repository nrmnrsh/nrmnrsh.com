import {Action as Initialize} from 'generic/actions/InitializeLazyWhenLoadedWithConsent';
import {CONSENT_ANALYTICS} from 'components/privacy/shared/config';


export class Action extends Initialize {

	constructor() {
		super(CONSENT_ANALYTICS);
	}

	get import() {
		return import(/* webpackChunkName: "analytics" */'components/analytics/actions/Initialize');
	}

	run() {
		// Pay attention to do not track header of user
		// Chrome: chrome://settings/?search=Do+Not+Track
		const doNotTrack = (navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack);
		if (doNotTrack === '1' || doNotTrack === 'yes') {
			this.disconnect();
			return;
		}

		super.run();
	}

}
