// let a = 12; //
// let b = a;

// a = 78;
// b = 10;

// console.log(a, b);

// const a = [1, 2, 3, 4, 5];
// const b = [];

// a[0] = 999;
// console.log(b);

// for (const n of a) {
//     b.push(n);
// }

// a[0] = 999;
// console.log(b);

const a1 = [1, 2, 3, 4, 5, [1, 2, 3]];
const b1 = [...a1]; // 100MB

a1[0] = 9999;

console.log(b1);
