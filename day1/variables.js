// variables declaration and their scopes

//  VAR

var age = 10;
age = 12;
console.log(age); // 12 (var can be updated)

var age = 14; //  can be re-declared
console.log(age); // 14

//  checking the scope of "var" in functions 
var scopeOfVar = "Check my scope";
function checkScopeOfVar() {
    console.log(scopeOfVar);  // Check my scope
    var a = 123;
}
checkScopeOfVar(); 
console.log(a);  // not accessible.

//   checking scope of "var" in conditionals 
var b = 10;
if(true){
    console.log(b); //10 (accessible)
    var c = 12;
}
console.log(c); // 12 (global-scope)


//  LET 

let num = 23;
num = 34;
console.log(num); // 34 (can be updated)

// let num = 234; (cannot be re-declared. Got an error while re-declaring.)


//   checking scope of "let" in functions 
let scopeOfLet = "Check my scope";
function checkScopeOfLet() {
    console.log(scopeOfLet); // Check my scope
    let z = 20;
}
checkScopeOfLet();
console.log(z);  //error 


// //   checking scope of "let" in conditionals 
if (true) {
    let d = 12;
    console.log(d);  //  12 
}
// console.log(d); not accessible outside the block (let is block-scope.)



//  CONST 

const myName = "hadia";
// myName = "ramzan"; // TypeError: Assignment to constant variable. (cannot be updated)
console.log(myName);
// const myName = "ayesha"; //SyntaxError: Identifier 'myName' has already been declared. (cannot be re-declared)


//  checking scope of "const" in functions 

const abc = 123;
function checkScopeOfConst() {
    console.log(abc); // 123
    const def = 344;
    console.log(def); // 344
}
checkScopeOfConst();
console.log(def); //not accessible 


//  ********* checking "const" scope in conditionals ***********
if (true) {
    const d = 12;
    console.log(d);  // 12 
}
console.log(d); //not accessible outside the block (block scope)
