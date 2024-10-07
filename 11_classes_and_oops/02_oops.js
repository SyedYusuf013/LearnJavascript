// todo: ## object literals

const user = {
    username: "syed",
    loginCount: 6,
    signedIn: true,

    getUserDetails: function (){
        // console.log("got the data");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// todo: Constructor function

// const promiseOne = new Promise()
// const date = new Date() // 'new' keyword is a constructor function
// constructor function will allow you to make multiple instense bana sko from 1 object literals
// "new" keyword naya [executional ni] context banane ke kaam aata h 

// how constructor will be usefull

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // we can create method too
    this.greeting = function (){
        console.log(`Welcome to my yt channel ${this.username}`);
        
    }

    return this // info: return likho ya na likho koi fark ni pdhta h, its implicit function
}

// const userOne = User('syed', 45, true)
// const userTwo = User('yusuf', 55, false)
const userOne = new User('syed', 45, true)
const userTwo = new User('yusuf', 55, false)

console.log(userOne);
console.log(userOne.constructor); // constructor is refernces of the function
console.log(userTwo);

// rembr: when we use 'new' keyword then a empty object will be created
// rembr: constructor function will be called due to "new" keyword then it will packed all arguments and deliver to you
// rembr: 'this' keyword will inject all the aguments 
// rembr: we get all the data
