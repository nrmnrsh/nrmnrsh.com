import Application from 'picnic/core/app/Application';
import Geppetto from 'backbone.geppetto';

import Intro from 'app/modules/intro/commands/Initialize';


class Context extends Geppetto.Context {

	initialize() {
		this.wireCommands({
			'application:start': [
				Intro
			]
		});
	}

}

export default new Application(Context);
