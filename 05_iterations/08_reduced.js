// todo: reduced method

const myNums = [1, 2, 3, 4, 5]

// idea:
// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     return accumulator + currentValue
// }, 0 )

// idea:
// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`Accumulator: ${accumulator} and CurrentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0 )

// idea: Now in arrow function
const myTotal = myNums.reduce( (acc, currval) => (acc + currval), 0 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 1999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "cpp course",
        price: 799
    },
    {
        itemname: "mobile dev course",
        price: 5999
    },
    {
        itemname: "data science course",
        price: 19999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);
