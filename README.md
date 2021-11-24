# Spam Probability

This repository contains a routine for assigning spam probabilities to a given set of text messages.

The probability is ranged from 0 to 1, where 0 is no spam and 1 is spam.

## Approach

It uses the [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm (also known as the edit distance) to calculate the distance between two strings and compute their similarity.

It loops through the given set of messages and compare the current text to the rest in the set. It then makes an array of the comparisons between each text and the rest, computes the average of the comparison, which is the probability of the current text being spam.

The function returns an array of the probabilities of each text in the set.

## Code

- File path: `src/spamProbability.js`
- Function: `spamProbability`
  - Parameters:
    - `messages`: An array of strings.
  - Returns: An array of numbers.
