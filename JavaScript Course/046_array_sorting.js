const array = [4, 16, 122, 1, 1, 3];
// const strings = ["ab", "aa", "ac"];

// console.log(array.sort(compare_numbers));
// console.log(
//     array.sort(function (x, y) {
//         if (x < y) return -1;
//         return 1;
//     })
// );

// console.log(
//     array.sort((x, y) => {
//         if (x < y) return -1;
//         return 1;
//     })
// );

// console.log(array.sort((x, y) => (x < y ? -1 : 1)));

// console.log(array.sort((x, y) => x - y));

// function compare_numbers(x, y) {
//     if (x < y) return -1;
//     else return 1;
// }

const copy = array.slice().sort((x, y) => x - y);
const copy1 = [...array].sort((x, y) => x - y);
const copy2 = array.toSorted((x, y) => x - y);
console.log(array);
console.log(copy2);
