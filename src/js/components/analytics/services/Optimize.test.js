import {Optimize} from './Optimize';


describe('The analytics optimize service', () => {

	afterEach(() => {
		document.querySelectorAll('script').forEach((script) => script.parentNode.removeChild(script));
	});

	test('should load given id', () => {
		const service = new Optimize('OPT-FOOBAR');
		service.init();

		const scripts = document.querySelectorAll('script');
		expect(scripts).toHaveLength(1);
		expect(scripts[0].src).toBe('https://www.googleoptimize.com/optimize.js?id=OPT-FOOBAR');
	});

});
