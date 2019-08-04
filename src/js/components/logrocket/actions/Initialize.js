import LogRocket from 'logrocket';


export class Action {

	run() {
		LogRocket.init('k6fiws/nrmnrshcom', {
			release: '1.4.0-beta.5'
		});
	}

}
