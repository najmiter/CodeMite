// const grades = [50, 51, 54, 52];
// grades[0] = 5000;

// let index = 0;

// console.log(grades[index]); // 0
// index++; // 1
// console.log(grades[index]); // 1
// console.log(grades[1]);
// console.log(grades[2]);
// console.log(grades[3]);

// for (let i = 0; i < grades.length; i++) {
//     // 4
//     console.log(grades[i]); // 0
// }

const array = [0, 0, 0, 0, 0]; // 4
for (let i = 0; i < array.length; i++) {
    array[i] = Math.trunc(Math.random() * 10);
}

// array[60] = 12;
// console.log(array.length);

// const exists = array.includes(0);
// console.log(exists);

const whatever = [1, 1.4, "string", true, [8, 5, "more strings"]];
// console.log(whatever[4][0]);
// whatever = "make it a string"; // ERROR
whatever[4] = "make it a string"; // OK
console.log(whatever);
