function getBigrams(str) {
  // returns a set of all bigrams in a string

  const bigrams = new Set();
  for (let i = 0; i < str.length - 1; i += 1) {
    bigrams.add(str.substring(i, i + 2));
  }
  return bigrams;
}

function intersect(set1, set2) {
  // returns intersection of two sets
  return new Set([...set1].filter((x) => set2.has(x)));
}

function diceCoefficient(str1, str2) {
  // returns the dice coefficient of two strings

  if (str1.length === 0 || str2.length === 0) return 0;
  if (str1.length === 1 || str2.length === 1) return 0;
  if (str1 === str2) return 1;

  const bigrams1 = getBigrams(str1);
  const bigrams2 = getBigrams(str2);
  return (2 * intersect(bigrams1, bigrams2).size) / (bigrams1.size + bigrams2.size);
}

module.exports = diceCoefficient;
