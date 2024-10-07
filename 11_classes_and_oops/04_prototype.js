// let myName = "Syed Fayeque Uddin Yusuf"

// console.log(myName.length);
// console.log(myName.truelength);


let myHeros = ["thor", "hulk", "ironman", "spiderman", "batman", "superman"]


let heroPower = {
    thor: "hammer",
    hulk: "angry",
    ironman: "iq",
    spiderman: "spidersense",
    batman: "rich",
    superman: "man of steel",

    getbatmanPower: function (){
        console.log(`Batman power is ${this.batman}`);
        
    }
}

// Object.create
Object.prototype.syed = function (){
    console.log(`Syed is present in all objects`);
    
}

Array.prototype.heySyed = function () {
    console.log(`Syed says Hello`);
    
}

// heroPower.syed()
// myHeros.syed()
// myHeros.heySyed()
// heroPower.heySyed() // not working 

// useful: inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User 

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Syed Fayeque Uddin Yusuf          "

String.prototype.trueLength = function(){
    console.log((`${this}`));
    // console.log((`${this.name}`));
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"syed     ".trueLength()
"cold drink".trueLength()