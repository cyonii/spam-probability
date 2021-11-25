const diceCoefficient = require('../diceCoefficient');

describe('diceCoefficient', () => {
  it('should return 1 when the strings are equal with length > 1', () => {
    expect(diceCoefficient('apple', 'apple')).toBe(1);
    expect(diceCoefficient('ape', 'ape')).toBe(1);
  });

  it('should return 0 when either string is empty', () => {
    expect(diceCoefficient('', '')).toBe(0);
    expect(diceCoefficient('apple', '')).toBe(0);
    expect(diceCoefficient('', 'apple')).toBe(0);
  });

  it('should return 0 when either string is a single character', () => {
    expect(diceCoefficient('a', 'apple')).toBe(0);
    expect(diceCoefficient('apple', 'b')).toBe(0);
  });

  it('should return a number between 0 and 1 when the strings are not equal', () => {
    expect(diceCoefficient('apple because', 'orange')).toBeGreaterThanOrEqual(0);
    expect(diceCoefficient('apple like', 'orange')).toBeLessThanOrEqual(1);
  });
});
