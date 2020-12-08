/**
 * translatePigLatin
 * @param {String} str to be converted
 * @return {String} str but pig latin
 */
const translatePigLatin = (str) => {
    let startsWithVowelRegex = /^[aeiouy]/;
    let startsWithNotAVowelRegex = /^[^aeiouy]{1,}/;
    let justVowelsRegex = /[aeiou]/;
    let newStr = '';
    
    if ( startsWithVowelRegex.test(str) === true ) {
        newStr = str.concat('way')
    }
    else {
        let strOfStartingConsonants = '';
        let startingConsonantLength = 0;
        let strAsArray = str.split('');
        let arrOfVowels = [];

        strOfStartingConsonants = str.match(startsWithNotAVowelRegex)[0];
        startingConsonantLength = strOfStartingConsonants.length;
        console.log(`strOfStartingConsonants:${strOfStartingConsonants}`)

        strAsArray.forEach(letter => {
            if (justVowelsRegex.test(letter) === true) arrOfVowels.push(letter)
        });

        if (arrOfVowels.length === 0) {
            newStr = str.concat('ay')
        }
        else {
            newStr = newStr.concat(str.substring(startingConsonantLength),strOfStartingConsonants,'ay');
        }
    }
    
    console.log(`str:${str}`);
    console.log(`newStr:${newStr}`);
    
    return newStr;
}

console.log(translatePigLatin("consonant") === "onsonantcay")
console.log(translatePigLatin("california") === "aliforniacay")
console.log(translatePigLatin("algorithm") === "algorithmway")
console.log(translatePigLatin("glove") === "oveglay")
console.log(translatePigLatin("schwartz") === "artzschway")
console.log(translatePigLatin("rhythm") === "rhythmay")