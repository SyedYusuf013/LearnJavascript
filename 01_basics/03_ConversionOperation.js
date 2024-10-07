let score = "33"
let score1 = "33gs"
let score2 = null
let score3 = undefined

// const {scope} = req.body
console.log(typeof score);
console.log(typeof (score));

console.log(typeof score1);
console.log(typeof (score1));

console.log(typeof score2);
console.log(typeof (score2));

console.log(typeof score3);
console.log(typeof (score3));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

// '33' => 33
// "33df" => NaN
// true => 1; false => 0;

let loggedin = 1

let boolisloggedin = Boolean(loggedin)
console.log(boolisloggedin);

// 1 => true; 0 => false;
// "" => false
// "syed" => true

let someNumber = 33

let strnumber = String(someNumber)
console.log(strnumber);
console.log(typeof strnumber);

// Operatiions 

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2%3);
// console.log(2**3);

let str1 = "hello"
let str2 = " syed"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //3
console.log(1 + "2"); //3
console.log("1" + 2 + 2); //5
console.log(1 + 2 + "2"); //5

// console.log(2 + 3 * 5 % 3);

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gamecounter = 100
++gamecounter;
console.log(gamecounter);