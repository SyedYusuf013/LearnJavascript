// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Superman", "Batwan", "Dr Strange"]

const myArr1 = new Array(5,6,8,21,6)
// console.log(myArr1[1]);

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // add in the first index
// myArr.shift() // removes the first index

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);

// console.log(newArr);
// console.log(typeof newArr);

//  slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);
console.log("C", myArr);
