const companies = ["google", "meta", "netflix", "amazon"];

const target = "codemite";

const exists = companies.some(
    (company, i, a) => i < a.length / 2 && company === target
); // netflix === netflix

// console.log(exists);

const numbers = [1, 2, 3, 4, -1];

const smol = numbers.every((number) => number < 10);

console.log(smol);
