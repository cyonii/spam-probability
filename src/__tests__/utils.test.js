const { levenshteinDistance, similarity } = require('../utils');

describe('levenshteinDistance', () => {
  it('should return 0 for same strings', () => {
    expect(levenshteinDistance('test', 'test')).toBe(0);
  });

  it('should return 1 when both strings have one letter difference', () => {
    expect(levenshteinDistance('apple', 'apples')).toBe(1);
  });

  it('should the length of the longer string when strings have no common letters', () => {
    expect(levenshteinDistance('hunger', 'loyalty')).toBe(7);
  });

  it('should return the length of the longer string when the shorter string is empty', () => {
    expect(levenshteinDistance('', 'apple')).toBe(5);
  });
});

describe('similarity', () => {
  it('should return 1 for same strings', () => {
    expect(similarity('test', 'test')).toBe(1);
  });

  it('should return less than 1 when both strings have one letter difference', () => {
    expect(similarity('apple', 'apples')).toBeLessThan(1);
  });

  it('should return 0 when strings have no common letters', () => {
    expect(similarity('hunger', 'loyalty')).toBe(0);
  });
});
