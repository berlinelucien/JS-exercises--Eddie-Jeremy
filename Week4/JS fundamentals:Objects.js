/** Hello, object */
// create an empty object
let user = {}

// add the property name with the value John
user.name = 'John'
console.log(user) // {name: 'John'}
console.log(user.name); // John

// add the property surname with the value Smith
user.surname = 'Smith'
console.log(user.surname); // Smith

// change the value of the name to Pete
user.name = 'Pete'
console.log(user.name); // Pete
console.log(user) // {name: 'Pete', surname: 'Smith'}

// remove the property name from the object
delete user.name
console.log(user);


/** Check for emptiness */
// Write the function isEmpty(obj) which return s true if the 
// object has no properties, false otherwise