import Application from 'picnic/core/app/Application';
import Geppetto from 'backbone.geppetto';


class Context extends Geppetto.Context {

	initialize() {
		this.wireCommands({
			'application:start': [

			]
		});
	}

}

export default new Application(Context);
