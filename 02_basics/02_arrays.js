const mcu_heroes = ["Ironman", "Spiderman", "Thor"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// mcu_heroes.push(dc_heroes)

// console.log(mcu_heroes);
// console.log(mcu_heroes[3][1]);

// const all_Heroes =  mcu_heroes.concat(dc_heroes)

// console.log(all_Heroes);
// console.log(mcu_heroes[3][1]);


// ++++++++++++++++++Spread

// const all_Heroes1 = [...mcu_heroes, ...dc_heroes]

// console.log(all_Heroes1);


// *********************Flat

// const fake_array = [1, 2, 3, [1, 5, 6], 8, 9, [2, 6, 8, [5, 6, 8, [1, 5, 6]]]]
// console.log(fake_array);

// const real_array = fake_array.flat(Infinity)
// console.log(real_array);

//  *********************converting to array

console.log(Array.isArray("syed"));
console.log(Array.from("syed"));
console.log(Array.from({name: "syed"})); // Important
// console.log(Array.from({name: "syed"})); // Important


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
