class EventMapper {

	constructor(options = {}) {
		if (!options.context) {
			throw new Error('Missing context in event mapper options.');
		}

		this.options = options;
		this.context = options.context;
		this._mappings = {};
		this._onEvent = this._onEvent.bind(this);
	}

	get mappings() {
		return {...this._mappings};
	}

	map(fromType, toType, dataMapping = {}) {
		const mappings = this._mappings[fromType] || [];

		if (mappings.length === 0) {
			this.context.on(fromType, this._onEvent);
		}

		mappings.push({toType, dataMapping});
		this._mappings[fromType] = mappings;
	}

	execute(event) {
		const mappings = this._mappings[event.type] || [];

		mappings.forEach((mapping) => {
			const {toType, dataMapping} = mapping;
			this.context.trigger(toType, this._build(event.data || {}, dataMapping));
		});
	}

	_build(source, mapping) {
		const data = {...source};

		Object.keys(mapping).forEach((key) => {
			let value = mapping[key];

			switch (typeof value) {
				case 'string':
					if (value.indexOf('.') === 0) {
						value = value.substr(1);

						if (typeof source[value] === 'function') {
							data[key] = source[value].call();
						} else {
							data[key] = source[value];
						}
					} else {
						data[key] = value;
					}
					break;
				case 'function':
					data[key] = value.call(this, source, mapping);
					break;
				default:
					data[key] = value;
					break;
			}
		});

		return data;
	}

	_onEvent(event) {
		this.execute(event);
	}

}

export class Registry extends EventMapper {

	constructor(options) {
		super(options);

		if (!options.trackEventType) {
			throw new Error('Missing event type definition for event tracking.');
		}
	}

	registerEvent(fromType, dataMapping) {
		this.map(fromType, this.options.trackEventType, dataMapping);
	}

}
