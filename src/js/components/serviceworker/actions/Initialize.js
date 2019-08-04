export class Action {

	run() {
		if ('serviceWorker' in navigator) {
			if (document.readyState === 'complete') {
				this._register();
			} else {
				window.addEventListener('load', this._register.bind(this));
			}
		} else {
			this.context.trigger('serviceworker:register:unsupported');
		}
	}

	_register() {
		const {context} = this;

		navigator.serviceWorker.register('/sw.js', {scope: '/'})
			.then((registration) => context.trigger('serviceworker:register:success', {registration}))
			.catch((error) => context.trigger('serviceworker:register:failed', {error}));
	}

}
