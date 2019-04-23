import {Context} from 'pacto';
import {Registry} from './Registry';


describe('The analytics registry', () => {

	const
		EVENT_FROM = 'test:event:from',
		EVENT_TO = 'test:event:to',
		EVENT_TRACKEVENT = 'test:event:trackevent'
	;

	let context, registry;

	beforeEach(() => {
		context = new Context();
		registry = new Registry({context, trackEventType: EVENT_TRACKEVENT});
	});

	afterEach(() => {
		context = null;
		registry = null;
	});

	test('should throw an error when options is missing in constructor', () => {
		expect(() => new Registry()).toThrow(new Error('Missing context in event mapper options.'));
	});

	test('should throw an error when context is missing in constructor', () => {
		expect(() => new Registry({foo: true})).toThrow(new Error('Missing context in event mapper options.'));
	});

	test('should throw an error when missing event type definition for event tracking', () => {
		expect(() => new Registry({context})).toThrow(new Error('Missing event type definition for event tracking.'));
	});

	test('should map primitiv values', () => {
		const
			events = [],
			mapping = {
				string: 'hello test',
				number: 42,
				boolean: true
			}
		;

		registry.map(EVENT_FROM, EVENT_TO, mapping);
		context.on(EVENT_TO, (event) => events.push(event));
		context.trigger(EVENT_FROM, {welcome: 'hello world'});

		expect(events).toEqual([{
			sender: context,
			type: EVENT_TO,
			data: {...mapping, welcome: 'hello world'}
		}]);
	});

	test('should overwrite values', () => {
		const
			events = [],
			mapping = {welcome: 'hello test'}
		;

		registry.map(EVENT_FROM, EVENT_TO, mapping);
		context.on(EVENT_TO, (event) => events.push(event));
		context.trigger(EVENT_FROM, {
			welcome: 'hello world'
		});

		expect(events).toEqual([{
			sender: context,
			type: EVENT_TO,
			data: {...mapping}
		}]);
	});

	test('should map return values from functions', () => {
		const
			events = [],
			convert = (eventData, mappingData) => {
				return {eventData, mappingData};
			},
			mapping = {converted: convert}
		;

		registry.map(EVENT_FROM, EVENT_TO, mapping);
		context.on(EVENT_TO, (event) => events.push(event));
		context.trigger(EVENT_FROM, {welcome: 'hello world'});

		expect(events).toEqual([{
			sender: context,
			type: EVENT_TO,
			data: {
				converted: {
					eventData: {welcome: 'hello world'},
					mappingData: {converted: convert}
				},
				welcome: 'hello world'
			}
		}]);
	});

	test('should map values from data properties', () => {
		const
			events = [],
			mapping = {text: '.welcome'}
		;

		registry.map(EVENT_FROM, EVENT_TO, mapping);
		context.on(EVENT_TO, (event) => events.push(event));
		context.trigger(EVENT_FROM, {welcome: 'hello world'});

		expect(events).toEqual([{
			sender: context,
			type: EVENT_TO,
			data: {
				text: 'hello world',
				welcome: 'hello world'
			}
		}]);
	});

	test('should map return values from function properties', () => {
		const
			events = [],
			mapping = {text: '.welcome'};

		function welcome() {
			return 'hello world';
		}

		registry.map(EVENT_FROM, EVENT_TO, mapping);
		context.on(EVENT_TO, (event) => events.push(event));
		context.trigger(EVENT_FROM, {welcome});

		expect(events).toEqual([{
			sender: context,
			type: EVENT_TO,
			data: {
				text: 'hello world',
				welcome
			}
		}]);
	});

	test('should handle multiple mappings by same event', () => {
		const events = [];
		registry.map(EVENT_FROM, EVENT_TO + ':one', {name: 'one'});
		registry.map(EVENT_FROM, EVENT_TO + ':two', {name: 'two'});

		context.on(EVENT_TO + ':one', (event) => events.push(event));
		context.on(EVENT_TO + ':two', (event) => events.push(event));
		context.trigger(EVENT_FROM, {welcome: 'hello world'});

		expect(events).toEqual([
			{
				sender: context,
				type: EVENT_TO + ':one',
				data: {name: 'one', welcome: 'hello world'}
			},
			{
				sender: context,
				type: EVENT_TO + ':two',
				data: {name: 'two', welcome: 'hello world'}
			}
		]);
	});

	test('should map even if event has no payload', () => {
		const
			events = [],
			mapping = {
				welcome: 'hello test'
			}
		;

		registry.map(EVENT_FROM, EVENT_TO, mapping);
		context.on(EVENT_TO, (event) => events.push(event));
		context.trigger(EVENT_FROM);

		expect(events).toEqual([{
			sender: context,
			type: EVENT_TO,
			data: {...mapping}
		}]);
	});

	test('should map even if no mapping is defined', () => {
		const events = [];

		registry.map(EVENT_FROM, EVENT_TO);
		context.on(EVENT_TO, (event) => events.push(event));
		context.trigger(EVENT_FROM, {welcome: 'hello world'});

		expect(events).toEqual([{
			sender: context,
			type: EVENT_TO,
			data: {welcome: 'hello world'}
		}]);
	});

	test('should return mappings', () => {
		registry.map('from:one', 'to:another');
		registry.map('from:one', 'to:another', {welcome: 'hello world'});
		registry.map('from:another', 'to:anyother', {welcome: 'hello universe'});

		expect(registry.mappings).toEqual({
			'from:one': [
				{toType: 'to:another', dataMapping: {}},
				{toType: 'to:another', dataMapping: {welcome: 'hello world'}}
			],
			'from:another': [
				{toType: 'to:anyother', dataMapping: {welcome: 'hello universe'}}
			]
		});
	});

	test('should expose shortcut mapping for event tracking', (done) => {
		registry.registerEvent(EVENT_FROM, {
			action: 'action-name',
			category: '.category',
			label: '.label'
		});
		context.on(EVENT_TRACKEVENT, (event) => {
			expect(event.data).toEqual({
				action: 'action-name',
				category: 'category-name',
				label: 'label-name',
			});
			done();
		}).trigger(EVENT_FROM, {
			category: 'category-name',
			label: () => 'label-name'
		});
	});

	test('should execute registered event', () => {
		const callback = jest.fn();

		registry.map('test:event:a', EVENT_TRACKEVENT, {welcome: 'hello world'});
		registry.registerEvent('test:event:b', {welcome: 'hello test'});
		context.on(EVENT_TRACKEVENT, callback);

		registry.execute({type: 'foo:bar', data: null});
		expect(callback).not.toHaveBeenCalled();

		registry.execute({type: 'foo:bar', data: {payload: true}});
		expect(callback).not.toHaveBeenCalled();

		registry.execute({type: 'test:event:a', data: null});
		expect(callback).toHaveBeenCalledTimes(1);
		expect(callback).toHaveBeenCalledWith({
			data: {welcome: 'hello world'},
			sender: context,
			type: EVENT_TRACKEVENT
		});

		registry.execute({type: 'test:event:a', data: {payload: true}});
		expect(callback).toHaveBeenCalledTimes(2);
		expect(callback).toHaveBeenCalledWith({
			data: {payload: true, welcome: 'hello world'},
			sender: context,
			type: EVENT_TRACKEVENT
		});

		registry.execute({type: 'test:event:b', data: null});
		expect(callback).toHaveBeenCalledTimes(3);
		expect(callback).toHaveBeenCalledWith({
			data: {welcome: 'hello test'},
			sender: context,
			type: EVENT_TRACKEVENT
		});

		registry.execute({type: 'test:event:b', data: {payload: true}});
		expect(callback).toHaveBeenCalledTimes(4);
		expect(callback).toHaveBeenCalledWith({
			data: {payload: true, welcome: 'hello test'},
			sender: context,
			type: EVENT_TRACKEVENT
		});
	});

});
