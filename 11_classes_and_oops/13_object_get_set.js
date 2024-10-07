// useful: Object based syntax

const User = {
    _email: 'syed@hcl.com',
    _password: '4861sdfg',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}
// rembr: constructor function == "new"
// rembr: factory function == "Object.create", "array me v hote h"

const yusuf = Object.create(User)
console.log(yusuf.email);
console.log(yusuf.password);

// useful: "_" is use to set a private method and there is another method "#" by which we can make private

