/**
 * whatIsInAName
 * @param {Array} collection of objects
 * @param {Object} source object to find in collection
 * @return {Object} the object in which source was found
 */
const whatIsInAName = (collection,source) => {
    
    collection.forEach(obj => {
        for (let key in obj) {
            //console.log(`${key}: ${obj[key]}`);
            if (source[key] === obj[key]) {
                console.log(`Match! ${key}: ${obj[key]}`);
                console.dir(obj);
            }
            else {
                console.log(`No match!`);
            }
        }
    });
};
  
/**
 * Tests for whatIsInAName
 */
let arrOfNames = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];

console.log(whatIsInAName(arrOfNames, { last: "Capulet" }));//[{ first: "Tybalt", last: "Capulet" }]
  