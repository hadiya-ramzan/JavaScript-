// CONDITIONAL STATEMENTS

// if-else statements
let age = 20;
if (age > 18) {
    console.log("U can vote");
}
else {
    console.log("U can't vote");
}


// if-else-if statements 

let marks = 43;
if (marks > 80 && marks <= 100) {
    console.log("Grade: A+");
    
} 
else if (marks > 70 && marks <= 80) {
    console.log("Grade: A");
} 
else if (marks >= 50 && marks <= 70) {
    console.log("Grade: B");
} 
else if (marks < 50) {
    console.log("Grade: C (considered fail)");
}
else {
    console.log("Enter a valid input");
}


// switch statements
let num = 43;
switch (num) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    case 3:
        console.log("Case 3");
        break;
    default:
        console.log("Default Case");
        break;
}
