// rembr: interview question == kya pi ki value 3.14 ko 4 ya 3 kr skte h?
// rembr: agar hn kr skte h to kaise or ni kr skte h to kyu ni

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const container = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(container);

// const myNewObj = Object.create(null)
const chai = {
    name: 'ginger chai',
    price: 150,
    isAvailable: true,

    orderChai: function(){
        console.log("chai pht gyi");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
    // configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// for (let [key, value] of chai) {
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
    
}