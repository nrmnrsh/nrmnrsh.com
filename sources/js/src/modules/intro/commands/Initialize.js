import Initialize from 'picnic/core/commands/Initialize';
import View from 'app/modules/intro/views/Intro';


class Command extends Initialize {

	get settings() {
		return {
			selector: '.content-intro',
			namespace: 'intro:views',
			viewclass: View
		};
	}

}

export default Command;
