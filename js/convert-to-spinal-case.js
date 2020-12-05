/**
 * spinalCase
 * @param {String} str string to Be_ converted
 * @return {String} str-in-spinal-case
 */
const spinalCase = (str) => {
    let searchForUpperCase = /([A-Z]{1})/g;
    let replaceUpperCaseWith = ' $&';
    let newStr = str.replaceAll(searchForUpperCase, replaceUpperCaseWith);

    let searchForChars = /,|-|\.|_/g;
    let replaceCharsWith = '';
    newStr = newStr.replaceAll(searchForChars,replaceCharsWith)
    
    newStr = newStr.toLowerCase().trim();

    let searchForSpaces = /\s+/g;
    let replaceSpacesWith = '-';
    newStr = newStr.replaceAll(searchForSpaces,replaceSpacesWith);

    console.log(newStr);
    return newStr;
}

/**
 * checker
 * @param {String} result actual test result
 * @param {String} expectation expected test result
 * @return {String} pass or fail
 */
const checker = (result = '',expectation = '') => {
    if (result.length !== expectation.length) {
        return "FAIL";
    }

    return result === expectation ? "PASS" : "FAIL";
}

/**
 * Tests for spinalCase
 */
const testArr = [
    {
        "str": "This Is Spinal Tap",
        "exp": "this-is-spinal-tap"
    },
    {
        "str": "thisIsSpinalTap",
        "exp": "this-is-spinal-tap"
    },
    {
        "str": "TheAndyGriffith_Show",
        "exp": "the-andy-griffith-show"
    },
    {
        "str": "Teletubbies say Eh-oh",
        "exp": "teletubbies-say-eh-oh"
    },
    {
        "str": "AllThe-small Things",
        "exp": "all-the-small-things"
    }
];

let resArr = [];

testArr.forEach((obj) => {
    resArr.push(spinalCase(obj.str) === obj.res ? "PASS" : "FAIL");
});

const str1 = "This Is Spinal Tap";
const str2 = "thisIsSpinalTap";
const str3 = "TheAndyGriffith_Show";
const str4 = "Teletubbies say Eh-oh";
const str5 = "AllThe-small Things";

let expectation1 = "this-is-spinal-tap";
let expectation2 = "this-is-spinal-tap";
let expectation3 = "the-andy-griffith-show";

let result1 = spinalCase(str1);
let result2 = spinalCase(str2);
let result3 = spinalCase(str3);

console.log(checker(result1,expectation1));
console.log(checker(result2,expectation2));
console.log(checker(result3,expectation3));
