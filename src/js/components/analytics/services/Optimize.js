export class Optimize {
	constructor(id) {
		this._id = id;
	}

	init() {
		const script = document.createElement('script');
		script.src = `https://www.googleoptimize.com/optimize.js?id=${this._id}`;
		document.head.appendChild(script);
	}
}
