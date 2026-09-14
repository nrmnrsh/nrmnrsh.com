import {describe, expect, it} from 'vitest';
import {slug} from './slug.ts';

describe('slug', () => {
  it('should lowercase and hyphenate a name', () => {
    expect(slug('The Pioneer')).toBe('the-pioneer');
  });

  it('should strip diacritics', () => {
    expect(slug('L\'ORÉAL PARiS')).toBe('l-oreal-paris');
  });

  it('should trim leading/trailing hyphens', () => {
    expect(slug(' RBB – Rundfunk Berlin Brandenburg ')).toBe('rbb-rundfunk-berlin-brandenburg');
  });
});
