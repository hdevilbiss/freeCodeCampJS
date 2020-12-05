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
 * testArr
 * an array containing strings,
 * and their expected results from spinalCase
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
    resArr.push(spinalCase(obj["str"]) === obj["exp"] ? "PASS" : "FAIL");
});

resArr.forEach(result => console.log(result));
