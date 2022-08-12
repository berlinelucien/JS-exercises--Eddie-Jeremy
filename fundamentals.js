// Write a function below that accepts a number as the only argument.
// The function should determine whether the number is divisible by 3,
// and return either true or false.
// Choose names that make the code easy to understand.

/**
input: take a number
output: return boolean (true/false)

steps: if else statement - condition if num divisible by 3 return true else return false
*/

function threes(num){
 
    if(num%3 === 0){
      return true
    } 
    else return false
  }
  
  
  console.log(threes(14),"false");
  console.log(threes(5),"false");
  console.log(threes(15), "true");
  console.log(threes(9), "true");
  console.log(threes(27), "true");
  
  console.log("************************");

// Write a function that takes a string as the argument.
// The function should return a number that is the number of characters in the string.
// Choose names that make the code easy to understand.

// input: string
// output: string number of characters in string

function numCharacter(word){
//let characters = word.split(" ");
let count = 0;

for (let i = 0 ; i < word.length;i++){
   // console.log(characters)
    if (word.charAt(i) != ''){
        count++
    }
}
return count
}
console.log(numCharacter("berline"), 7);
console.log(numCharacter("ann"), 3);
console.log(numCharacter("harry"), 5);

console.log("************************");


// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")


let arrNumbers = [1,2,3];
// Return the first item in the array (ex: 1)
let newNumbers = arrNumbers[0];
//Return the last item in the array (ex: 3)
let lastElement = arrNumbers[arrNumbers.length-1];
// Return the last item in the array (ex: 3)
arrNumbers.push(4);
// Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
arrNumbers.unshift(["a","b","c"]);
//console.log(newNumbers);
//console.log(lastElement);
console.log(arrNumbers);
// Return the first item from the first item in the array. (ex: "a")
console.log(arrNumbers[0][0]);


// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.
// let now = new Date(),
//     then = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate(),
//         0,0,0),
//     diff = now.getTime() - then.getTime(); // difference in milliseconds
function getMsSinceMidnight(d) {
    let e = new Date(d);
    return d - e.setHours(0,0,0,0);
  }
  
console.log(getMsSinceMidnight(new Date())); 