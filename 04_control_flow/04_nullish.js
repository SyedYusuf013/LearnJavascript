// todo: Nullish Coalescing Operator (??)
// rembr: in this only two things we should rembr 1.[null], 2.[undefined]
// idea: this method will give the user to handle the error or fallback


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 52

console.log(val1);


// todo: Terniary Operator
// 
// 

// condition ? true : false //rembr: format or syntax, it is like if else we give condition and then true statement and false statement

const IceTeaPrice = 180

IceTeaPrice >= 150 ? console.log("Greater than 150") : console.log("Less than 180");

