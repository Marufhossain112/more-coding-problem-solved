const name = "Maruf";
console.log(typeof name); /* returns string */
const age = 23;
console.log(typeof age); /* returns number */
const married = false;
console.log(typeof married); /* returns boolean */
const student = { id: 234, address: "bonsail tola", work: "unemployee" };
console.log(typeof student); /* returns object */
const priceList = [32, 35, 76, 43, 89, 65];
console.log(typeof priceList); /* returns object */
//! check array using Array.isArray function
console.log(Array.isArray(priceList)); /* returns true */
console.log(Array.isArray(student)); /* returns false */
function add(num1, num2) {
  return num1 + num2;
}
console.log(typeof add); /* returns function */
