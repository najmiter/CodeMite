const string = `this is a string
and this is new line
third line`;

const a = string.split("\n");
// console.log(a);

const string2 = "this is just a string";
const b = string2.split(" ");
// console.log(b);

const string3 = "this is another string";
const c = string3.split(" ", 2);
// console.log(c);

const string4 = "this is a test string";
const d = string4.split("is");
// console.log(d);

const string5 = "entire string";
const e = string5.split();
console.log(e);
