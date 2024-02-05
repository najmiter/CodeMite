const array = [1, 2, 3, 4, 5];

// const f = array[0];
// const s = array[1];

// const [f, ...remaining] = array;
let f1, s1, remaining1;

[f1, s1, ...remaining1] = array;

console.log(remaining1);
