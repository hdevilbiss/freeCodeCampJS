/**
 * urlSlug
 * @param {string} title 
 * @return {string} slugified-string
 */
function urlSlug(title) {

    return title.toLowerCase().split(/\s|,|-|\./).join("-");

}

/**
 * Tests for urlSlug
 */
console.log(urlSlug("My Cats just Love bIrds"));
console.log(urlSlug(" Winter Is  Coming"));