const stringSimilarity = require('../stringSimilarity');

describe('stringSimilarity', () => {
  it('should return 1 for same strings', () => {
    expect(stringSimilarity('test', 'test')).toBe(1);
  });

  it('should return less than 1 when both strings have one letter difference', () => {
    expect(stringSimilarity('apple', 'apples')).toBeLessThan(1);
    expect(stringSimilarity('apple', 'apples')).toBeGreaterThan(0);
  });

  it('should return 0 when strings have no common letters', () => {
    expect(stringSimilarity('hunger', 'loyalty')).toBe(0);
  });

  it('should return between 0 and 1 when strings have some common letters', () => {
    expect(stringSimilarity('apple', 'app')).toBeLessThan(1);
    expect(stringSimilarity('apple', 'app')).toBeGreaterThan(0);
  });
});
