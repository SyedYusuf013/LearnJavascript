// todo: for each loop which is set in array

const coding = ["js", "rb", "java","py", "cpp"]

// idea: this is the simple format for each loop
// coding.forEach( function (item) { // hack: callback function means a function without name
//     console.log(item);
// });

// idea: this will show you with arrow function

// coding.forEach( (val) => {
//     console.log(val);
// });

// idea: this will be by the exist function

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

// todo: [{},{},{}]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )