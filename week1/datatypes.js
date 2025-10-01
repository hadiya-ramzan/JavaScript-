// DATA TYPES (tells what is the type of data)
// →  Primitive DataTypes
// →  Non-Primitive DataTypes (reference)



// PRIMITIVE DATA TYPES
// i- number (represents both integer and floating-point values)
let age = 23;
let mark = 34.76;
console.log(typeof(age)); // number

// ii- string (represent characters or sequence of characters enclosed in single or double quotes)
let name = "Hadia Ramzan";
const character = 'a';
console.log(typeof(character)); // string

// iii- boolean (represents logical value (true or false))
let isPrime = true;
let isEven = false;
console.log(typeof(isPrime)); // boolean

// iv- undefined (represents a variable that has been declared but its value is not assigned yet.)
let className;
let percentage; 
console.log(typeof(className)); //undefined

// v- null (represents the intentional absence of any value. typeOf null is an "object")
let myName = null;
let value = null; 
console.log(typeof(value)); // object

// vi- bigint (represents integers with arbitrary precision, larger than what the "number" type can safely represnet.)
let a = 1265687988995623n; //where 'n' represents bigint.
console.log(typeof(a)); // bigint

// vii- symbol (Represents unique and immutable value, often used as object property keys to avoid name collisions.)
let s1 = Symbol("id");
let s2 =Symbol("id");
console.log(s1===s2); //false
console.log(typeof(s1)); // symbol



// NON-PRIMITIVE DATA TYPES
// i- object (stores data in form of key : value pairs)
let stdInfo = {
    name : "hadia",
    age : 23,
    grade : 'A+', 
    group : "IT"
};
console.log(typeof(stdInfo)); //object

// ii- array (ordered collection of values, indexed by numbers)
let marks = [23, 65, 89, "hina"];
console.log(marks);
console.log(typeof(marks)); //object


// iii- function (callable object that encapsulates a block of code)
function infoOfStd(){
    let firstName = "Hadia";
    let secondName = "Ramzan";
    let fullName = firstName + " " + secondName;
    console.log(fullName);
    
};
infoOfStd();
console.log(typeof(infoOfStd));  //function
