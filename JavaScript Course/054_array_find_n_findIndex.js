const array = [1, "value", 2, 3, [32542], 5];

const target = array.find(function (value) {
    return value === 4;
    // return Array.isArray(value);
    // return typeof value === "string";
});

// console.log(target);

const indexOf = array.findIndex(function (value) {
    // return typeof value == "string";
    // return Array.isArray(value);
    return value === 10;
});

console.log(indexOf);
