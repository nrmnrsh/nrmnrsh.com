import {Context} from 'pacto';
import {Action as Analytics} from 'modules/analytics/actions/InitializeLazy';


const context = new Context();
context.actions.add('app:run', [
	Analytics
]);
context.trigger('app:run');

// Expose:
window.nrmnrsh = {context};
