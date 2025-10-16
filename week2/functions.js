// FUNCTIONS (reusable block of code that performs a specific task)

// functions syntax
function greet(){
    let name = "hadia";
    console.log(`Hello, ${name}`);
}
greet();

// function expression
let add = function(a, b){
    console.log(a + b);
}
add(12, 13);

// return functions
let multiply = function (num1, num2){
    return (num1 * num2);
} 
console.log(multiply(12, 2));

// Arrow functions
let sum = (c, d) => {
    console.log( c + d);
}
sum(43, 2);