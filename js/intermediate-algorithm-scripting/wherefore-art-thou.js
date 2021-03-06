/**
 * whatIsInAName
 * @param {Array} collection of objects
 * @param {Object} source object to find in collection
 * @return {Array} array of matching objects
 */
const whatIsInAName = (collection = [],source = {}) => {
    let sourceKeys = Object.keys(source);

    return collection.filter(obj => {
        for (let i = 0; i < sourceKeys.length; i++) {

            if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
};
  

/**
 * checker
 * @param {Array} test actual test result
 * @param {Array} result expected test result
 * @return {String} pass or fail
 */
const checker = (test = [],result = []) => {
    if (test.length !== result.length) {
        return "FAIL";
    }

    let errors = [];
    
    test.forEach((val,idx) => {
        for (let key in val) {
            if (!result[idx].hasOwnProperty(key) || !result[idx][key] === val[key]) {
                errors.push("f");
            }
        }
    });

    return errors.length === 0
        ? "PASS"
        : "FAIL";
 }

const arrOfNames = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
const arrOfSnacks = [{ "apple": 1, "banana": 2 }, { "banana": 2 }, { "apple": 1, "banana": 2, "cookie": 2 }];

let nameTestResult = whatIsInAName(arrOfNames, { last: "Capulet" });
let snackTestResult = whatIsInAName(arrOfSnacks, { "apple": 1, "banana": 2 });

let nameExpectedResult = [{ first: "Tybalt", last: "Capulet" }];
let snackExpectedResult = [{ "apple": 1, "banana": 2 }, { "apple": 1, "banana": 2, "cookie": 2 }];

// Show actual results
console.log(nameTestResult);
console.log(snackTestResult);

// Run tests
console.log(checker(nameTestResult,nameExpectedResult))
console.log(checker(snackTestResult,snackExpectedResult))
  