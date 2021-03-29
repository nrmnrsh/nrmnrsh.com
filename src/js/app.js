__webpack_public_path__ = window.app.staticURL; // eslint-disable-line no-undef

import {Context} from 'pacto';
import {Action as Analytics} from 'components/analytics/actions/InitializeLazy';
import {Action as Companies} from 'components/companies/actions/InitializeLazy';
// import {Action as Logrocket} from 'components/logrocket/actions/InitializeLazy';
import {Action as Serviceworker} from 'components/serviceworker/actions/Initialize';


const context = new Context();
context.actions.add('app:run', [
	Analytics,
	Companies,
	// Logrocket,
	Serviceworker
]);
context.trigger('app:run');

// Expose:
window.nrmnrsh = {context};
