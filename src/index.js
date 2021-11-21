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

