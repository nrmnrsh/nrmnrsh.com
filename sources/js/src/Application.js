import Application from 'picnic/core/app/Application';
import Geppetto from 'backbone.geppetto';

import Tracking from 'app/modules/tracking/commands/Initialize';


class Context extends Geppetto.Context {

	initialize() {
		this.wireValue('tracking-analytics:settings', {
			id: 'UA-17711526-1'
		});

		this.wireCommands({
			'application:start': [
				Tracking
			]
		});
	}

}

export default new Application(Context);
