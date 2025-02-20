// ES6

// useful: using class

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("cahi", "cjsb@dkfh.com", "645")
// console.log(chai.encryptPassword());
// console.log(chai);
// console.log(chai.changeUsername());

// useful: behind the scene == without using class

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "cjsb@dkfh.com", "645")
console.log(tea.encryptPassword());
console.log(tea);
console.log(tea.changeUsername());