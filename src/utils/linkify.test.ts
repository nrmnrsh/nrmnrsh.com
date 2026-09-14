import {describe, expect, it} from 'vitest';
import {linkify} from './linkify.ts';

describe('linkify', () => {
  it('should add links into text', () => {
    expect(
      linkify(
        {
          'https://consectetur.adipisicing/': 'consectetur adipisicing',
          '/tempor.html': 'tempor',
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ),
    ).toBe(
      'Lorem ipsum dolor sit amet, <a href="https://consectetur.adipisicing/" rel="noopener noreferrer" target="_blank">consectetur adipisicing</a> elit, sed do eiusmod <a href="/tempor.html">tempor</a> incididunt ut labore et dolore magna aliqua.',
    );
  });

  it('should handle empty nullish links', () => {
    expect(linkify(undefined, 'Lorem ipsum dolor sit amet.')).toBe('Lorem ipsum dolor sit amet.');
  });

  it('should handle empty text', () => {
    expect(
      linkify({
        'https://consectetur.adipisicing/': 'consectetur adipisicing',
        '/tempor.html': 'tempor',
      }),
    ).toBe('');
  });
});
