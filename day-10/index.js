//object, fuctions, loops, if else, switch case, for in, for of, while loop, ES6:. script 6, commonJs
// You have to take one input as number, if that n umber is multiple of 3 then print "Humpty", if the number is multiple of 5 the  print "dumpty", if number is multiple of both 3 and 5 then print "Humpty Dumpty"

const number = 10;

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Humpty Dumpty");
  } else if (i % 3 === 0) {
    console.log("Humpty");
  } else if (i % 5 === 0) {
    console.log("Dumpty");
  } else {
    console.log(i);
  }
}

// You have one string which is str = "We are in full stack batch", in this string you need to get all vowels and make one word out of it. then print it.
// Output: "eaeiuaa"
const str = "We are in full stack batch";
let vowels = "";

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowels += char;
  }
}

console.log(vowels);


let num = 1;
while (num < 10) {
  console.log("while loop is running");
  num++;
}

// for of loop is specifically for arrays only

let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}

let arr1 = ["Jwngma", "Jwmwi", "Prity"]; 
for (let Name of arr1) {    
  console.log(Name);
}


// object

let obj = {
    name: "Jwngma Basumatary",
    uni: "ADTU",
    course: "BCA",
    year: 3,
    isAlumni: false,
    sub: ["FS", "AI", "DL", "ML"],
    hobbies: {
        games: ["Kabadhi", "Football"],
        listening: "Gwmwrhang",
    }

}

//for (let key in obj) {
//  console.log(key, obj[key]);
//}
let obj1 = {
    maths: 90,
    science: 80,
    english: 70,
    hindi: 60,
    social: 50
}
let max=0;
let sub="";

for (let i in obj1) {
    // which one has maxi mark
    if (obj1[i] > max) {
        max = obj1[i];
        sub = i;
    }
    //console.log(i, obj1[i]);
}
console.log("Maximum mark is:", max);
console.log("Subject with maximum mark is:", sub);


//fuctions

function myFunction() { // function declaration(parameters)
    let output = "a+b+c"; // function body
    console.log(output);
}

//ES6:. script 6, commonJs
//let, const, arrow function, 

const arrowFun = (a, b, c) => { // function declaration(parameters)
    let output = a + b + c; // function body
    console.log(output);
    arrowFun(89, 89, 89)


// arrowFun(10, 20, 30)   //invoking the function
// arrowFun(10, 60, 40)


// arrowFun(178, 567, 4563)
};
// only after declaring it can define it.
myFunction( 10, 40, 70); // function call(arguments)
myFunction( 20, 30, 50); // function call({20, 30, 50}arguments)

console.log(batch)


var batch = "FS";

