import {Model} from 'pacto.model';

import {Consents} from './Consents';

describe('The privacy consents model', () => {

	it('should be an instance of pacto.model', () => {
		const model = new Consents();

		expect(model)
			.toBeInstanceOf(Model);
	});

	it('should have default props as undefined', () => {
		const model = new Consents();

		expect(model.props).toEqual({
			analytics: undefined,
			logrocket: undefined,
		});
	});

	it('should load values from storage', () => {
		global.localStorage.getItem.mockReturnValue('{"analytics":true,"logrocket":false}');
		const model = new Consents();
		model.load();

		expect(global.localStorage.getItem)
			.toHaveBeenCalledTimes(1);
		expect(global.localStorage.getItem)
			.toHaveBeenCalledWith('nrmnrsh:privacy:consents:v1');
		expect(model.props)
			.toEqual({
				analytics: true,
				logrocket: false,
			});
	});

	it('should handle load from empty storage', () => {
		global.localStorage.getItem.mockReturnValue(null);
		const model = new Consents();
		model.load();

		expect(model.props).toEqual({
			analytics: undefined,
			logrocket: undefined,
		});
	});

	it('should handle load errors by logging to the console.error', () => {
		const original = global.console.error;
		global.console.error = jest.fn();

		const error = new Error('Failed to get item');
		global.localStorage.getItem.mockImplementation(() => {
			throw error;
		});

		const model = new Consents();
		model.load();

		expect(global.console.error)
			.toHaveBeenCalledTimes(1);
		expect(global.console.error)
			.toHaveBeenCalledWith('Consent load error', error);

		global.console.error = original;
	});

	it('should write to storage', () => {
		const model = new Consents();
		model.props.analytics = false;
		model.props.logrocket = true;
		model.props.other = 'added';
		model.save();

		expect(global.localStorage.setItem)
			.toHaveBeenCalledTimes(1);
		expect(global.localStorage.setItem)
			.toHaveBeenCalledWith(
				'nrmnrsh:privacy:consents:v1',
				JSON.stringify({
					analytics: false,
					logrocket: true,
					other: 'added',
				}),
			);
	});

	it('should handle write errors by logging to the console.error', () => {
		const original = global.console.error;
		global.console.error = jest.fn();

		const error = new Error('Failed to set item');
		global.localStorage.setItem.mockImplementation(() => {
			throw error;
		});

		const model = new Consents();
		model.props.analytics = false;
		model.props.logrocket = true;
		model.props.other = 'added';
		model.save();

		expect(global.console.error)
			.toHaveBeenCalledTimes(1);
		expect(global.console.error)
			.toHaveBeenCalledWith('Consent save error', error);

		global.console.error = original;
	});

});