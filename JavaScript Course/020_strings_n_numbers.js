const counter = "9"; // from the DOM

// 'string' + ' more' // 'string more'
// '9' + '1' // 91
let new_counter = counter + 1; // '9' + 1 = 91
let converted = parseInt(counter);

// new_counter = converted + 1; // 9 + 1 => 10

// converted = Number(counter);
// new_counter = converted + 1; // 9 + 1 => 10

// new_counter = +counter + 1;

// console.log(new_counter);

// const empty = "";
// console.log(+empty);

// string will be converted to a number in this case
console.log(counter - 5);
console.log(counter % 5);
console.log(counter / 5);
console.log(counter * 5);
console.log(counter ** 5);

// console.log(+"12fsdf"); // NaN
