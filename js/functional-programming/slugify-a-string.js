/**
 * urlSlug
 * @param {string} title 
 * @return {string} slugified-string
 */
function urlSlug(title) {

    let regex = /\s|,|-|\./;
    let arr = title.toLowerCase().split(regex);

    console.log(arr);

    /**
     * Remove empty entries
     */
    arr.forEach((val,idx,arr) => {
        if (val === '') {
            arr.splice(idx,1);
        }
    });

    return arr.join("-");

}

/**
 * Tests for urlSlug
 */
console.log(urlSlug("My Cats just Love bIrds"));
console.log(urlSlug(" Winter Is  Coming"));