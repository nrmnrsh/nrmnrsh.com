import {Context} from 'pacto';


const context = new Context();
context.actions.add('app:run', [
]);
context.trigger('app:run');

// Expose:
window.nrmnrsh = {context};
