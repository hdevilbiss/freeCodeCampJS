/**
 * pairElement
 * @param {String} str of lonely singles
 * @return {Array} array of paired singles
 */
const pairElement = (str) => {
    let newArr = str.split("");
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] === "G"
            ? newArr[i] = ["G","C"]
            : newArr[i] === "C"
                ? newArr[i] = ["C","G"]
                : newArr[i] === "A"
                    ? newArr[i] = ["A","T"]
                    : newArr[i] = ["T","A"];
    }
    return newArr;
}

console.log(pairElement("GCG"))
console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))
