// note: if 

// if (condition){

// }

const isUserLoggedIn = true
const temperature = 35


// if ( temperature > 25 ) {
//     console.log("High Room Temperature");
// } else {
//     console.log("Room Temperature");
// }
// console.log("code is executed successfully");

// rembr: greater than(<)
// rembr: less than(>)
// rembr: greater than equal to(<=)
// rembr: less than equal to(>=)
// rembr: equal to(==)
// rembr: not equal to(!=)
// rembr: strick check(===), checks its type also
// rembr: for declaration(=)
// rembr: strick check in anti pattern(!==), checks negative sign

// idea: var is works as global scope
const score = 200

// if ( score > 100 ) {
//     let power = "fly"
//     console.log(`User Power is: He can ${power}`);
// }

// info: implicit scope
const blnc = 1000

// if (blnc > 500) console.log("test"); //rembr: this can be but

// if (blnc > 500) console.log("test"),console.log("test2"); //info: in this scenario we can prunt multiple line of codes but this is not a good sign, or it's not readable code

// if (blnc < 500) {
//     console.log("less than 500");
// } else if (blnc < 750) {
//     console.log("less than 750");
// } else if (blnc < 950) {
//     console.log("less than 950");
// } else {
//     console.log("your blnc is 1000");
// }

const UserLoggedIn = true
const DebitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if ( UserLoggedIn && DebitCard && 3==5) { //rembr: && is stand for and in this method if the all condition true then this will execute or if 1 condition is false it will not going to execute
    console.log("User allowed for shopping");
}

if (LoggedInFromGoogle || LoggedInFromEmail) { //rembr: || stands for or in this method if anyone condition becomes true it will execute
    console.log("User Logged In");
}


