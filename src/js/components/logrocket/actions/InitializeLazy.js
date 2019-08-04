import { Action as Initialize } from 'generic/actions/InitializeLazyWhenLoaded';


export class Action extends Initialize {

	get import() {
		return import(/* webpackChunkName: "logrocket" */'components/logrocket/actions/Initialize.js');
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
