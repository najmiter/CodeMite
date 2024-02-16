function say_hello() {
    console.log("Hello, World");
    // return;
    // let something;
}

// say_hello();

// const r = say_hello();

// console.log("r =", r);

// function get_random() {
//     const rand = Math.trunc(Math.random() * 100);

//     return rand; // 63
// }

// const random = get_random();
// console.log(random);

const return_string = false;
function get_something() {
    if (return_string) {
        return "ak string";
    } else {
        return 11;
    }
    // return;
}

const value = get_something();
console.log(value);
