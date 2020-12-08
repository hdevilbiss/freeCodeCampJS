# Intermediate Algorithm Scripting: Pig Latin

This one way a bit tricky! I solved it at first using three different regular expressions, nest `if` statements, and multiple intermediary variables.

## Rules

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
- If a word begins with a consonant cluster, but does not contain a vowel, then just add "ay" to the end.

### Original Solution

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
