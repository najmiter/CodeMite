// const array = Array(10); // []
const array = []; // [0, 1, 2, 3, 4, 5]

// for (let i = 0; i < 10; i++) {
//     array[i] = i + 1; // 1
// }

// console.log(array);

for (let i = 0; i < 10; i++) {
    array.push(i + 1);
}

// console.log(array.length);

array.unshift(-1, "string");

console.log(array);
