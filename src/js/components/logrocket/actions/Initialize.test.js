import LogRocket from 'logrocket';

import pkg from '../../../../../package.json';
import {Action} from './Initialize';


describe('The logrocket initialize action', () => {

	let init = null;

	beforeEach(() => {
		init = jest.spyOn(LogRocket, 'init');
	});

	afterEach(() => {
		init.mockRestore();
	})

	test('should call init() of LogRocket', () => {
		const action = new Action();
		action.run();

		expect(init).toHaveBeenCalledTimes(1);
		expect(init).toHaveBeenCalledWith('k6fiws/nrmnrshcom', {
			release: pkg.version
		});
	});

});
