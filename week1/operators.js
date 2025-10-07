// // OPERATORS IN JS (symbols that perform some operations on values or variables)

// // arithmetic operators (+, -, *, /, %, **, ++, --)

// let a = 12;
// let b = 34;
// console.log(a+b); //46
// console.log(a-b); //-22
// console.log(a*b); //408
// console.log(a/b); //0.3529...
// console.log(a%b); //12
// console.log(a++); //12
// console.log(a--); //13

// // assignment operators (=, +=, -=, *=, /=, %=, **=)

// let c = 23;
// console.log(c+=2); //25
// console.log(c-=2); //23
// console.log(c*=2); //46
// console.log(c/=2); //23
// console.log(c%=2); //1
// console.log(c**=2); //1

// // comparison operators (==, !=, ===, !==, <, >, <=, >=)

// let d = 12;
// let e = "12";
// let f = 23;
// console.log(d == e);   //true
// console.log(d === e);  //false
// console.log(d != e);   //false
// console.log(d !== e);  //true
// console.log(d > f);    //false
// console.log(d < f);    // true
// console.log(d <= f);   // true
// console.log(d >= f);   //false

// // logical operators (&&, ||, !)

// if (a > 10 && b > 20){
//     console.log("logical AND");
// }

// if (a > 10 || b < 20){
//     console.log("logical OR");
// }

// // ternary operators 
// let g = 23;
// g = 12 ? true : false

// short circuiting in OR operator
console.log(false || 0 || 7 || 35 || "hadia");  // 7
