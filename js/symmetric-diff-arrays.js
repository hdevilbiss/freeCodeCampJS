/**
 * diffArray
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array} symmetric diff; only items NOT in both
 */
const diffArray = (arr1,arr2) => {
    let newArr = [];

    // Join the arrays
    let joinedArr = arr1.concat(arr2);

    // Filter the combined values
    newArr = joinedArr.filter(val => {
        return ((arr1.includes(val) && !arr2.includes(val)) || (!arr1.includes(val) && arr2.includes(val)));
    })

    return newArr;
};


/**
 * Tests for diffArray
 */
let numArr1 = [1, 2, 3, 5];
let numArr2 = [1, 2, 3, 4, 5];
let strArr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
let strArr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

console.log(diffArray(numArr1,numArr2));//[4]
console.log(diffArray(strArr1,strArr2));//["diorite", "pink wool"]