export class Action {

	get import() {
		throw new Error('Undefined dynamic import');
	}

	run() {
		if (document.readyState === 'complete') {
			this.fetch();
		} else {
			this._onLoad = this._onLoad.bind(this);
			window.addEventListener('load', this._onLoad);
		}
	}

	fetch() {
		this.import.then(this.execute.bind(this));
	}

	disconnect() {
		this.context.actions.remove(this.event.type, this.constructor);
	}

	execute(module) {
		const
			Module = (module.Action || module.default),
			action = new Module(),
			{context, event} = this
		;

		this.disconnect();
		context.actions.add(event.type, Module);

		action.context = context;
		action.event = event;
		action.run();
	}

	_onLoad() {
		window.removeEventListener('load', this._onLoad);
		this.fetch();
	}

}
