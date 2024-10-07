// fetch('https://something.com').then().catch().finally()

// rembr: promise 1
const promiseOne = new Promise(function (resolve, reject) {
    // useful: Do an async task
    // useful: DB calls, crptography, network calls
    setTimeout (function (){
        console.log("Async task is completed");
        resolve() // useful: resolve part will run and then it goes to "then" part and then that part wll be run
    }, 1000)
    
})

promiseOne.then(function(){
    console.log("Promise is consumed");
    
})

// rembr: promise 2
new Promise (function (resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
    
}).then(function(){
    console.log("Async 2 resolved");
    
})

// rembr: promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "yes@no.com", id: 546})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// rembr: promise 4
const promiseForth = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "chai", password: "123456"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseForth
.then(function(user){
    console.log(user);
    return user.username
})
.then((username) => { //useful: chaining
    console.log(username);
})
.catch( (error) => {
    console.log(error);
})
.finally( () => console.log("The promise is completed")
)

// rembr: promise 5
const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "syed", password: "12356"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

// async function consumePromiseFive() {
    //     const response = await promiseFive
    //     console.log(response);
    
    // }
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
// info: async and await

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
// }

// rembr: try catch method

// info: async and await
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

// rembr: now 'then', 'catch'

// info: async and await and fetch
fetch('https://api.github.com/users/syedyusuf013')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => console.log(error))
