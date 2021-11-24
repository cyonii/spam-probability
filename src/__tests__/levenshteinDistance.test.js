const levenshteinDistance = require('../levenshteinDistance');

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
