const array = [1, -1, 11, 4, 2, 10];
// const array2 = ["c", "a", "b"];

// console.log(array2);
// array2.sort();
// array.sort();

// const copy = [...array].sort(compare_numbers);
// const copy1 = array.slice().sort(compare_numbers);
// array.sort(compare_numbers);
// console.log(array);
// console.log(copy);
// console.log(copy1);

const copy2 = array.toSorted(compare_numbers);
console.log(copy2);
console.log(array);

function compare_numbers(x, y) {
    if (x < y) return -1;
    else return 1;
}
