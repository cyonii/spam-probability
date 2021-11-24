const diceCoefficient = require('./diceCoefficient');

const spamProbabilities = (texts = []) => {
  // returns an array of spam probabilities for each text in texts

  const probabilities = [];
  for (let i = 0; i < texts.length; i += 1) {
    const dissimilarities = []; // array of dissimilarity between the current text and the rest

    for (let j = 0; j < texts.length; j += 1) {
      if (j !== i) { // skip self
        // push dissimilarity between current text and the other text
        dissimilarities.push(diceCoefficient(texts[i], texts[j]));
      }
    }

    const sumOfDissimilarity = dissimilarities.reduce((acc, next) => acc + next);
    const averageDissimilarity = sumOfDissimilarity / dissimilarities.length;

    probabilities.push(averageDissimilarity);
  }

  return probabilities;
};

module.exports = spamProbabilities;
