import { Model } from 'pacto.model';

import {CONSENT_ANALYTICS, CONSENT_LOGROCKET} from 'components/privacy/shared/config';


const STORAGE_KEY = 'nrmnrsh:privacy:consents:v1';

export class Consents extends Model {

	get defaults() {
		return {
			[CONSENT_ANALYTICS]: undefined,
			[CONSENT_LOGROCKET]: undefined,
		};
	}

	get hasMissing() {
		return Object.values(this.props)
			.filter((consent) => consent === undefined)
			.length > 0;
	}

	load() {
		try {
			const data = window.localStorage.getItem(STORAGE_KEY);
			const parsed = JSON.parse(data) || {};
			Object.entries(parsed)
				.forEach(([key, value]) => {
					this.props[key] = value;
				});
		} catch(error) {
			window.console.error('Consent load error', error);
		}
	}

	save() {
		try {
			const data = JSON.stringify(this.props);
			window.localStorage.setItem(STORAGE_KEY, data);
		} catch(error) {
			window.console.error('Consent save error', error);
		}
	}

}
