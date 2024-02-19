// function logger(...values) {
//     for (const value of values) {
//         console.log(value);
//     }
// }

// const logger_arrow = (...values) => {
//     for (const value of values) {
//         console.log(value);
//     }
// };

// [1, 2, 3, 4, 5, "ak string"]
// logger(1, 2, 3, 4, 5, "ak string");
// logger_arrow(1, 2, 3, 4, 5, "ak string");

function accumulate(...numbers) {
    let total = 0;
    for (const n of numbers) {
        if (Array.isArray(n)) {
            for (const nn of n) {
                // shouldn't be done like this!
                // repitition is not good kids.
                // but it serves the purpose.
                if (!isNaN(nn) && typeof +n === "number") total += nn;
            }
        } else if (!isNaN(n) && typeof +n === "number") {
            total += n;
        }
    }

    return total;
}

const sum = accumulate(1, 2, 3, 4, 5, "string", [12, 32]);
console.log(sum);

function test(x, y, ...values) {
    console.log(x);
    console.log(y);
    console.log(values);
}

// test(12, 5435, 23, 5, 5, 6, "s");
