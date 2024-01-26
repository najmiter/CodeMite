/* 
    FALSY VALUES IN JS
    
        ->.-    0
        ->.-    null
        ->.-    undefined
        ->.-    NaN
        ->.-    ''
        ->.-    0n
        ->.-    -0 
*/

// Everything else if TRUE in JS

console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean("-1234234")); // true
