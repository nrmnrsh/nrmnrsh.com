import {View} from 'pacto';

import {EVENT_VISIBILITY} from 'components/privacy/shared/config';

const SELECTOR_CONTAINER = 'sub';
const SELECTOR_BUTTON = 'button';
const TEMPLATE = `
	<br />
	Click here to open and control your <button role="button">privacy settings</button>.
`;

export class Footer extends View {

	constructor(options) {
		super(options);

		this._onClickConsentSettings = this._onClickConsentSettings.bind(this);
	}

	render() {
		const container = this.el.querySelector(SELECTOR_CONTAINER);
		container.innerHTML = `${container.innerHTML}${TEMPLATE}`;

		const button = container.querySelector(SELECTOR_BUTTON);
		button.addEventListener('click', this._onClickConsentSettings);
	}

	_onClickConsentSettings() {
		this.context.trigger(EVENT_VISIBILITY, {visible: true});
	}

}
