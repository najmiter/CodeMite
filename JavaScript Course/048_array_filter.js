const array = [5, 4, 3, 7, 8, 9, 1, 11];

const odds = array.filter(odds_filter);
console.log(odds);

function odds_filter(n, i) {
    return n % 2 === 1; // true
}

// const chhoty = odds.filter(function (n) {
//     return n < 7; //
// });
// console.log(chhoty);

const chhoty_chhoty = odds.filter((n, i) => n < 7 && i < odds.length / 2);
console.log(chhoty_chhoty);



/// DON'T USE! IT WAS JUST TO HELP YOU UNDERSTAND! :D
// function filter(array) {
//     const a = [];
//     for (const [i, n] of array.entries()) { // 5
//         if (odds_filter(n, i)) {
//             a.push(n);
//         }
//     }

//     return a;
// }
