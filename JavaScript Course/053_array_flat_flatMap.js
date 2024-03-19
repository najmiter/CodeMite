const array = [1, 2, 3, 4, 5, 6, 7];

// const flattened = array.flat();
const flattened2 = array.flatMap((n) => {
    const arr = [];
    arr.length = n;
    arr.fill(n);
    return arr;
});

console.log(flattened2);
