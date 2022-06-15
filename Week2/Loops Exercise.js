// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("exercise 1");
let i = 1
while (i <= 5) {
    console.log(i);
    i += 1;
}
// output [1,2,3,4,5]
console.log("=========");

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("exercise 2");
let count = 1;
do {
    console.log(count);
    count += 1;
} while (count <= 5);
console.log("=========");


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("exercise 3");
for (i = 1; i <= 5; i++){
    console.log(i);
}
console.log("=========");

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log("exercise 4");
console.log("for loop")
for (i = 10; i >= 1; i--){
    console.log(i);
}

console.log("while loop");
let number = 10;
while (number >= 1) {
    console.log(number);
    number--;
}

console.log("do-while loop");
let num = 10;
do {
  console.log(num);
  num -=1;
} while (num >= 1);

console.log("=========");

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log("exercise 5");
console.log("for loop");
for (i = 7; i <= 27; i++){
    console.log(i);
}

console.log("while");
let input = 7;
while (input <= 27) {
    console.log(input);
    input += 1;
}

console.log("do-while");
let num3 = 7;
do {
    console.log(num3);
    num3++;
} while (num3 <= 27)
console.log("===============")

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log("exercise 6");
console.log("for loop");
for (countTen = 10; countTen <= 100; countTen+=10){
    console.log(countTen);
}

console.log("while loop");
let countByTen = 10;
while (countByTen <= 100) {
    console.log(countByTen);
    countByTen += 10;
}

console.log("do-while loop");
let tensCount = 10;
do {
    console.log(tensCount);
    tensCount += 10;
} while (tensCount <= 100);

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// comment:
// the while counterFour < 2 never breaks the loop because
// the condition is never met. The counterFour started at 1 which is less than 2, and decrement. 
console.log("exercise 7");

let counterFour = 1;
while (counterFour >= -100) {
  console.log(counterFour);
  counterFour--;
}

console.log("=============");

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
console.log("exercise 8");
let favoriteNum = 12;
for (i = 0; i <= favoriteNum; i++){
    console.log(i);
}

console.log("=============");
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
console.log("exercise 9");
let favorite = 12;
for (i = 0; i <= 100; i++) {
    if (i == favorite) {
      console.log(favorite + " is my favorite number!")
    } else {
        console.log(i + " not my favorite number")
  }
}

console.log("=============");


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a 
console.log("exercise 10");
/**
 * I would use a for loop when comparing numbers or iterating 
 * thru the array.
 * The while loop would be used when I want a condition to be 
 * true/false and exceute something if it is true
 */
console.log("=============");



// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
console.log("exercise 11");
console.log("***********************************");


for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
  console.log("counting down from", outsideCounter);
    for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter-- ) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// easy medium , just had to write things down so i wont get lost in my code
// used references for while/do while loop

// Email your file to us or commit your file to GitHub and email us a link.
