const array = [1, 2, 3, 4, 5]; // 5 / 2 = 2.5

// const d_array1 = map(array, double);
// console.log(d_array1);

// const d_array = array.map(double);
// console.log(d_array);

// const d_array2 = array.map(function (n, i) {
//     return n * 3;
// });
// console.log(d_array2);

function double(n, i) {
    return n * 2;
}

const d_array3 = array.map((n, i) => (i < array.length / 2 ? n * 2 : n * 3));
console.log(d_array3);



/// DON'T DO THIS! IT WAS JUST FOR YOUR HELP
/// TO YOU UNDERSTAND THE WORKING OF `map` :)
// function map(array, callback_double) {
//     const a = [];
//     for (const [i, each] of array.entries()) {
//         a.push(callback_double(each, i));
//     }

//     return a;
// }
