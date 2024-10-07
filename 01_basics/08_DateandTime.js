// dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

let myCreatedDate = new Date()
// console.log(myCreatedDate);

let myCreatedDate1 = new Date(2024,5,26)
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date(2024,5,26,16,16)
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-05-19")
// console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("06-09-2024")
// console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());

// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the user need`

newDate.toLocaleString('default',{
    weekday: "long",
    era: "long",
    hourCycle: 'h12'
})
