import {Initialize} from 'pacto';

import {Action as Change} from 'components/privacy/actions/Change';
import {Action as Visibility} from 'components/privacy/actions/Visibility';
import {Consents as ConsentsModel} from 'components/privacy/models/Consents';
import {Consents as ConsentsView} from 'components/privacy/views/Consents';
import {
	EVENT_CHANGE,
	EVENT_VISIBILITY,
	NAMESPACE_MODEL,
	NAMESPACE_VIEW,
} from 'components/privacy/shared/config';


export class Action extends Initialize {

	get settings() {
		return {
			selector: '.privacy',
			namespace: NAMESPACE_VIEW,
			view: ConsentsView,
		};
	}

	get _model() {
		return this.context.values.get(NAMESPACE_MODEL) || (() => {
			const model = new ConsentsModel();
			model.load();

			this.context.values.add(NAMESPACE_MODEL, model);
			return model;
		})();
	}

	beforeAll() {
		// Assuming that if there is already a model defined, the action has been
		// run at least once before...
		if (this.context.values.has(NAMESPACE_MODEL)) {
			return;
		}

		this.context.actions.add(EVENT_CHANGE, Change);
		this.context.actions.add(EVENT_VISIBILITY, Visibility);
	}

	beforeEach(options) {
		// Merge in model into options:
		options.model = this._model;
	}

	afterAll() {
		const visible = this._model.hasMissing;
		this.context.trigger(EVENT_VISIBILITY, {visible});
	}

}
