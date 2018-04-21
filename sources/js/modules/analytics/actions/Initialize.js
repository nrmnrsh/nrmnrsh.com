const GA_PROPERTY = 'UA-17711526-1';


export class Action {

	run() {
		const
			doc = document,
			script = doc.createElement('script')
		;
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_PROPERTY}`;

		this._setup();
		doc.head.appendChild(script);
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

}
