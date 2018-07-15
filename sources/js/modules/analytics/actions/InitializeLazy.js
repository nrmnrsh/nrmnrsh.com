export class Action {

	get import() {
		return import(/* webpackChunkName: "analytics" */'modules/analytics/actions/Initialize');
	}

	run() {
		// Pay attention to do not track header of user
		// Chrome: chrome://settings/?search=Do+Not+Track
		const doNotTrack = (navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack);
		if (doNotTrack === '1' || doNotTrack === 'yes') {
			this._disconnect();
			return;
		}

		if (document.readyState === 'complete') {
			this._fetch();
		} else {
			this._onLoad = this._onLoad.bind(this);
			window.addEventListener('load', this._onLoad);
		}
	}

	_fetch() {
		this.import.then(this._execute.bind(this));
	}

	_disconnect() {
		this.context.actions.remove(this.event.type, this.constructor);
	}

	_execute(module) {
		const
			Module = (module.Action || module.default),
			action = new Module(),
			{context, event} = this
		;

		this._disconnect();
		context.actions.add(event.type, Module);

		action.context = context;
		action.event = event;
		action.run();
	}

	_onLoad() {
		window.removeEventListener('load', this._onLoad);
		this._fetch();
	}

}
