function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)
// call: ye call current EC kisi or function ko pass kr deta h
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail.com", "643")
console.log(chai);
