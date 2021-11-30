const levenshteinDistance = require('./levenshteinDistance');

/**
 * Calculates the similarity between two strings using the Levenshtein distance algorithm.
 * @param {string} str1 - The first string to compare
 * @param {string} str2 - The second string to compare
 * @param {{caseSensitive: boolean}} options - Options for the algorithm
 * @returns {number} - The similarity distance between the two strings
 */
const stringSimilarity = (str1, str2, options = { caseSensitive: false }) => {
  if (!options.caseSensitive) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  }

  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  return 1 - (distance / maxLength);
};

module.exports = stringSimilarity;
