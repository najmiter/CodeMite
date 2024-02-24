function get_random(range = 100) {
    return Math.trunc(Math.random() * range);
}

const change_default = true;
const condition = true;
// let rand = undefined;

// if (change_default) {
//     rand = get_random(50);
// } else {
//     rand = get_random();
// }
// console.log(rand);

const range = 50;
const default_range = 100;
// const random = change_default
//     ? get_random(range)
//     : condition === true
//       ? get_random(10)
//       : get_random();

// console.log(random);

const random1 = get_random(change_default ? range : default_range);
console.log(random1);
