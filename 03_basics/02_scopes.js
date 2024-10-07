// var c = 300
let a = 100

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner:", a );
    function addNum() {
        
    }
    
    // var c = 30 
    // c = 30 
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log(a);
// console.log(b);
// console.log(c);

function One() {
    const username = "syed"

    function Two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); this will not give any output because it is local scope

    Two()
    
}

// One()

if (true) {
    const username = "syed"
    if (username === "syed") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
    
}

// console.log(username);

// ++++++++++++++++++ Interesting ++++++++++++++++++


console.log(addone(5));
function addone(num) {
    return num + 1
}


addtwo(5)
const addtwo = function (num){
    return num + 2
}

