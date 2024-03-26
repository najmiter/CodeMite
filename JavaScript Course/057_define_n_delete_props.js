const name = "CodeMite";
const age = -90;

const person = {
    name,
    // gender: "male",
    age,
};

// console.log(person);

// const exists = Object.hasOwn(person, "gender");
// console.log(exists);
// console.log(person.hasOwnProperty("gender"));

// Object.defineProperty(person, "gender", {
//     value: "male",
// });

Object.defineProperties(person, {
    gender: {
        value: "male",
    },
    isYouTuber: {
        value: true,
        configurable: true,
    },
});

// console.log("isYouTuber" in person);
// console.log(person.gender);

// delete person.name;
delete person.isYouTuber;
console.log(Object.hasOwn(person, "isYouTuber"));
