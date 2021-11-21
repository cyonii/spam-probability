# Spam Probability

This repository contains a routine for assigning spam probabilities to a given set of text messages.

The probability is ranged from 0 to 1, where 0 is no spam and 1 is spam.

## Approach

It uses the Levenshtein algorithm to measure the distance between two strings, computes their similarity, and then assigns spam probabilities to given set of texts messages by comparing each message to the rest in the set.

## Code

- Path: `src/app.js`
- Function: `spamProbability`
