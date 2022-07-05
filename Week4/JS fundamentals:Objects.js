console.log("***** TASK 1 *******");
/** Hello, object */
// create an empty object
let user = {};

// add the property name with the value John
user.name = "John";
console.log(user); // {name: 'John'}
console.log(user.name); // John

// add the property surname with the value Smith
user.surname = "Smith";
console.log(user.surname); // Smith

// change the value of the name to Pete
user.name = "Pete";
console.log(user.name); // Pete
console.log(user); // {name: 'Pete', surname: 'Smith'}

// remove the property name from the object
delete user.name;
console.log(user);

console.log("***** TASK 2 *******");
/** Check for emptiness
 * Write the function isEmpty(obj) which return s true if the
 * object has no properties, false otherwise
 */
let schedule = {};
//alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
//alert ( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty());
console.log(isEmpty(schedule));

console.log("***** TASK 3 *******");
/** Sum object properties
 * Write the code to sum all salaries and store in the variable sum
 * Should be 390. If salaries is empty, then the result must be 0
 */
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// console.log(salaries);
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

console.log("***** TASK 4 *******");
/** Multiply numeric property values by 2
 * Create a function multiplyNumeric(obj) that multiplies all numeric
 * property values of obj by (2)
 */
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(menuItem){
for (let key in menuItem){
    if (typeof menuItem[key] == 'number'){
        menuItem[key] *= 2;
    } return menuItem   
}
}
console.log(multiplyNumeric(menu));