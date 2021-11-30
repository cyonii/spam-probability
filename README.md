# Spam Probability

This repository contains a routine for assigning spam probabilities to a given set of text messages. It compares each text to the rest of the corpus, and assigns a probability of spam based on the frequency of spam and non-spam messages in the corpus.

The probability is ranged from 0 to 1, where 0 is no spam and 1 is certain spam.

## Approach

It uses the [Dice Coefficient](https://en.wikipedia.org/wiki/Dice%27s_coefficient) algorithm to calculate the similarity between two strings after getting the intersection of the [n-grams](https://en.wikipedia.org/wiki/N-gram) of the strings.

> Formular to calculate similarity based on Dice Coefficient:

```math
2 * size(intersection(bigrams(s1), bigrams(s2))) / (size(bigrams(s1)) + size(bigrams(s2)))
```

It loops through the given set of messages and compare the similarity of the current text to the rest in the set. It then makes an array of the similarities between the current text and the rest, computes the average of the similarities, which is the probability of the current text being spam.

The function returns an array of spam probabilities of each text in the set.

## Code

- File path: `src/spamProbability.js`
- Function: `spamProbability`
  - Parameters:
    - `texts`: An array of strings.
  - Returns: An array of numbers ranging from 0 to 1 representing the spam probabilities of each text in the set.

## Prerequisite

Make sure to have [Node.js](http://nodejs.org) installed on your machine.

- Clone the repository
- Run `npm install` to install dependencies.

## Example Cases

To run the example included in this repository:

- Run `node src/app.js`, the result should be outputed to your console.

## Test

The project has been tested using [Jest](https://github.com/facebook/jest)
To run the test suits, simpley run `npm test`

## Documentation

The project has been documented from doc comments using [JSDoc](https://jsdoc.app). To see the generated documentation, navigate to `docs/` directory and open `index.html` in your browser.

To generate the documentation after making changes, run:
`npm run doc`
