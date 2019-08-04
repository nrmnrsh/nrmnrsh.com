__webpack_public_path__ = window.app.static_url; // eslint-disable-line no-undef

import {Context} from 'pacto';
import {Action as Analytics} from 'components/analytics/actions/InitializeLazy';
import {Action as Logrocket} from 'components/logrocket/actions/InitializeLazy';
import {Action as Serviceworker} from 'components/serviceworker/actions/Initialize';


const context = new Context();
context.actions.add('app:run', [
	Analytics,
	Logrocket,
	Serviceworker
]);
context.trigger('app:run');

// Expose:
window.nrmnrsh = {context};
