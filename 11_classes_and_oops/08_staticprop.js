// useful: static property (in short prop.)

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
// rembr: static is a property in which it will not use the function to everyone
    static createId(){
        return "315"
    }
}

const syed = new User("syed")
// console.log(syed.createId()); due to static

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const phone = new Teacher("1+", "1+@one.com")
phone.logMe()
// console.log(phone.createId());
