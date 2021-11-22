const levenshteinDistance = (str1, str2) => {
  // returns the levenshtein distance between two strings

  const track = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i += 1) { track[0][i] = i; }
  for (let j = 0; j <= str2.length; j += 1) { track[j][0] = j; }
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator,
      );
    }
  }
  return track[str2.length][str1.length];
};

const similarity = (str1, str2) => {
  // returns the similarity between two strings

  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  return 1 - distance / maxLength;
};

// eslint-disable-next-line
const spamProbabilities = (texts) => { 
  // assigns a spam probability to each text

  const probabilities = [];
  for (let i = 0; i < texts.length; i += 1) {
    const dissimilarity = []; // array of dissimilarity between the current text and the rest

    for (let j = 0; j < texts.length; j += 1) {
      if (j !== i) { // skip self
        // push dissimilarity between current text and the other text
        dissimilarity.push(similarity(texts[i], texts[j]));
      }
    }

    const sumOfDissimilarity = dissimilarity.reduce((acc, next) => acc + next);
    const averageDissimilarity = sumOfDissimilarity / dissimilarity.length;

    probabilities.push(averageDissimilarity);
  }

  return probabilities;
};
