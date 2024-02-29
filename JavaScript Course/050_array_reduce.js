const array = [1, 2, 3, 4, 5];

// console.log(reduce(array, add_all));

// const summed = array.reduce(add_all);
// console.log(summed);

// const summed1 = array.reduce(add_all, 10);
// console.log(summed1);

array.reduce((p, c, i, arr) => (arr[i] *= 2), 0);

console.log(array);

function add_all(prev, cur, i, array) {
    return prev + cur; // 15
}


/// DON'T DO THIS! IT WAS JUST FOR YOUR HELP
/// TO YOU UNDERSTAND THE WORKING OF `reduce` :)
// function reduce(array, add_all_callback) {
//     let total = array.at(0); // 1
//     for (let i = 1; i < array.length; i++) {
//         // 10, 5
//         total = add_all_callback(total, array.at(i), i, array); // 15
//     }

//     return total;
// }
