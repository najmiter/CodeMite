// const weather = {
//     current_temp: "27",
// };

// let current_temp = weather.current_temp ?? "20";

// // if (current_temp === null || current_temp === undefined) {
// //     current_temp = "20";
// // }

// console.log(current_temp);

// const remoteData = "some data";

// const data = remoteData ?? "default data";
// const data2 = remoteData || "default data";
// const data3 = (remoteData && null) ?? "default data";

// console.log(data3);

const person = {
    name: "CodeMite",
};

person.name ??= "my name";

// console.log(person.name);

let name = "CodeMite";

name ??= "my name";

console.log(name);
