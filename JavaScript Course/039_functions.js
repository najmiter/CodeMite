function say_hello() {
    // const something = 0;
    console.log("Hello, World");
}

// say_hello(); // `call`, `invoke` the function
// console.log(something); // not defined

const my_function = function () {
    console.log("me bolta ni");
};

// my_function();

const arrow_function = () => {
    console.log("kch b ni krta");
};

// arrow_function();

// my_function();
// say_hello();
// arrow_function();

function idk() {
    console.log(undef); // not accessed while defining
}

const undef = 14;
idk(); // OK. At this point, `undef` has been defined
