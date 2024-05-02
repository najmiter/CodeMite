// const person = {
//     name: "CodeMite",
//     age: 90,
//     gender: "male",
// };

/* 
    
    const this = {
        name: 'CodeMite',
        age: 90,
        gender: 'male'
    };

    return this;

    this.name = 'CodeMite';
    this.age = 90;
    this.gender = 'male';


*/

function Person(name, age, gender) {
    // we don't return the object
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.role = "YouTuber";
}

/* 

    const prototype = {};

*/

Person.prototype.who = function () {
    return `I am a NOT ${this.name}`;
};

const person = new Person("CodeMite", 90, "male");
const person2 = new Person("CodeEspy", 190, "male");

// console.log(person.who());
// console.log(person2.who());

function fPerson() {
    return {
        who() {
            console.log("I am someone");
        },
    };
}

const p2 = fPerson();
const p3 = fPerson();

function who() {
    console.log("I am NOT someone");
}

p2.who = who;
p3.who = who;

p2.who();
p3.who();
