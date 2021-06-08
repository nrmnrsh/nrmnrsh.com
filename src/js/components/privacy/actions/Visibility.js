import {NAMESPACE_VIEW} from 'components/privacy/shared/config';

export class Action {

	run() {
		if (!this.context.values.has(NAMESPACE_VIEW)) {
			return;
		}

		const {visible = true} = this.event.data || {};
		const views = this.context.values.get(NAMESPACE_VIEW);

		views.forEach((view) => {
			view.visible = visible;
		});
	}

}
