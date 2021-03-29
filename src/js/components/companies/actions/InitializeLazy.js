import { InitializeLazy } from 'pacto';

export class Action extends InitializeLazy {

	get settings() {
		return {
			selector: '.content-companies'
		};
	}

	get import() {
		return import(/* webpackChunkName: "component-companies" */'./Initialize');
	}

}
