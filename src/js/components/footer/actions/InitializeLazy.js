import {InitializeLazy} from 'pacto';

export class Action extends InitializeLazy {

	get settings() {
		return {
			selector: '.content-footer'
		};
	}

	get import() {
		return import(/* webpackChunkName: "content-footer" */'components/footer/actions/Initialize');
	}

}
