/**
 * destroyer
 * @param {Array} arr
 * @return {Array} arr but minus vals from arguments object
 */
function destroyer(arr) {
    let newArr = [];
    let testArr = [];

    for (let i = 1; i < arguments.length; i++) {
        testArr.push(arguments[i]);
    }

    newArr = arr.filter(val => {
        return !testArr.includes(val);
    });

    console.log(newArr);

    return newArr;
}

/**
 * Tests for destroyer
 */
destroyer([1, 2, 3, 1, 2, 3], 2, 3);//[1,1]
destroyer(['cat','bat','mat','tat','what'],'what');//['cat','bat','mat','tat']
  