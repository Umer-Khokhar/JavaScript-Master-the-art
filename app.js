// Difference between let, var and const

//1. var is the feature of es5 and let and const are added in es6 and features of es6 but we can use all the way to create variables

//2. var is the function scope but let and const are braces scope

// i.e. as you can se we can able to access the i outside of loop if we create it with var we still access it outside of braces (of for loop)

function myFun() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
myFun();
console.log("break;");
// but if we try to do this with let or const error will come

function myFun2() {
  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
  // console.log(j) this will produce error
}
myFun2();

//3. var add itself to the window object but let and const do'sn't

// i.e.

var a = 20;
var g = 50;
let b = 49;
const c = 60;

// type window in the browser console and see only a and g are store in the window objects b and c are not

// ----- Window Object ----- //

// We have Explain it in the notes

// _________ Stack and Heap memeory _________ //

// We have explain these topics in the notes

// _________ Execution Context _________ //

// We have explain this topic in notes as well

// _________ Laxical Environment _________ //

function myFun() {
  let a = "Umer";
  // console.log(b) this produced error because it cannot access the values of innerFun() as var have function scope and let and const have braces scope while innerFun() can access the a variable

  function innerFun() {
    let b = "Khokhar";
    console.log(a); // See we can Access this
  }
  innerFun();
}

myFun();

// This is called the laxical environment, this is basically ensure that what we can access and what we cannot access!

// ________ How to copy reference values ________ //

let myArr = [1, 2, 3, 4, 5, 6];
let copyArr = [...myArr];

copyArr.pop();
console.log(copyArr);
console.log(myArr);

// As you can see the myArr remains same and did not changed but the copyArr is changed so with the help of the spread operator we can copy the reference value in any other variable of funtion

// We can also do this with objects

let obj = {
  name: "Umer",
  age: 19,
};

let copyObj = { ...obj };

copyObj.name = "Khokhar";

console.log(copyObj);
console.log(obj);

// Spread Operators are very usefull when we want to copy reference values

// _______Truthy and false values _______ //

if (0) {
  console.log("Hello World");
} else {
  console.log("How are you?");
}
if (7) {
  console.log("Hello World");
} else {
  console.log("How are you?");
}

// All the values except => 0, false, undefined, null NaN and document.all are truthy as you can seen in the example
//Example 1: 0 (zero) is present and consider to be falsey and turn or behave like false value and "How are you" is printed
//Example 2: 7 is present, and because 7 is not in falsey values so trun truthy and "Hello World" is printed
