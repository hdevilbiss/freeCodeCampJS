/**
 * pairElement
 * @param {String} str of lonely singles
 * @return {Array} array of paired singles
 */
const pairElement = (str) => {
    let newArr = str.split("");
    newArr.forEach((letter,idx) => {
        letter === "G"
            ? newArr[idx] = ["G","C"]
            : letter === "C"
                ? newArr[idx] = ["C","G"]
                : letter === "A"
                    ? newArr[idx] = ["A","T"]
                    : newArr[idx] = ["T","A"];
    });
    return newArr;
}

console.log(pairElement("GCG"))
console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))
