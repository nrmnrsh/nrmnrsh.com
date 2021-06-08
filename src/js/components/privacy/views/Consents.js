import {View} from 'pacto';

import {CONSENT_ANALYTICS, CONSENT_LOGROCKET, EVENT_CHANGE} from 'components/privacy/shared/config';


const SELECTOR_DIALOG ='[role="dialog"]';
const SELECTOR_CHECKBOXES = '[type="checkbox"][name="privacy"]';
const SELECTOR_BUTTON_ALLOW_ALL = '.allow-all';
const SELECTOR_BUTTON_ALLOW_SELECTION = '.allow-selection';

const TEMPLATE = `
	<div
		role="dialog"
		aria-modal="true"
		aria-hidden="true"
		aria-labelledby="privacy-title"
		aria-describedby="privacy-description"
	>
		<h2 id="privacy-title">Enable services</h2>
		<div id="privacy-description">
			<div class="description">
				<p>
					This site is using different services that allow me to enhance and
					analyze the usage of this page. They might uses cookies to work properly...
				</p>
				<button role="button" class="allow-all">Enable all</button>
			</div>

			<details>
				<summary>Customize services</summary>

				<p>
					I believe preventing cookie usage is not the only way to protect
					your privacy. Instead, you will have full control over all the services
					that are loaded to control any data exchange to foreign services.
				</p>

				<form class="details">
					<dl>
						<dt>
							<label>
								<input type="checkbox" name="privacy" value="${CONSENT_ANALYTICS}" />
								Google Analytics
							</label>
						</dt>
						<dd>
							Google Analytics is a web analytics service offered by Google that
							tracks and reports website traffic. I track page views and clicks
							on links. The service is running using the "anonymizeIp" setting.
							Read more about <a
								href="https://policies.google.com/privacy?hl=en#footnote-link-info"
								rel="noopener noreferrer"
								target="_blank"
							>data privacy</a>
							from Google Analytics.
						</dd>

						<dt>
							<label>
								<input type="checkbox" name="privacy" value="${CONSENT_LOGROCKET}" />
								Logrocket
							</label>
						</dt>
						<dd>
							LogRocket is a cloud-based and on-premise logging and session replay
							platform for JavaScript applications, which helps me track UX problems
							and analyze as well as remediate the root causes of bugs.
							Read more about <a
								href="https://logrocket.com/privacy/"
								rel="noopener noreferrer"
								target="_blank"
							>privacy policy</a>
							from LogRocket.
						</dd>
					</dl>

					<button role="button" class="allow-selection">Use selection</button>
				</form>
			</details>
		</div>
	</div>
`;


export class Consents extends View {

	constructor(options) {
		super(options);
		this._model = options.model;

		this._onAllowAll = this._onAllowAll.bind(this);
		this._onAllowSelection = this._onAllowSelection.bind(this);
		this._onConsentChange = this._onConsentChange.bind(this);
	}

	get visible() {
		return this._dialog.getAttribute('aria-hidden') !== 'true';
	}

	set visible(value) {
		this._dialog.setAttribute('aria-hidden', !value);
	}

	render() {
		const {el} = this;

		el.innerHTML = TEMPLATE;

		this._model.on('change', this._onConsentChange);
		this._dialog = el.querySelector(SELECTOR_DIALOG);
		this._checkboxes = [...el.querySelectorAll(SELECTOR_CHECKBOXES)];

		this._buttonAll = el.querySelector(SELECTOR_BUTTON_ALLOW_ALL);
		this._buttonAll.addEventListener('click', this._onAllowAll);
		this._buttonSelection = el.querySelector(SELECTOR_BUTTON_ALLOW_SELECTION);
		this._buttonSelection.addEventListener('click', this._onAllowSelection);

		this.update();
		return this;
	}

	update() {
		this._checkboxes.forEach((checkbox) => {
			const name = checkbox.value;
			checkbox.checked = !!this._model.props[name];
		});
	}

	_onAllowAll(event) {
		event.preventDefault();
		const props = {};

		this._checkboxes.forEach((checkbox) => {
			const name = checkbox.value;
			props[name] = true;
		});

		this.context.trigger(EVENT_CHANGE, {props});
	}

	_onAllowSelection(event) {
		event.preventDefault();
		const props = {};

		this._checkboxes.forEach((checkbox) => {
			const name = checkbox.value;
			props[name] = checkbox.checked;
		});

		this.context.trigger(EVENT_CHANGE, {props});
	}

	_onConsentChange() {
		this.update();
	}

}
