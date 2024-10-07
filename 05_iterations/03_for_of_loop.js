// todo: for of loop

// rembr: ["", "", ""]
// rembr: [{}, {}, {}]

const arr = [1, 2, 3, 5, 6, 8]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello syed!"
for (const greet of greetings) {
    if (greet == " ") {
        // console.log(`space detected skip it!!!`);
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// todo: Maps


const map = new Map() // rembr: map is a object datatype and hold key value pair
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObj = {
    'game1': "NFS",
    'game2': "GTA",
    'game3': "VALO",
    'game4': "BGMI"
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }
// info: objects are not iterable, but maps can


