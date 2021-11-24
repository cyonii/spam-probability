const levenshteinDistance = require('./levenshteinDistance');

const stringSimilarity = (str1, str2, options = { caseSensitive: false }) => {
  // returns the similarity between two strings
  // options.caseSensitive: boolean, whether or not to ignore case

  if (!options.caseSensitive) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  }

  const distance = levenshteinDistance(str1, str2);
  const maxLength = Math.max(str1.length, str2.length);
  return 1 - (distance / maxLength);
};

module.exports = stringSimilarity;
