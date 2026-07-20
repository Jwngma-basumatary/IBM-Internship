//Part A: Conditions and Operators
// 1. Take a number as input. If the number is divisible by 2, print 'Even'; otherwise print 'Odd'.
let num = 5;
if (num %2===0){
    console.log("Even");
}else{
    console.log("Odd")
}
//output: odd

//2. Take a number as input. If it is divisible by 3, print 'Fizz'. If it is divisible by 7, print 'Buzz'. If it is divisible by both 3 and 7, print 'FizzBuzz'.

const number= 10;
for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 7 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//output: 
// 1
// 2
// Fizz
// 4
// 5
// Fizz
// Buzz
// 8
// Fizz
// 10


//3. Take three numbers and print the greatest number among them.

function findGreatest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}    
    findGreatest(10, 45, 23);// calling the function 
//output: num3


//4. Check whether a student has passed or failed. Marks greater than or equal to 40 means Pass.

let marks = 50;
if (marks >=40 ){
    console.log("Pass")
}else{
    console.log("Fail")
}
//output:pass

//5. Predict the output of logical operators (&& and ||).
//0 && "Apple" :Output: 0
//false || "Default": Output: "Default" 

//Part B: Strings
//1. Print all vowels from the string 'JavaScript is awesome'.
const str = "JavaScript is awesome";
let vowels = "";

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels += char;
  }
}

console.log(vowels);
//output:aaiiaeoe

// 2. Count the number of vowels in 'Masai School'.
const Str = "Masai School";
let count = 0;

for (let i = 0; i < Str.length; i++) {
  const char = Str[i].toLowerCase(); 
  
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    count++; // Adds 1 to the counter every time a vowel is found
  }
}

console.log("Total vowels:", count); // Output: Total vowels: 4


// 3. Print every character of 'Full Stack Development' using a loop.
const phrase = "Full Stack Development";
for (let i = 0; i < phrase.length; i++) {
  console.log(phrase[i]);
}
//output:
// F
// u
// l
// l
 
 // S
// t
// a
// c
// k
 
// D
// e
// v
// e
// l
// o
// p
// m
// e
// n
// t
 

//4. Count the number of spaces in 'We are learning JavaScript'.

const Spaces = "'We are learning JavaScript";
let spaceCount = 0;
for (let i = 0; i < Spaces.length; i++) {
    // If the current character is a space, add 1 to our count
    if (Spaces[i] === " ") {
        spaceCount++;
    }
}

console.log(spaceCount);
//output: 3


// 5. Reverse the string 'Hello'.

// Remove 'let' so you are updating the old variable instead of recreating it
mystr = 'Hello'; 
let reversedStr = "";

for (let i = mystr.length - 1; i >= 0; i--) {
  reversedStr += mystr[i];
}

console.log(reversedStr); //output: olleH

//Part C: Loops
//1. Using a for loop, print numbers from 1 to 20.

for (let i=1; i <=20; i++) {
  console.log(i);   // output: 1
}
                    //2
                    //3
                    //4
                    //5
                    //6
                    //7
                    //8
                    //9
                    //10
                    //11
                    //12
                    //13
                    //14
                    //15
                    //16
                    //17
                    //18
                    //19
                    //20

//2. Using a while loop, print numbers from 20 to 1.                     

let x = 20;            //output:20
while (x >= 1){                //19
  console.log(x);              //18
  x--;                         //17
}                              //16
                               //15
                               //14
                               //13
                              //12
                               //11
                              //10
                              //9
                              //8
                              //7
                              //6
                              //5
                             //4
                             //3
                             //2
                             //1
// 3. Print the multiplication table of 7.
const tableNum = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

//output:
//7 x 1 = 7
//7 x 2 = 14
//7 x 3 = 21
//7 x 4 = 28
//7 x 5 = 35
//7 x 6 = 42
//7 x 7 = 49
//7 x 8 = 56
//7 x 9 = 63
//7 x 10 = 70

//4. Print all even numbers from 1 to 50.

{
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// output:
//2
//4
//6
//8
//10
//12
//14
//16
//18
//20
//22
//24
//26
//28
//30
//32
//34
//36
//38
//40
//42
//44
//46
//48
//50

//5.Find the sum of all numbers from 1 to 100.

let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log("Sum of numbers from 1 to 100:", total);
// output:Sum of numbers from 1 to 100: 5050


// Part D: Arrays and more loops
// 1. Create an array [10, 20, 30, 40, 50] and perform array operations: push, pop, length, update values.
const numbers = [10, 20, 30, 40, 50];
console.log("Original array:", numbers);

numbers.push(60);
console.log("After push(60):", numbers);

const poppedValue = numbers.pop();
console.log("Popped value:", poppedValue);
console.log("After pop():", numbers);

console.log("Array length:", numbers.length);

numbers[2] = 35; // update the value at index 2
console.log("After update numbers[2] = 35:", numbers);
//Output:
//Original array: [ 10, 20, 30, 40, 50 ]
//After push(60): [ 10, 20, 30, 40, 50, 60 ]
//Popped value: 60
//After pop(): [ 10, 20, 30, 40, 50 ]
//Array length: 5
//After update numbers[2] = 35: [ 10, 20, 35, 40, 50 ]

// 2. Using a for...of loop, print all elements of ['Apple', 'Mango', 'Banana', 'Orange'].
const fruits = ["Apple", "Mango", "Banana", "Orange"];
for (const fruit of fruits) {
  console.log(fruit);
}
//output:
//Apple
//Mango
//Banana
//Orange

// 3. Find the largest number in [23, 56, 89, 12, 100, 45].
const values = [23, 56, 89, 12, 100, 45];
let largest = values[0];
for (const value of values) {
  if (value > largest) {
    largest = value;
  }
}
console.log("Largest number:", largest);
// output: Largest number: 100

// 4. Find the sum of all elements in [5, 10, 15, 20, 25].
const sumValues = [5, 10, 15, 20, 25];
let sum = 0;
for (const numValue of sumValues) {
  sum += numValue;
}
console.log("Sum of elements:", sum);
//Sum of elements: 75

// 5. Count the number of even numbers in [2, 5, 8, 11, 14, 17, 20].
const evenArray = [2, 5, 8, 11, 14, 17, 20];
let evenCount = 0;
for (const numValue of evenArray) {
  if (numValue % 2 === 0) {
    evenCount++;
  }
}
console.log("Even numbers count:", evenCount);

// output: Even numbers count: 4

// Part E: Objects and for...in
const student = {
  name: "Aman",
  age: 18,
  class: "12th",
  school: "ABC High School"
};

// 1. Print all keys from a student object using for...in.
for (const key in student) {
  console.log(key);
}
// output:
// name
// age
// class
// school

// 2. Print all values from the object.
for (const key in student) {
  console.log(student[key]);
}
// output:
// Aman
// 18
// 12th
// ABC High School

const marks = {
  math: 85,
  english: 78,
  science: 92,
  history: 65,
  geography: 74
};

// 3. Find the subject with the minimum marks from a marks object.
let minSubject = null;
let minMark = Infinity;
for (const subject in marks) {
  if (marks[subject] < minMark) {
    minMark = marks[subject];
    minSubject = subject;
  }
}
console.log("Subject with minimum marks:", minSubject, minMark);
// output: Subject with minimum marks: history 65

// 4. Count the total number of properties in an object.
let propertyCount = 0;
for (const key in marks) {
  propertyCount++;
}
console.log("Total properties in marks object:", propertyCount);
// output: Total properties in marks object: 5

// 5. Predict the output of iterating through an object using for...in.
// The for...in loop iterates over enumerable property keys in the object.
// For example, iterating over student prints each property name one by one.
// output prediction:
// name
// age
// class
// school

// Part F: Functions
// 1. Create a function that takes two numbers and prints their sum.
function printSum(a, b) {
  console.log("Sum:", a + b);
}
printSum(12, 8);
// output: Sum: 20

// 2. Create a function that takes a number and prints its square.
function printSquare(n) {
  console.log("Square:", n * n);
}
printSquare(7);
// output: Square: 49

// 3. Create an arrow function that takes three numbers and prints their average.
const printAverage = (x, y, z) => {
  const avg = (x + y + z) / 3;
  console.log("Average:", avg);
};
printAverage(10, 20, 30);
// output: Average: 20

// 4. Create a function that takes a string and prints its length.
function printLength(text) {
  console.log("Length:", text.length);
}
printLength("JavaScript");
// output: Length: 10

// 5. Create a function that takes two numbers and prints the greater number.
function printGreater(num1, num2) {
  if (num1 > num2) {
    console.log("Greater number:", num1);
  } else if (num2 > num1) {
    console.log("Greater number:", num2);
  } else {
    console.log("Both numbers are equal:", num1);
  }
}
printGreater(25, 18);
// output: Greater number: 25

// Part G: Variables (let, const, var)
// 1. Predict the output of using a variable before declaration with var.
console.log("var before declaration:", hoistedVar);
var hoistedVar = 5;
// output prediction: var before declaration: undefined

// 2. Predict the output of using a variable before declaration with let.
// console.log("let before declaration:", hoistedLet);
// let hoistedLet = 10;
// output prediction: ReferenceError: Cannot access 'hoistedLet' before initialization

// 3. Predict the output when modifying a const variable.
const constantValue = 20;
// constantValue = 25; // This line would throw TypeError: Assignment to constant variable.
console.log("const original value:", constantValue);
// output: const original value: 20

// 4. Write the difference between var, let and const.
// var: function-scoped or globally scoped, allows hoisting with undefined, can be re-declared and updated.
// let: block-scoped, not hoisted in the same way (temporal dead zone), can be updated but not re-declared in the same scope.
// const: block-scoped, not hoisted in the same way, cannot be updated or re-declared in the same scope, must be initialized at declaration.

// Challenge Questions
// 1. Find the second largest number in an array.
const numbersArray = [23, 56, 89, 12, 100, 45];
let largestNum = -Infinity;
let secondLargest = -Infinity;
for (const value of numbersArray) {
  if (value > largestNum) {
    secondLargest = largestNum;
    largestNum = value;
  } else if (value > secondLargest && value !== largestNum) {
    secondLargest = value;
  }
}
console.log("Second largest number:", secondLargest);
// output: Second largest number: 89

// 2. Count vowels and consonants in the string 'Programming'.
{
  const str = "Programming";
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vowels++;
    } else if (char >= 'a' && char <= 'z') {
      consonants++;
    }
  }

  console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
}

// output:
// Vowels: 3
// Consonants: 8

// 3. Create a student object containing name, age, university, subjects and hobbies, then print all information.
const studentInfo = {
  name: "Jwngma",
  age: 19,
  university: "AdtU University",
  subjects: ["Math", "Physics", "Computer Science"],
  hobbies: ["Reading", "Drawing", "Coding"]
};
console.log("Student information:", studentInfo);
// output: Student information: { name: 'Jwngma', age: 19, university: 'AdtU University', subjects: [ 'Math', 'Physics', 'Computer Science' ], hobbies: [ 'Reading', 'Drawing', 'Coding' ] }

// 4. Write a function that checks whether a number is prime or not.
function isPrime(numberToCheck) {
  if (numberToCheck <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
    if (numberToCheck % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("Is 17 prime?", isPrime(17));
console.log("Is 18 prime?", isPrime(18));
// output:
// Is 17 prime? true
// Is 18 prime? false

// 5. Write a function that reverses a string.
function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}
console.log("Reversed 'Hello':", reverseString("Hello"));
// output: Reversed 'Hello': olleH

// 6. Create an array of students and print only those whose names start with 'A'.
const studentList = [
  { name: "Aman", age: 19 },
  { name: "Riya", age: 21 },
  { name: "Arjun", age: 20 },
  { name: "Sana", age: 22 },
  { name: "Aisha", age: 18 }
];
for (const student of studentList) {
  if (student.name.startsWith("A")) {
    console.log("Student name starts with A:", student.name);
  }
}
// output:
// Student name starts with A: Aman
// Student name starts with A: Arjun
// Student name starts with A: Aisha









