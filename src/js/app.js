__webpack_public_path__ = window.app.staticURL; // eslint-disable-line no-undef

import 'what-input';

import {Context} from 'pacto';
import {Action as Analytics} from 'components/analytics/actions/InitializeLazy';
import {Action as Footer} from 'components/footer/actions/InitializeLazy';
// import {Action as Logrocket} from 'components/logrocket/actions/InitializeLazy';
import {Action as Serviceworker} from 'components/serviceworker/actions/Initialize';
import {Action as Privacy} from 'components/privacy/actions/Initialize';


const context = new Context();
context.actions.add('app:run', [
	// Privacy first! This should always be the case but here we also require this
	// to be executed first. This allows access from other components...
	Privacy,

	Analytics,
	Footer,
	// Logrocket,
	Serviceworker,
]);
context.trigger('app:run');

// Expose:
window.nrmnrsh = {context};
