export class Action {

	run() {
		this.context.trigger(this.event.type + ':loaded');
	}

}
