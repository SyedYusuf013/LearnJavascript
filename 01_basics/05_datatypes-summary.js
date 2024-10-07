// datatypes - 2 parts

// 1.Primitive (call by value) - 7 Types:-
// String 
// Number
// Boolean
// null (empty)
// undefined (variable declare)
// Symbol(unique)
// BigInt(scientific value conatain)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 314643164614613169n

// 2.Reference/Non-primitive (call by reference)

// Array
// Objects
// Functions

const heros = ['shaktiman','doremon','halwapuri']
let myObj = {
    name: 'areena',
    age: 22,
    hobby: 'foootbaaalll',
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof outsideTemp);

// https://262.ecma—international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Copy) (Primitive), Heap Memory (Referrence) (Non-Primitive)

// Stack Memory

let myhobby = 'football'

let anothername = myhobby
anothername = 'chess'

console.log(myhobby);
console.log(anothername);

// Heap Memory

let userone = {
    email: "syed@gogle.cm",
    upi: "syed@ybl"
}

let usertwo = userone

usertwo.email = "yahoo@google.com"

console.log(userone.email);
console.log(usertwo.email);

