const GA_PROPERTY = 'UA-17711526-1';


export class Action {

	run() {
		this._setup();
		if (document.readyState === 'complete') {
			this._load();
		} else {
			window.addEventListener('load', this._load.bind(this));
		}
	}

	_setup() {
		const win = window;
		win.dataLayer = win.dataLayer || [];
		win.gtag = function() {
			win.dataLayer.push(arguments);
		};
		win.gtag('js', new Date());
		win.gtag('config', GA_PROPERTY, {'anonymize_ip': true});
	}

	_load() {
		const
			doc = document,
			script = doc.createElement('script')
		;
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_PROPERTY}`;
		doc.head.appendChild(script);
	}

}
