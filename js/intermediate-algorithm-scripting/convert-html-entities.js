/**
 * Convert the characters &, <, >, " and ' to HTML
 * convertHTML
 * @param {String} str to convert
 * @return {String} str but without symbols
 */
const convertHTML = (str) => {
  const convertObj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
  }
  return str.replace()
}

convertHTML("Dolce & Gabbana");
