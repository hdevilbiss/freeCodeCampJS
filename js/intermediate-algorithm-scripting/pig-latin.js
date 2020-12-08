/**
 * translatePigLatin
 * @param {String} str to be converted
 * @return {String} str but pig latin
 */
const translatePigLatin = (str) => {
    let vowelRegex = /^[aeiouy]/;

    let newStr = '';

    

    vowelRegex.test(str) === true
        ? newStr = str.concat('way')
        : newStr = str.concat(str,'ay');

    console.log(`newStr:${newStr}`)
}

console.log(translatePigLatin("consonant") === "onsonantcay")
console.log(translatePigLatin("california") === "aliforniacay")
console.log(translatePigLatin("algorithm") === "algorithmway")