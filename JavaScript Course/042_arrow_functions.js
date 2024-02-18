// const arrow_function = () => {
//     console.log("From the arrow function");
// };

// arrow_function();

// const get_random1 = (end = 100) => {
//     return Math.trunc(Math.random() * end);
// };

// const get_random2 = (end = 100) => Math.trunc(Math.random() * end);

// console.log(get_random2(45));

const get_random3 = end => Math.trunc(Math.random() * end);

console.log(get_random3(12));
