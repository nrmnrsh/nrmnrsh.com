import {advanceTo, clear} from 'jest-date-mock';

import helpers from './helpers';


describe('The assemble helpers', () => {

	describe('fallback helper', () => {

		it('should return alternative when value is undefined', () => {
			expect(helpers.fallback(undefined, 'alternative')).toBe('alternative');
		});

		it('should return null value', () => {
			expect(helpers.fallback(null, 'alternative')).toBe(null);
		});

		it('should return falsy value', () => {
			expect(helpers.fallback(false, 'alternative')).toBeFalsy();
		});

		it('should return truthy value', () => {
			expect(helpers.fallback(true, 'alternative')).toBeTruthy();
		});

		it('should return string value', () => {
			expect(helpers.fallback('yepp', 'alternative')).toBe('yepp');
		});

		it('should return numeric value', () => {
			expect(helpers.fallback(0, 'alternative')).toBe(0);
			expect(helpers.fallback(42, 'alternative')).toBe(42);
		});

		it('should return object value', () => {
			const obj = {};
			expect(helpers.fallback(obj, 'alternative')).toBe(obj);
		});

	});

	describe('schema helper', () => {

		it('should wrap text sections with schema <span> tags', () => {
			const
				text = 'Hello, my name is Norman and I like to test.',
				schema = {
					givenName: 'Norman',
					familyName: 'Rusch',
					description: 'like to test'
				}
			;
			expect(helpers.schema(schema, text))
				.toEqual({
					string: 'Hello, my name is <span itemprop="givenName">Norman' +
						'</span> and I <span itemprop="description">like to test' +
						'</span>.'
				});

		});

		it('should handle undefined', () => {
			const schema = {irrelevant: 'value'};
			expect(helpers.schema(schema, undefined)).toEqual({
				string: ''
			});
		});

		it('should handle null', () => {
			const schema = {irrelevant: 'value'};
			expect(helpers.schema(schema, null)).toEqual({
				string: ''
			});
		});

		it('should handle missing schema', () => {
			const text = 'Hello, my name is Norman and I like to test.';
			expect(helpers.schema(null, text)).toEqual({
				string: text
			});
		});

	});

	describe('linkify helper', () => {

		it('should wrap text sections with <a> tags', () => {
			const
				text = 'Hello, my name is Norman Rusch and I like to test.',
				links = {
					'http://www.norman.example': 'Norman',
					'https://www.rusch.example': 'Rusch',
					'./local': 'like to test'
				}
			;
			expect(helpers.linkify(links, text))
				.toEqual({
					string: 'Hello, my name is <a href="http://www.norman.example" title="Open Norman" rel="noopener noreferrer" target="_blank">Norman' +
						'</a> <a href="https://www.rusch.example" title="Open Rusch" rel="noopener noreferrer" target="_blank">Rusch' +
						'</a> and I <a href="./local" title="Open like to test" target="_self">like to test' +
						'</a>.'
				});

		});

		it('should handle undefined', () => {
			const links = {irrelevant: 'value'};
			expect(helpers.linkify(links, undefined)).toEqual({
				string: ''
			});
		});

		it('should handle null', () => {
			const links = {irrelevant: 'value'};
			expect(helpers.linkify(links, null)).toEqual({
				string: ''
			});
		});

		it('should handle missing links', () => {
			const text = 'Hello, my name is Norman and I like to test.';
			expect(helpers.linkify(null, text)).toEqual({
				string: text
			});
		});

	});

	describe('slugify helper', () => {

		it('should slugify', () => {
			expect(helpers.slugify('Hello world, this is my Profile')).toBe('hello-world-this-is-my-profile');
		});

	});

	describe('year helper', () => {

		beforeEach(() => {
			advanceTo(new Date(Date.UTC(2018, 11, 25, 0, 0 ,0)));
		});

		afterEach(() => {
			clear();
		});

		it('should return current year', () => {
			expect(helpers.year()).toBe(2018);
		});

	});

	describe('datetime helper', () => {

		beforeEach(() => {
			advanceTo(new Date(Date.UTC(2018, 11, 25, 0, 0 ,0)));
		});

		afterEach(() => {
			clear();
		});

		it('should return current iso datetime', () => {
			expect(helpers.datetime()).toBe('2018-12-25T00:00:00.000Z');
		});

	});

});
