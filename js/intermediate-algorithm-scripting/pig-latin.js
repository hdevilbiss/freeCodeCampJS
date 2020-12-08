/**
 * translatePigLatin
 * @param {String} str to be converted
 * @return {String} str but pig latin
 */
const translatePigLatin = (str) => {
    let startsWithVowelRegex = /^[aeiouy]/;
    let getConsonantsRegex = /^[^aeiouy]+/;
    let justVowelsRegex = /[aeiou]/;
    
    return startsWithVowelRegex.test(str) === true
        ? str.concat('way')
        : justVowelsRegex.test(str) === false
            ? str.concat('ay')
            : str.substring(str.match(getConsonantsRegex)[0].length).concat(str.match(getConsonantsRegex)[0],'ay')
}

console.log(translatePigLatin("consonant") === "onsonantcay")
console.log(translatePigLatin("california") === "aliforniacay")
console.log(translatePigLatin("algorithm") === "algorithmway")
console.log(translatePigLatin("glove") === "oveglay")
console.log(translatePigLatin("schwartz") === "artzschway")
console.log(translatePigLatin("rhythm") === "rhythmay")