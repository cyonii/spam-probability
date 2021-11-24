# Spam Probability

This repository contains a routine for assigning spam probabilities to a given set of text messages.

The probability is ranged from 0 to 1, where 0 is no spam and 1 is spam.

## Approach

It loops through each text in the given set of messages and compares each to the rest of the messages, and then comapare their similarity using the [Dice Coefficient](https://en.wikipedia.org/wiki/Dice%27s_coefficient), which is a measure of similarity between two strings. It saves the comparisons in an array, and then calculates the average of the comparisons, which is the probability of the text being spam.

This is done for each text in the given set of messages, and then an array of the probabilities for each text is returned.

## Code

- File path: `src/spamProbability.js`
- Function: `spamProbability`
