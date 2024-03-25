/* 

    0 -> el1
    1 -> el2
    .
    .
    .
    n -> eln

*/

// const object = {
//     0: "el1",
//     1: "el2",
//     2: "el3",
// };

// console.log(object);
// console.log(object[0]);
// console.log(object[1]);
// console.log(object[2]);

const person = {
    name: "CodeMite",
    name: "You",
    Name: "CodeMite",
    NamE: "CodeMite",
    gender: "male",
    age: 90,
};

console.log(person["name"]);
// console.log(person["gender"]);
// console.log(person["age"]);

person["name"] = "You";
// console.log(person);

const newPerson = {};

newPerson["name"] = "CodeMite";
newPerson["gender"] = "male";

// another way to create properties
newPerson.age = 90;

newPerson["has space"] = true;
newPerson.hands = ["left hand", "right hand"];

// console.log(newPerson.hands.at(0));
// console.log(newPerson["has space"]);

// newPerson.test = undefined;
// console.log(newPerson);

// if (newPerson.test !== undefined) {
//     console.log("this property exists");
// } else {
//     console.log('this property DOESN"T exist');
// }

if ("test" in newPerson) {
    console.log("this property exists");
} else {
    console.log('this property DOESN"T exist');
}
