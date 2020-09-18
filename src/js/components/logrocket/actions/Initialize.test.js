import LogRocket from 'logrocket';

import pkg from '../../../../../package.json';
import {Action} from './Initialize';


jest.mock('logrocket', () => ({
	init: jest.fn(),
}));


describe('The logrocket initialize action', () => {

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should call init() of LogRocket', () => {
		const action = new Action();
		action.run();

		expect(LogRocket.init).toHaveBeenCalledTimes(1);
		expect(LogRocket.init).toHaveBeenCalledWith('k6fiws/nrmnrshcom', {
			release: pkg.version
		});
	});

});
