import {EVENT_VISIBILITY, NAMESPACE_MODEL} from 'components/privacy/shared/config';


export class Action {

	run() {
		const model = this.context.values.get(NAMESPACE_MODEL);
		const {props} = this.event.data || {};

		Object.entries(props || {}).forEach(([key, value]) => {
			model.props[key] = value;
		});

		model.save();

		const visible = model.hasMissing;
		this.context.trigger(EVENT_VISIBILITY, {visible});
	}

}
