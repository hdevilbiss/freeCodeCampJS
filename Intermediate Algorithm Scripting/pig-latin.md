# Intermediate Algorithm Scripting: Pig Latin

This oneway was a bit ickytray! I solved it at first using three different regular expressions, nest `if` statements, and multiple intermediary variables. Messy, but it works!

First, I'll explain how the messy solution works. After that, I'll try to simplify it.

## Rules

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
- If a word begins with a consonant cluster, but does not contain a vowel, then just add "ay" to the end.

### Original Solution

1. Create three regular expression variables to check whether a string:
   1. Starts with a vowel: `aeiouy`
   1. Starts with 1 or more consonants.
   1. Has any regular vowels (not y).
      _For this exercise, y was not considered a vowel unless at the beginning of a sentence._
1. First, test whether the string begins with a vowel. If true, then simply add on "way" to the end of the return string.
1. For strings starting with consonants, several additional helper variables were created.
   1. A string to hold the consonant or consonant cluster at the beginning of the string.
   1. An integer to remember how long the consonant cluster is.
   1. An array containing each letter in the string.
   1. An empty array to hold vowels.
1. Next, the consonant clusters at the beginning of the string gets pulled out using the `match` regex method.
1. The length of this cluster gets determined.
1. Each letter in the array gets checked; if it is a vowel, then add it to the vowel array.
1. Finally, the length of the array of vowels gets checked.
   - If no vowels, then simply add "ay" to the end of the string.
   - If there are vowels, then the `substring` methods gets used on the string with only one parameter: the length of the consonant cluster. This targets the part of the string which is not the consonant cluster.
   - Next, this partial string gets concatenated to the the consonant cluster, followed by "ay".

```javascript
/**
 * translatePigLatin
 * @param {String} str to be converted
 * @return {String} str but pig latin
 */
const translatePigLatin = (str) => {
  let startsWithVowelRegex = /^[aeiouy]/;
  let startsWithNotAVowelRegex = /^[^aeiouy]{1,}/;
  let justVowelsRegex = /[aeiou]/;
  let newStr = "";

  if (startsWithVowelRegex.test(str) === true) {
    newStr = str.concat("way");
  } else {
    let strOfStartingConsonants = "";
    let startingConsonantLength = 0;
    let strAsArray = str.split("");
    let arrOfVowels = [];

    strOfStartingConsonants = str.match(startsWithNotAVowelRegex)[0];
    startingConsonantLength = strOfStartingConsonants.length;
    console.log(`strOfStartingConsonants:${strOfStartingConsonants}`);

    strAsArray.forEach((letter) => {
      if (justVowelsRegex.test(letter) === true) arrOfVowels.push(letter);
    });

    if (arrOfVowels.length === 0) {
      newStr = str.concat("ay");
    } else {
      newStr = newStr.concat(
        str.substring(startingConsonantLength),
        strOfStartingConsonants,
        "ay"
      );
    }
  }

  console.log(`str:${str}`);
  console.log(`newStr:${newStr}`);

  return newStr;
};

console.log(translatePigLatin("consonant") === "onsonantcay");
console.log(translatePigLatin("california") === "aliforniacay");
console.log(translatePigLatin("algorithm") === "algorithmway");
console.log(translatePigLatin("glove") === "oveglay");
console.log(translatePigLatin("schwartz") === "artzschway");
console.log(translatePigLatin("rhythm") === "rhythmay");
```

### Optimized Solution

```javascript

```
