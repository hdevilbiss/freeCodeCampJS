/**
 * spinalCase
 * @param {String} str string to Be_ converted
 * @return {String} str-in-spinal-case
 */
const spinalCase = (str) => {
    let searchForUpperCase = /([A-Z]{1})/g;
    let replaceUpperCaseWith = ' $&';
    let newStr = str.replaceAll(searchFor, replaceWith);
  
    let searchForChars = /|\s|,|-|\.|\_/g;
    let replaceChars = 
    newStr = newStr.toLowerCase();
    return newStr;
}

/**
 * Tests for spinalCase
 */
let str1 = "This Is Spinal Tap";
let str2 = "thisIsSpinalTap";
let str3 = "TheAndyGriffith_Show";

let result1 = spinalCase(str1);
let result2 = spinalCase(str2);
let result3 = spinalCase(str3);