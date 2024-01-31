const string = "this is a string";

let together = string.concat(" and more data", " and still more data.");
// this is a string and more data and still more data.

together = "some data" + " more data";
// some data more data

// l = l + (r);
together += " this was added after.";

console.log(together);
