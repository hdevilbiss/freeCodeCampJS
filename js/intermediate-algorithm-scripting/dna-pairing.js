/**
 * pairElement
 * @param {String} str of lonely singles
 * @return {Array} array of paired singles
 */
const pairElement = (str) => {
    let newArr = str.split("");
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === "G") {
            newArr[i] = ["G","C"];
        }
        else if (newArr[i] === "C") {
            newArr[i] = ["C","G"];
        }
        else if (newArr[i] === "A") {
            newArr[i] = ["A","T"];
        }
        else {
            newArr[i] = ["T","A"];
        }
    }
    return newArr;
}

console.log(pairElement("GCG"))
console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))