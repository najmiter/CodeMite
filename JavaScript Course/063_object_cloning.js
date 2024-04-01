// const person = {
//     name: "CodeMite",
//     age: 90,
// };

// const clone = person;
// clone.name = "my name";

// console.log(clone);
// console.log(person);

// const { ...clone1 } = person;
// clone1.name = "my name";

// console.log(person);
// console.log(clone1);

// const clone2 = { ...person };
// clone2.name = "my name";

// console.log(person);

const weather = {
    current_temp: "24",
    tomorrow: {
        morning: "15",
        evening: "29",
        night: "14",
    },
    icons: ["☀️", "🌧️"],
};

// const { ...myWeather } = weather;

// myWeather.tomorrow.morning = "fifteen";
// myWeather.current_temp = "twenty four";

// console.log(weather);

// const stringified = JSON.stringify(weather);

// // console.log(stringified);

// const myWeather1 = JSON.parse(stringified);
// myWeather1.tomorrow.morning = "fifteen";
// myWeather1.icons[0] = "sunny";

// console.log(myWeather1);
// console.log(weather);

const myWeather2 = structuredClone(weather);
myWeather2.tomorrow.morning = "fifteen";

console.log(myWeather2);
