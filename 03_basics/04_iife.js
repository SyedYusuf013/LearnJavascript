// Hack: Immediately Invoked Function Expression (IIFE)
// todo: iife mtlb jo function immediately execute ho jaye.
// todo: iife ka or v mtlb hota h jaise
// rembr: global scope ke polution se prblm hoti h kai baar, to uss globle scope ke variables or polution o hatane ke liye hum iife use krte h



// info: this is how iife works
(function chai() {
    console.log(`DB CONNECTED`);
})();

// hack: jo 1st wala paranthesis() hota h usme hum function ki defination likhne wale h
// hack: or jo 2nd wala paranthesis() hota h usko hum execution(execution call) ke liye lagate h

// info: in this scenario the iife do not know where to stop 1st code and start the 2 code so in this scenario we put semicolon in the 1st code

( function aurcode () { // note: this type of iife called named iife
    console.log(`DB CONNECTED TWO`);
}) ();
// bug: always use esmicolon to use new iife
// idea: this is arrow function
// note: this is simple iife
(  () => {
    console.log(`DB CONNECTED ONE`);
}) ();
// todo: use parameter
(  (name) => {
    console.log(`DB CONNECTED ONE ${name}`);
}) ("syed")




