const user = {
    username: "syed",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // this current context ko refer krta h
        // this is in arrow function
        console.log(this);
        
    }
    
}

// user.welcomeMessage()
// user.username = "yusuf"
// user.welcomeMessage()

// console.log(this);
// idea:
// function chai() {
//     let username = "syed"
//     console.log(this.username);
//     // this is used as a object
// }

// chai()
// idea:
// const chai = function () {
//     let username = "syed"
//     console.log(this.username);
// }

const chai = () => { // arrow function is =>, remove function and put => this will make and arrow function
    let username = "syed"
    console.log(this);
}

// chai()

// note: pure arrow function

// info: basic syntax
// () => {}
//  info: basic arrow function, explicit result
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// note: implicit(maan liya, assume, let) result is a 2 type of arrow function
// const addtwo = (num1, num2) => num1 + num2

// fixme: const addtwo = (num1, num2) => ( num1 + num2 )

// info: 
// const addtwo = (num1, num2) => {username: "syed"}
// note: by this we can object return
const addtwo = (num1, num2) => ({username: "syed"})

// rembr: agar curly braces use kiya to return daalna padega or agar ni use kiya to sirf paranthesis use krna hoga
// rembr: ye chizz react me bhot kaam aayegi to yaad rkhna
console.log(addtwo(3, 6));

const myArray = [2, 3, 2, 6, 8, 5]

// info:
// myArray.forEach(function () {})
// myArray.forEach(() => {}) // note: arrow functons
// myArray.forEach(() => ()) // note: this will also be use













