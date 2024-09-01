const palindromes = function (string) {
     // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedString = string
  .replace(/[^a-zA-Z0-9]/g, '') // Remove non-alphanumeric characters
  .toLowerCase(); // Convert to lowercase

// Reverse the normalized string. split to an array, reverse array. join back to a string.
const stringBackward = normalizedString.split('').reverse().join('');

// Check if the normalized string is the same forwards and backwards
return normalizedString === stringBackward;
};

console.log(palindromes("tat"));

// Do not edit below this line
module.exports = palindromes;
