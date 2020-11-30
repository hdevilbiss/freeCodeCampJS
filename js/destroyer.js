/**
 * destroyer
 * @param {Array} arr
 * @return {Array} arr but minus vals from arguments object
 */
function destroyer(arr) {
    arr.filter(val => {
        for (let i = 1; i < arguments.length; i++) {
            val !== arguments[i]
                ? console.log(`true, ${val} !== ${arguments[i]}`)
                : console.log(`false, ${val} == ${arguments[i]}`);
        }
    });
    console.log(arr);
}

/**
 * Tests for destroyer
 */
destroyer([1, 2, 3, 1, 2, 3], 2, 3);//[1,1]
destroyer(['cat','bat','mat','tat','what'],'what');//['cat','bat','mat','tat']
  