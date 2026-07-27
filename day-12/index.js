//you will be having one object of products with product nameand products price, you need to find out final price of each product after certain discount.

let products = {
  laptop: 45000,
  iphone: 67000,
  mobileCover: 1200,
  tablet: 58999
};

function calculateDiscount(itemPrices, discountPercent) {
  let finalPrices = {};
  let discountMultiplier = 1 - discountPercent / 100;

  for (let key in itemPrices) {
    // Multiply by 0.85 to get the price after a 15% discount
    finalPrices[key] = itemPrices[key] * discountMultiplier;
  }

  return finalPrices;
}

let result = calculateDiscount(products, 15);
console.log(result);


// discount is 15% on each product
//Find out final price of each products after discount in certain revelentdata structure. (by using function)


const para = document.getElementById("para");


para.innerText="I am paragraph text from JS file";
para.style.border="1px solid red"
para.style.backgroundColor="teal"
para.style.color="white"


const btnDiv = document.getElementById("btn");
const btn = document.createElement("button");
btn.innerText="Click Me..!!";
btn.style.padding="10px";
btn.style.border="none";
btn.style.backgroundColor="yellowgreen";
btn.style.color="white";
btn.style.borderRadius="5px"
btnDiv.append(btn)




btn.addEventListener("click",()=>{
     console.log("clicked inside eventListener")
})



let form = document.getElementById("form");
let btn = document.getElementById("btn");



form.addEventListener("submit", (e)=>{
    e.preventDefault();


let fullName = document.getElementById("fullName").value;
let email= document.getElementById("email").value;
let password = document.getElementById("password").value;


        let obj = {
        fullName, email, password
    }


    console.log(obj);


})


obj = {
    name:"Arpan",
    uni:"ADTU",
    myFun:function(){
        console.log(this.name)
    }
}



obj.myFun()





//obj = {
 //   name:"Jwngma",
  //  uni:"AdtU",
 //   myFun:()=>{    //key:()           //myFun:Function()=>{
   //     console.log("Function value inside method")


  //  }
//}

//obj.myFun()


