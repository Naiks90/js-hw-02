// const message = ' How to sale earn fast money?';
// const spam = 'spam';
// const sale = 'sale';

// let messageLowerCase = message.toLowerCase();

// console.log(messageLowerCase.includes(spam || sale));

const checkForSpam = function (message) {
  const spam = 'spam';
  const sale = 'sale';
  const LoweMessage = message.toLowerCase();
  return LoweMessage.includes(spam) || LoweMessage.includes(sale)
    ? true
    : false;
};
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
