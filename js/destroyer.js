/**
 * destroyer
 * @param {Array} arr
 * @return {Array} arr but minus vals from arguments object
 */
function destroyer(arr) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(`arguments at i = ${i}: ${arguments[i]}`);
    }
    return arr;
}

/**
 * Tests for destroyer
 */
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer(['cat','bat','mat','tat','what'],'what');
  