myfun()
console.log(sum)

var name = "prakjyoti"

// block scope, global scope, 
// const,let

const myname = "rabi"
myname =  "assam" // it will give error because const variable cannot be reassigned
console.log(myname)

//IIF = IMIDIATELY INVOKED FUNCTION
(()=>{
    console.log("IIF")
})()

//JS property hoisting = all traditional function var
// Execution context 

// higher order function

// foreach,map,filter, reduce
//they all have arrays as input
//They all will have arrays as input(they always accept input as an array)


//forEach
let arr =[1,2,3,4,5,6,7,8,9]
let forEach = arr.forEach((el,index)=>{
    console.log(el,index)
})

//map

let mapout = arr.map((el,index)=>{
    console.log(e,i)
})
console.log(mapout)

//map returns array whereas foreach return undefined

// filter

let filterOut = arr.filter((e,i)=>{
    return e%2!==0
})
console.log(filterOut)

//reduce

let reduceOut = arr.reduce((el,i)=>{
    return acc=el*2
}, 0);

console.log(reduceOut)

let arr1=[2,4,6,8,10,3,5,7,9]

let out = arr1.map((el,i)=>{
    return el*3
}).filter((el,i)=>{
    return el%5==0
}).forEach((el,i)=>{
    console.log(el*200)
})

console.log(out)