const diceCoefficient = require('./diceCoefficient');

/**
 * Calculates the spam probabilities for a given array of texts.
 * @param {Array<string>} texts - Array of text messages
 * @returns {Array<number>} - Array of numbers indicating the spam probability for each text
 */
const spamProbabilities = (texts = []) => {
  const probabilities = [];
  for (let i = 0; i < texts.length; i += 1) {
    const similarities = []; // similarities between the current text and the rest

    for (let j = 0; j < texts.length; j += 1) {
      if (j !== i) { // skip self
        // push similarity between current text and the other text
        similarities.push(diceCoefficient(texts[i], texts[j]));
      }
    }

    const sumOfSimilarities = similarities.reduce((acc, next) => acc + next);
    const averageSimilarity = sumOfSimilarities / similarities.length;

    probabilities.push(averageSimilarity);
  }

  return probabilities;
};

module.exports = spamProbabilities;
