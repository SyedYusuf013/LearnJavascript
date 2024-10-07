// objects is of 2 types 
// 1. Literal (Not singleton)
// 2. Constructor (always singleton)

// singleton = create by constructor, 1 object
// Object.create // we can create objecct by this method but this method is called contructor method 

// object literals

const JsUser = {} // this is how we create a object


const mySym = Symbol("key2")

const JsUser1 = {
    name: "syed",
    "full name": "S F Yusuf",
    [mySym]: "mykey1",
    age: 22,
    location: "delhi",
    email: "syed@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(JsUser1.email);
// console.log(JsUser1["email"]);
// console.log(JsUser1["full name"]);
// console.log(JsUser1[mySym]);
// console.log(typeof JsUser1[mySym]);

// change value

JsUser1["full name"] = "Syed F Yusuf" // overwrite
// console.log(JsUser1["full name"]);

// Object.freeze(JsUser1) // fix the value of object
// JsUser1["full name"] = "Syed Fayeque Yusuf" // overwrite
// console.log(JsUser1);

JsUser1.greeting = function(){
    console.log("hello Js User");
}
JsUser1.greeting1 = function () {
    console.log(`hello Js User, ${this["full name"]}`);
}


console.log(JsUser1.greeting);
console.log(JsUser1.greeting());

console.log(JsUser1.greeting1);
console.log(JsUser1.greeting1());



