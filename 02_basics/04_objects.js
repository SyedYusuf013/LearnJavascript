// const tinder = new Object() // singleton object 
const tinder = {} // non singleton object

tinder.id = "645"
tinder.name = "Rohit"
tinder.isLoggedIn = false

// console.log(tinder);

const newUser = {
    email: "rohit@mac.com",
    fullname: {
        userfullname: {
            firstname: "rohit",
            lastname: "sharma"
            
        }
    }
}

// when we call api from backend then we can use like this in behave of else if
// console.log(newUser.fullname?.userfullname.firstname);

// console.log(newUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}


const obj3 = {
    5: "e",
    6: "f"
}

// const obj3 = {
//     obj1, obj2
// }


// {} this indicates an empty object in which all the object stores in it

// this will be use less
// const obj4 = Object.assign({}, obj1, obj2, obj3)

// this will use most of the time
const obj4 = {...obj1, ...obj2, ...obj3}// this process called spread
// console.log(obj4);

// when the data came from database it's like this

const users = [
    {
        id: 1,
        email: "hisgds@gsmdsl.com",
    },{
        id: 1,
        email: "hisgds@gsmdsl.com",
    },{
        id: 1,
        email: "hisgds@gsmdsl.com",
    },{
        id: 1,
        email: "hisgds@gsmdsl.com",
    },{
        id: 1,
        email: "hisgds@gsmdsl.com",
    },{
        id: 1,
        email: "hisgds@gsmdsl.com",
    },
]

users[1].email
// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder)); // kam use krte h

// console.log(tinder.hasOwnProperty('id'));


// de-structuring of object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // this is bad for usiing multiple times 

const {courseInstructor: teacher} = course
// console.log(courseInstructor);
console.log(teacher);

// example of react

const navbar = ({company}) => {

}

navbar(company = "hitesh")

// +++++++++++++++API+++++++++++++++++
// apna kaam kisi or ke sir pe daalna ussi ko api kehte h
// aap restuarant me gye aapne kch or kiya h to wo khana kaise banana h wo to restuarant wale jane 
// API is like MENU card

// JSON file

// {
//     "name": "syed",
//     "coursename": "js in hindi",
//     "courseInstructor": "hitesh"
// }

// Array json file
// [
//     {},
//     {},
//     {}
// ]








