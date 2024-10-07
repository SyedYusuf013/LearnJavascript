// todo: for in loop

const myobj = {
    js: 'javascirpt',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobj) {
    // console.log(key);
    // console.log(myobj[key]);
    // console.log(`${key} stands for ${myobj[key]}`);
}

// idea: is for in loop works on array too???

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    
} 

// info: checks map works in for in loop

// const map = new Map() // rembr: map is a object datatype and hold key value pair

// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('FR', "France")
// map.set('IN', "India")

// // rembr: maps are not iteratable
// for (const key in map) {
//     console.log(key);
// }