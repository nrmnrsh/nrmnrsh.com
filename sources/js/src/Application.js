import Application from 'picnic/core/app/Application';
import Geppetto from 'backbone.geppetto';


class Context extends Geppetto.Context {

	initialize() {
		window.console.log('RUN RUN RUN');
	}

}

export default new Application(Context);
