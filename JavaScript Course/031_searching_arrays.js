const array = [1, 2, "this is a string", 4, 5];

const exists = array.includes("anything");
// console.log(exists);

let at = array.indexOf(10);
at = array.lastIndexOf(2);

// if (at !== -1) {
//     array[at] = 140;
// }
// console.log(at !== -1);

// console.log(at);

/// JavaScript ARRAYS ARE STORED AS OBJECTS, LITERALLY
// const array_obj = {
//     0: 1,
//     1: 2,
// };

console.log(4 in array);
