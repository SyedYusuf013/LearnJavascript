// functions

function callMe () {
    console.log("Y");
    console.log("u");
    console.log("s");
    console.log("u");
    console.log("f");
}

// callMe()

// function addNumbers (number1, number2) {
//     console.log(number1 + number2);    
// }

// addNumbers()
// addNumbers(3,5)
// const result = addNumbers(3,5)
// addNumbers(3,"5")
// addNumbers(3,"a")
// addNumbers(3,null)

// console.log("Result:", result);


function addNumbers (number1, number2) {
    
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("hello"); // after return nothiing will be printout
    
}

const result = addNumbers(3,5)

// console.log("Result:", result);

// function loginUserMsg (username) {
function loginUserMsg (username = "sam") { //this will be a minimum output
    // if (username === undefined) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("syed"));
// console.log(loginUserMsg());

// function calculateCartPrice (...num1) { // ...num1 is also called rest operator also known as spread operator it's just depend upon use
function calculateCartPrice (val1, val2, ...num1) { // ...num1 is also called rest operator also known as spread operator it's just depend upon use
    return num1
    
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 400, 500, 561, 6000, 8313));

const user = {
    username1: "syed",
    prices: 99
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username1} and price is ${anyobject.price}`);
    
    
}

// handleObject(user)
handleObject({
    username1: "sam",
    price: 999
})

const myNewArray = [200, 400, 600, 500, 800]

function returnSecondValue(useArray) {
    return useArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 500, 800]));


// D7P7JCAYVO3GJVU3