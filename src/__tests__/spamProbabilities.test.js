const spamProbabilities = require('../spamProbabilities');

describe('spamProbabilities', () => {
  const messages = [
    'This is a short text message',
    'This is a little bit longer text message',
    'Just another text message for test',
  ];
  const obviousSpam = [
    'This is an obvious spam message',
    'This is an obvious spam message',
    'This is an obvious spam message',
  ];

  it('should return an empty array if no messages are passed', () => {
    expect(spamProbabilities([])).toEqual([]);
  });

  it('should an array of same length as the number of messages', () => {
    expect(spamProbabilities(messages).length).toEqual(messages.length);
  });

  it('should return an array of numbers between 0 and 1', () => {
    const result = spamProbabilities(messages);
    result.forEach((probability) => {
      expect(probability).toBeGreaterThanOrEqual(0);
      expect(probability).toBeLessThanOrEqual(1);
    });
  });

  it('should return an array of 1s for obvious spam messages', () => {
    const result = spamProbabilities(obviousSpam);
    result.forEach((probability) => {
      expect(probability).toEqual(1);
    });
  });
});
