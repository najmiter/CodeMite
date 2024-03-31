const person = {
    name: "CodeMite",
    age: 90,
};

// const naam = person.name;
// const age = person.age;

// console.log(age);

// const { name, age, gender } = person;
// console.log(gender);

// const { gender: not, age, name: naam } = person;
// console.log(not);

const array = [
    1,
    {
        name1: "CodeMite from the array",
        age1: "90 from the array",
    },
];

const [n, { name1: naam1, age1 }] = array;

console.log(naam1);
console.log(age1);
