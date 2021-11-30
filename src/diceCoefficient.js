/**
 * Calculates the bigrams of a string
 * @param {string} str - string to be split into bigrams
 * @returns {Set<string>} - set of bigrams of the string
 */
function getBigrams(str) {
  const bigrams = new Set();
  for (let i = 0; i < str.length - 1; i += 1) {
    bigrams.add(str.substring(i, i + 2));
  }
  return bigrams;
}

/**
 * Calculates the intersection of two sets
 * @param {Set<string>} set1 - first set to be compared
 * @param {Set<string>} set2 - second set to be compared
 * @returns {Set<string>} - intersection of two sets
 */
function intersection(set1, set2) {
  return new Set([...set1].filter((x) => set2.has(x)));
}

/**
 * Calculates the dice coefficient of two strings
 * @param {string} str1 - first string to be compared
 * @param {string} str2 - second string to be compared
 * @returns {number} - dice coefficient of two strings
 */
function diceCoefficient(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return 0;
  if (str1.length === 1 || str2.length === 1) return 0;
  if (str1 === str2) return 1;

  const bigrams1 = getBigrams(str1);
  const bigrams2 = getBigrams(str2);
  return (2 * intersection(bigrams1, bigrams2).size) / (bigrams1.size + bigrams2.size);
}

module.exports = diceCoefficient;
