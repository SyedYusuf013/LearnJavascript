// note: truthy

const username = "rohit@yahoo.com"

if (username) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}
const username1 = ""

if (username1) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}
const username2 = []

if (username2) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}
const username3 = {}

if (username3) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}

// rembr: falsy values
// rembr: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// rembr: truthy values
// rembr: "0", " ", "false", [], {}, function() {}, 

// note: how to check array is empty
if (username2.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array contains some values");
}

// note: how to check object is empty
if (Object.keys(username3).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object contains some values");
}

// rembr: false == 0, then its output will be true
// rembr: false == '', then its output will be true
// rembr: 0 == '', then its output will be true