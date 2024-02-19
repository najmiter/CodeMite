// const a = [12];
// const b = a;

// b.push(13);
// console.log(a);

const say_hello = function (x = 1) {
    console.log(`Hello, YouTube ${x} times.`);
};

// const talk = say_hello;
// talk();

function speak(ill_say_hello, x) {
    // let ill_say_hello = say_hello;
    // let ill_say_hello = function () {};

    ill_say_hello(x); // callback
}

// speak(say_hello);
// speak(function () {
//     console.log("Hello from an inline function");
// });

// speak(() => {
//     console.log("Hello from an arrow function");
// });

// speak(say_hello, 5);
speak(function (x) {
    console.log(`Saying hello ${x} times from an inline function.`);
}, 50);
