class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        // this._password = value.toUpperCase()
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}syed`
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }
    // setterrs ko kabhi bhi value return ni krte
}

const syed = new User("s@gmail.com", "jdksf")
console.log(syed.email);
console.log(syed.password);
