const array = [10, 2, 30, 4, 5];

// array.forEach(function (number) {
//     console.log(number);
// });

// array.forEach(print_each);
array.forEach((number, i, array) => (array[i] = number * 2));
console.log(array);

function print_each(number, i, array) {
    // if (i % 2 === 0) {
    //     console.log(number);
    // }

    array[i] = number * 2;
}

/* function for_each(print_each) {
    for (const [i, number] of array.entries()) {
        print_each(number);
    }
} */
