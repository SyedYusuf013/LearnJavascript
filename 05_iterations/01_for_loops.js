// todo: for loops

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 5) {
        // console.log("this is the final output");
    }
    // console.log(element);
}

// info: table printout

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
//         // console.log(i + " * " + j + " = " + i * j );
//     }
// }

let myArray = ["flash", "batman", "superman", "black addam"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// info: break 

// for (let i = 1; i <= 20; i++) {
//     if (i == 7) {
//         console.log(`detected best value is ${i}`);
//         break
//     }
//     console.log(`value of i is ${i}`);
// }
// info: continue

for (let i = 1; i <= 20; i++) {
    if (i == 7) {
        console.log(`detected best value is ${i}`);
        continue
    }
    console.log(`value of i is ${i}`);
}