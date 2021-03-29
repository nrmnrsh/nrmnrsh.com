import { Carousel } from 'caroucssel';
import { View } from 'pacto';

const CAROUSEL_SELECTOR = 'ol';
const CAROUSEL_CLASS_ACTIVE = 'is-active';
const CAROUSEL_SETTINGS ={
	hasButtons: true
};

export class Companies extends View {

	constructor(options) {
		super(options);
		this._onScroll = this._onScroll.bind(this);
	}

	render() {
		this._carousel = new Carousel(
			this.el.querySelector(CAROUSEL_SELECTOR),
			{...CAROUSEL_SETTINGS, onScroll: this._onScroll},
		);
		this._activate(0);
	}

	_activate(index) {
		this._carousel.items.forEach((item, at) => {
			const {classList} = item;
			const hasClass = classList.contains(CAROUSEL_CLASS_ACTIVE);
			if (index === at && !hasClass) {
				classList.add(CAROUSEL_CLASS_ACTIVE);
			} else if (index !== at && hasClass) {
				classList.remove(CAROUSEL_CLASS_ACTIVE);
			}
		});
	}

	_onScroll({ index: [index] }) {
		this._activate(index);
	}

}
