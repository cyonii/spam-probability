# Spam Probability

This repository contains a routine for assigning spam probabilities to a given set of text messages.

The probability is ranged from 0 to 1, where 0 is no spam and 1 is spam.

## Approach

It uses the [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm (also known as the edit distance) to calculate the distance between two strings and compute their similarity by dividing the distance by the length of the longer string, and subtracting the result from 1.

> Formular to calculate string similarity based on Levenshtein Distance:

```math
1 - (distance(s1, s2) / max(len(s1), len(s2)))
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
