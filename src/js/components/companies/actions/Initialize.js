import { Initialize } from 'pacto';
import { Companies as View } from '../views/Companies';

export class Action extends Initialize {

	get settings() {
		return {
			selector: '.content-companies',
			namespace: 'companies:views',
			view: View
		};
	}

}
