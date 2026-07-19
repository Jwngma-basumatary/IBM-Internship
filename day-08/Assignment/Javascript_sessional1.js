// console.log("Jwngma");
// console.log("Basumatary");

//Part 1: Variables and Data Types

let firstName = "Jwngma";
let lastName = "Basumatary";
console.log(firstName + " " + lastName);

//2. Create a variable age and store your age in it. Print the value and its data type.
let age = 19;
console.log(age);
console.log(typeof age);

//3. Create variables of type string, number, boolean, undefined, and null. Print their data types.
let str = "Hello";
let num = 10;
let bool = true;
let undef;
let nul = null;
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nul); 

//4. Create two numbers and print their sum, difference, product, and division.
let num1 = 20;
let num2 = 50;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//5. Create a variable price = 99.99 and print its data type.
let price = 99.99;
console.log(price);
console.log(typeof price);

//6. Predict the output of:
//console.log(typeof null)
//console.log(typeof undefined)

let nullVar = null;
let undefinedVar;
console.log(typeof nullVar,typeof undefinedVar);
// console.log(typeof undefinedVar);

// Part 2: Comparison Operators
//1. Create two variables and check ==, ===, !=, !==, >, <, >=, and <=.
let a = 10;
let b = 20;
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

//6. Predict the output of:
console.log(10=='10') // output: true
console.log(10==='10') // output: false

//3. Predict the output of:
console.log(null == undefined) // output: true
console.log(null === undefined) // output: false

// 4. Write a program to compare the ages of two people and print who is older.
let person1 = 18;
let person2 = 20;

if (person1 > person2) {
    console.log("person1 older");
} else if (person1 < person2) { 
    console.log("person2 is older");
}

//Part 3: Conditional Statements
//1. Write a program to check whether a number is positive or negative.
// Question 1: Positive, Negative, or Zero
{
    let num1 = -8; 

    if (num1 > 0) {
        console.log("Positive");
    } else if (num1 < 0) {
        console.log("Negative");
    }
}

//2. Write a program to check whether a student has passed or failed. Passing marks are 40.
let marks = 35;
if(marks >= 40){
    console.log("Passed");
} else {
    console.log("Failed");
}

//3. Write a program to find the larger number between two numbers.
let number1 = 70;
let number2 = 80;

if (number1 > number2) {
    console.log("number1 is larger");
} else {
    console.log("number2 is larger");
}

//4. Write a program to find the largest among three numbers.
let no1 = 10;
let no2 = 20;
let no3 = 30;
if (no1 > no2 && no1 > no3) {
    console.log("no1 is largest");
} else if (no2 > no1 && no2 > no3) {
    console.log("no2 is largest");
} else {
    console.log("no3 is largest");
}

//5. Write a program to check whether a number is even or odd.
let number = 7;
if (number % 2==0) {
    console.log("Even");
} else{
    console.log("Odd");
}

//6. Write a program that prints:
// Excellent (marks above 90)
// Good (75–90)
// Average (50–74)
// Fail (below 50)
let mark = 85;
if (mark > 90) {
    console.log("Excellent");
} else if (mark >= 75) {
    console.log("Good");
} else if (mark >= 50) {
    console.log("Average");
} else {
    console.log("Fail");
}

//Part 4: Arrays
//1. Create an array containing a string, number, boolean, null, and undefined.
let myArray = ["hello", 42, true, null, undefined];
console.log(myArray);

//2. Print the first element, last element, and length of the array.
console.log(myArray[0]); // first element
console.log(myArray[myArray.length - 1]); // last element
console.log(myArray.length); // length of the array


//3. Add two elements using push().
let elements = ["10,20,30"];
console.log(elements);
elements.push("40,50");
console.log(elements);
//4. Remove the last element using pop().
let arr = [1,2,3];
let removed = arr.pop(); // removed === 3
console.log(arr); // [1,2]
//5. Replace the third element with your city name.
let city=["Tezpur", "Shilong", "Pune", "Guwahati"];
city[2]="Dhekiajuli";
console.log(city)

//6. Create the array [10, 20, 30, 40, 50] and perform the following operations:
//- Print the length
//- Add 60
//- Remove the last element
//- Change 30 to 100
//- Print the final array

let No_Array = [10, 20, 30, 40, 50];
console.log(No_Array.length);
No_Array.push(60);
No_Array.pop();
No_Array[2]=100;
console.log(No_Array)

//7. Create a nested array:
// let data = [1, 2, [3, 4, 5], 6]
// Print 3, 5, and the length of the nested array.

let data = [1, 2, [3, 4, 5], 6];
console.log(data[2][0]); // 3
console.log(data[2][2]); // 5
console.log(data[2].length); // length of nested array

//Part 5: Output Prediction
//1. Predict the output:
let x = 10;
let y = '10';
console.log(x == y); // output: true
console.log(x === y); // output: false

//2. Predict the output:
// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// console.log(arr); // output: [1, 2, 3]

// 3. Predict the output:
// let arr = ['A', 'B', 'C'];
// arr[1] = 'Z';
// console.log(arr); // output: ['A', 'Z', 'C']

//Challenge Questions
//1. Create an array of 10 elements and replace every even index with 'JavaScript'.
let element = [10, 20, 30, 42, 50, 60, 70, 80, 95, 100];
console.log(element);
for (let i = 0; i < element.length; i++) {
    if (i % 2 === 0) {
        element[i] = 'JavaScript';
    }
}
console.log(element);

//2. Create three variables: name, age, and city, and print a complete sentence using them.

let name="Jwngma";
let Age= 19;
let City="Guwahati";
console.log("Hello, my Name is "+ name +" .And my Age is "+ Age +". From "+ City +".")

//3. Create an array with mixed data types and count the number of elements without using length.
let Arr = ["Hii",42, "Hello", true, { name: "Alice" }, [1, 2, 3], null];
let count = 0;
for (let item of Arr) {
    count++;
}
console.log("Array elements:", Arr);
console.log("Number of elements :", count);



 

