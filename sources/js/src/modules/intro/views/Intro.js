import TemplateView from 'picnic/core/views/Template';
import Template from 'app/modules/intro/views/Intro.html!text';


var
	SELECTOR_TARGET = '> div',
	SELECTOR_CANVAS = 'canvas',
	DIMENSION = 30,
	RANGE = DIMENSION * DIMENSION,
	NOISE_FACTOR = 0.07,
	NOISE_MAX_ALPHA = 70
;


class View extends TemplateView {

	get template() {
		return Template;
	}

	get target() {
		return this.$el.find(SELECTOR_TARGET);
	}

	get data() {
		var data = super.data;
		data.DIMENSION = DIMENSION;
		return data;
	}

	render() {
		super.render();
		this._setup();
		this._draw();
		return this;
	}

	_setup() {
		var
			canvas = this.content.find(SELECTOR_CANVAS).get(0),
			ctx = canvas.getContext('2d')
		;

		canvas.style.display = 'none';
		ctx.width = canvas.width;
		ctx.height = canvas.height;

		this._canvas = canvas;
		this._ctx = ctx;
	}

	_draw() {
		var
			pixels = this._ctx.createImageData(this._ctx.width, this._ctx.height),
			step = 0,
			random,
			grey,
			index
		;

		do {
			random = Math.random();
			step += ~~(random * RANGE * NOISE_FACTOR);
			grey = ~~(255 * random);
			index = step * 4;

			pixels.data[index    ] = grey;
			pixels.data[index + 1] = grey;
			pixels.data[index + 2] = grey;
			pixels.data[index + 3] = ~~(random * NOISE_MAX_ALPHA);
		} while (step < RANGE);

		this._ctx.putImageData(pixels, 0, 0);
		this.content.css('background-image', 'url(' + this._canvas.toDataURL() + ')');

		// Skip every 2nd frame
		window.requestAnimationFrame(() => {
			window.requestAnimationFrame(this._draw.bind(this));
		});
	}

}

export default View;
