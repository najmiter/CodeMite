// function get_random(end) {
//     if (end === undefined) {
//         end = 100;
//     }

//     return Math.trunc(Math.random() * end);
// }

// function get_random(start = 50, end = 100) {
//     return Math.trunc(Math.random() * (end - start)) + start; // 78
// }

// const rand = get_random();
// console.log(rand);

function get_energy(n, coffee = true) {
    if (n === undefined) return `Didn't get number of cups.`;

    if (coffee) {
        return `Here's your ${n} cups of coffee ☕️`;
    } else {
        return `Here's your ${n} cups of tea 🫖`;
    }
}

// const energy = get_energy();
// console.log(energy);

// function args() {
//     console.log(arguments[1]);
// }

// args(12, "second");

// const args2 = () => {
//     // NOT DEFINED IN THE BROWSER IN CASE OF AN ARROW FUNCTION!
//     console.log(arguments);
// };

// args2();
