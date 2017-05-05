const piglatin = (str) => {
    // Immediately return if there are no letters to convert.
    if (!hasAnyLetter(str))
      return str;

    var words = str.match(/\S+/g) || [];

    var result = words.map(word => `${translate(word)}\u0020`);

    return capitalizeFirstLetter(result.join(""));
}

// check if the char is consonant using RegEx
function isConsonant(char) {
    return !/[aeiou]/.test(char);
}

function isVowelExist(str) {
  return str.match(/[aeiou]/gi);
}

function capitalizeFirstLetter(string) {
    var index = /[a-z]/i.exec(string).index;
    return `${string.substr(0, index)}${string.charAt(index).toUpperCase()}${string.slice(index + 1)}`;
}

function translate(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  // Check if the first character is a vowel
  if (str[0].match(regex) || !isVowelExist(str)) {
    pigLatin = handlePunctuation(`${str},way`, str);
  } else {
    // Find how many consonants before the firs vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);
    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = handlePunctuation(`${str.substr(vowelIndice)}${loweringCapitalizedFirstLetter(str.substr(0, vowelIndice))},ay` , str);
  }

  return isFirstLetterCapitalized(str) ? `${pigLatin.charAt(0).toUpperCase()}${pigLatin.slice(1)}` : pigLatin;
}

function hasAnyLetter(str) {
   return /[a-zA-Z]/.test(str);
}

function isFirstLetterCapitalized(str) {
  return /^[A-Z]/.test(str);
}

function loweringCapitalizedFirstLetter(str) {
  var firstLetterIndex = findIndexOfFirstLetter(str);
  return `${str.substr(0, firstLetterIndex)}${str.charAt(firstLetterIndex).toLowerCase()}${str.substr(firstLetterIndex + 1)}`;
}

function handlePunctuation(converted, original) {
  // First remove all the punctuations from the converted string.
  converted = converted.replace(/[.,:!?""]+/g, '');
  // Then if it starts with a punctuation, then keep it as is.
  var pigLatin = !!original.match(/^[.,:!?""]+/) ? `${original.charAt(0)}${converted}` : converted;

  // If it ends with punctuation, then keep is as is.
  pigLatin = !!original.match(/[.,:!?""]+$/) ? `${pigLatin}${original.match(/[.,:!?""]+$/)[0]}` : pigLatin;

  return pigLatin;
}

function findIndexOfFirstLetter(str) {
  return /[a-z]/i.exec(str).index;
}

export default piglatin;
