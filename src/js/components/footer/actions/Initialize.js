import {Initialize} from 'pacto';
import {Footer} from 'components/footer/views/Footer';


export class Action extends Initialize {

	get settings() {
		return {
			selector: '.content-footer',
			namespace: 'footer:views',
			view: Footer,
		};
	}

}
