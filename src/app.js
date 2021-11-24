const spamProbabilities = require('./spamProbabilities');
const textMessages = require('./data/textMessages.json');

// eslint-disable-next-line no-console
textMessages.forEach((message) => console.log(spamProbabilities(message)));
