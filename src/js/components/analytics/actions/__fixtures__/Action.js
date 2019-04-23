export default class FixtureAction {

	run() {
		this.context.trigger(this.event.type + ':loaded');
	}

}
