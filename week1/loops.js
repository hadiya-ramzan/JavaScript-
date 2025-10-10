//  LOOPS 


// for loop

for (let i = 0; i <= 20; i++) {
    console.log(i); //printing numbers from 0-20
}
// -------------------------------------
let n = 8;
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
    // printing table of 8 in format (8 x 1 = 8).
}

// -------------------------------------

// while loop

{
    let i = 10;
    while (i >= 0) {
        console.log(i); //printing reverse counting from 10-0
        i--;
    }
}


{
    let i = 10;
    do {
        console.log(i); //prints reverse counting
        i--;
    } while (i >= 0);
}