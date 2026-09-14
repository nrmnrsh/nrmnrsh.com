import {describe, expect, it} from 'vitest';
import {schema} from './schema.ts';

describe('schema', () => {
  it('should add schema tags into text', () => {
    expect(
      schema(
        {
          foo: 'consectetur adipisicing',
          bar: 'tempor',
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ),
    ).toBe(
      'Lorem ipsum dolor sit amet, <span itemprop="foo">consectetur adipisicing</span> elit, sed do eiusmod <span itemprop="bar">tempor</span> incididunt ut labore et dolore magna aliqua.',
    );
  });

  it('should handle empty nullish schema', () => {
    expect(schema(undefined, 'Lorem ipsum dolor sit amet.')).toBe('Lorem ipsum dolor sit amet.');
  });

  it('should handle empty text', () => {
    expect(
      schema({
        foo: 'consectetur adipisicing',
        bar: 'tempor',
      }),
    ).toBe('');
  });
});
