__webpack_public_path__ = window.app.static_url; // eslint-disable-line no-undef

import {Context} from 'pacto';
import {Action as Analytics} from 'modules/analytics/actions/InitializeLazy';


const context = new Context();
context.actions.add('app:run', [
	Analytics
]);
context.trigger('app:run');

// Expose:
window.nrmnrsh = {context};
