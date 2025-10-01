// DATA TYPES (tells what is the type of data)

// →  Primitive DataTypes
// →  Non-Primitive DataTypes (reference)



// primitive data types : 07
// i- number (represents both integer and floating-point values)
let age = 23;
let marks = 34.76;

// ii- string (represent characters or sequence of characters enclosed in single or double quotes)
let name = "Hadia Ramzan";
const character = 'a';

// iii- boolean (represents logical value (true or false))
let isPrime = true;
let isEven = false;

// iv- undefined (represents a variable that has been declared but its value is not assigned yet.)
let className;
let percentage; 

// v- null (represents the intentional absence of any value. typeOf null is an "object")
let myName = null;
let value = null; 

// vi- bigint (represents integers with arbitrary precision, larger than what the "number" type can safely represnet.)
let a = 1265687988995623n; //where 'n' represents bigint.

// vii- symbol (Represents unique and immutable value, often used as object property keys to avoid name collisions.)
let s1 = Symbol("id");
let s2 =Symbol("id");
console.log(s1===s2); //false
