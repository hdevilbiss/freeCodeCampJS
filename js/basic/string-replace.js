/**
 * String.replace using only string literals.
 *
 * Replace all instances of the string "perch"
 * with the string "chair".
 */
let str1 = "The calico cat sits on a perch and stares out the back door.";
console.log(str1.replace("perch", "chair"));

/**
 * String.replace using regex
 * and special replacement patterns.
 *
 * Add dollar signs to the ticket prices.
 * Then, add a comma to the adult ticket price.
 */
let str2 = "The tickets cost 1000 for adults and 540 for up to 3 children.";

let regex1 = /\d+[0]+/g;
str2 = str2.replace(regex1, "$$$&");
console.log(str2);

let regex2 = /[0]{3}/g;
console.log(str2.replace(regex2, ",$&"));
