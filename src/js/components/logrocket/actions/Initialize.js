import LogRocket from 'logrocket';
import { version } from '../../../../../package.json';


export class Action {

	run() {
		LogRocket.init('k6fiws/nrmnrshcom', { release: version });
	}

}
