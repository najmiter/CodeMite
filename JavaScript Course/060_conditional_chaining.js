const weather = {
    todays_forcast: {
        morning: "29",
        evening: "19",
        night: "14",
    },
    // tomorrow_forcast
    getWeather: function () {
        return "It's sunny today ☀️";
    },
};

// console.log(weather.tomorrow_forcast.morning);

// if (weather.tomorrow_forcast !== undefined) {
//     console.log(weather.tomorrow_forcast.morning);
// }

// console.log(weather?.tomorrow_forcast?.morning);
console.log(weather?.getWeather?.());
