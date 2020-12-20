/**
 * Convert the characters &, <, >, " and ' to HTML
 * convertHTML
 * @param {String} str to convert
 * @return {String} str but without symbols
 */
const convertHTML = (str) => {
  const charRegex = /(&|<|>|"|')/;
  const chart = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  }
  return str.split(charRegex).map(val => {
    return chart[val] === undefined
      ? val
      : chart[val]
  }).join('');
}

console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
console.log(convertHTML('Stuff in "quotation marks"'))
