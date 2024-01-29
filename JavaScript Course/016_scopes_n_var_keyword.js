let number = 12;
number = 43;

if (true) {
    {
        let other = 12;
    }

    // console.log(other); // ERROR
}

if (true) {
    {
        var older = 12;
    }
}

console.log(older);

for (var i = 0; i < 5; i++) {} // 5 < 5

console.log(i); // no problemo, we still got it

// AND THAT'S WHY WE'LL NEVER USE `VAR` IN OUR CODE!
