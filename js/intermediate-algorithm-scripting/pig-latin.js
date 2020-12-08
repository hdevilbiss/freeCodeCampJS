/**
 * translatePigLatin
 * @param {String} str to be converted
 * @return {String} str but pig latin
 */
const translatePigLatin = (str) => {
    let vowelRegex = /^[aeiouy]/;
    let newStr = '';
    
    if ( vowelRegex.test(str) === true ) {
        newStr = str.concat('way')
    }
    else {
        let firstLetter = str.slice(0,1);
        newStr = newStr.concat(str.substring(1),firstLetter,'ay');
    }
    console.log(`newStr:${newStr}`);
    console.log(`str:${str}`);
    return newStr;
}

console.log(translatePigLatin("consonant") === "onsonantcay")
console.log(translatePigLatin("california") === "aliforniacay")
console.log(translatePigLatin("algorithm") === "algorithmway")
console.log(translatePigLatin("glove") === "oveglay")
console.log(translatePigLatin("schwartz") === "artzschway")