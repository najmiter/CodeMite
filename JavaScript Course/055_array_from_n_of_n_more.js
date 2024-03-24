const array = Array.from("string");
const array2 = Array.from("string", (c, i) => c.repeat(5));
const array3 = Array.from("string", (c, i) => c + c);
const array4 = Array.from([1, 2, 3, 4, 5], (c, i) => i);

// console.log(array2.join(""));

const array5 = Array.from({ length: 10 }, (v, i) => i * 2);
// console.log(array5);

const array6 = Array.of(10, 3, 5, 6, 7);
// console.log(array6);
const array7 = Array(10, 3, 5, 6, 7);
// console.log(array7);

// console.log(Array.of(10));
// console.log(Array(10));
// console.log(Array(10).fill(0));

// console.log(Array(10).fill(0));
const array8 = [1, 2, 3, 4, 5, 6];
// array8.fill("string");
// console.log(array8);

// console.log(array8.at(0));
// array8.at(0) = 12;

// array8.with(0, 99);
// console.log(array8);

// console.log(array8);
// array8.copyWithin(3, 0, 3);
// console.log(array8);
