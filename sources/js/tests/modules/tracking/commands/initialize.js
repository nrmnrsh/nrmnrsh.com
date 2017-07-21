/* global QUnit */
import $ from 'jquery';
import Geppetto from 'backbone.geppetto';
import GoogleAnalytics from 'picnic/tracking-analytics/commands/Initialize';
import RegistryService from 'picnic/TrackingRegistry';
import OutboundService from 'picnic/TrackingOutbound';
import Command from 'app/modules/tracking/commands/Initialize';


QUnit.module('The tracking initialize command', {

	beforeEach: function() {
		var self = this;

		this.context = new Geppetto.Context();
		this.command = new Command();
		this.command.context = this.context;
		this.command.eventName = 'test:event';
		this.command.eventData = {
			eventName: this.command.eventName
		};

		// Mock Google Analytics:
		this.gaCalls = [];
		window.ga = function() {
			var args = Array.prototype.slice.call(arguments);
			self.gaCalls.push(args);
		};

		// Setup analytics
		this.context.wireValue('tracking-analytics:settings', {
			id: 'UA-FOOBAR-1',
			hostname: 'foo.bar.baz',
			pageviewPrefix: 'omg',
			source: 'foo://bar.baz/analytics.js'
		});
	},

	afterEach: function() {
		$('script[src="foo://bar.baz/analytics.js"]').remove();
		window.ga = undefined;
		delete(window.da);
	}

});

QUnit.test(
	'should be an instance of picnic\'s googleanalytics initialize command',
	function(assert) {
		assert.ok(this.command instanceof GoogleAnalytics);
	}
);

QUnit.test(
	'should setup trackpageview event',
	function(assert) {
		this.command.execute();
		this.context.dispatch('tracking:trackpageview', {
			path: '/foo'
		});
		assert.deepEqual(this.gaCalls[4], [
			'send',
			'pageview',
			'/foo'
		]);
	}
);

QUnit.test(
	'should setup trackevent event',
	function(assert) {
		this.command.execute();
		this.context.dispatch('tracking:trackevent', {
			category: 'foo-category',
			action: 'bar-action',
			label: 'baz-label',
			value: 1
		});
		assert.deepEqual(this.gaCalls[4], [
			'send',
			'event',
			'foo-category',
			'bar-action',
			'baz-label',
			1
		]);
	}
);

QUnit.test(
	'should setup tracksocial event',
	function(assert) {
		this.command.execute();
		this.context.dispatch('tracking:tracksocial', {
			network: 'foo-network',
			action: 'bar-action',
			targetUrl: 'baz-target-url',
			pagePathUrl: 'omg-page-path-url'
		});
		assert.deepEqual(this.gaCalls[4], [
			'send',
			'social',
			'foo-network',
			'bar-action',
			'baz-target-url',
			'omg-page-path-url'
		]);
	}
);

QUnit.test(
	'should register tracking registry service',
	function(assert) {
		this.command.execute();
		assert.ok(this.context.getObject('tracking:registryservice') instanceof RegistryService);
	}
);

QUnit.test(
	'should setup tracking registry trackpageview event',
	function(assert) {
		this.command.execute();
		this.context
			.getObject('tracking:registryservice')
			.registerPageview('some:event', {
				path: '/foo'
			});
		this.context.dispatch('some:event');
		assert.deepEqual(this.gaCalls[4], [
			'send',
			'pageview',
			'/foo'
		]);
	}
);

QUnit.test(
	'should setup tracking registry trackevent event',
	function(assert) {
		this.command.execute();
		this.context
			.getObject('tracking:registryservice')
			.registerEvent('some:event', {
				category: 'foo-category',
				action: 'bar-action',
				label: 'baz-label'
				// Bug in picnic's tracking registry:
				// https://github.com/moccu/picnic/issues/44
				// We do not pass a value here so far:
				// value: '2'
			});
		this.context.dispatch('some:event');
		assert.deepEqual(this.gaCalls[4], [
			'send',
			'event',
			'foo-category',
			'bar-action',
			'baz-label',
			undefined
		]);
	}
);

QUnit.test(
	'should setup tracking registry tracksocial event',
	function(assert) {
		this.command.execute();
		this.context
			.getObject('tracking:registryservice')
			.registerSocial('some:event', {
				network: 'foo-network',
				action: 'bar-action',
				targetUrl: 'baz-target-url',
				pagePathUrl: 'omg-page-path-url'
			});
		this.context.dispatch('some:event');
		assert.deepEqual(this.gaCalls[4], [
			'send',
			'social',
			'foo-network',
			'bar-action',
			'baz-target-url',
			'omg-page-path-url'
		]);
	}
);

QUnit.test(
	'should register tracking outbound service',
	function(assert) {
		this.command.execute();
		assert.ok(this.context.getObject('tracking:outboundservice') instanceof OutboundService);
	}
);

QUnit.test(
	'should trigger outbound events then clicking on outbound links',
	function(assert) {
		var link = $('<a href="http://foo.bar/baz.html">Link</a>');
		this.command.execute();
		link
			.appendTo(document.getElementById('qunit-fixture'))
			.on('click', event => event.preventDefault())
			.trigger('click');

		assert.deepEqual(this.gaCalls[4], [
			'send',
			'event',
			'outbound',
			'link',
			'http://foo.bar/baz.html',
			undefined
		]);
	}
);
