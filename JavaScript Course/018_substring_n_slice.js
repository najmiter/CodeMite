const string = "this is a string";
const substr = string.substring(0, 9);

const a_idx = string.indexOf("a");
const new_data =
    string.substring(0, a_idx) + "kch r data " + string.substring(a_idx);

// this is kch r data a string
// console.log(new_data);

const slice = string.slice(-10, 2); // 0, 2
console.log(slice);
