// function foo() {}

// const name = "CodeMite";
// const func = function () {};

// func();

// function talk() {
//     console.log("talking...");
// }

const person = {
    name: "CodeMite",
    talk: function () {
        console.log(`${this.name} is talking`);
    },

    // talk,
    age: 90,
};

person.talk();
