let steps_taken = 0;
const destination = 10;

while (steps_taken < destination) { // 10 < 10
    steps_taken += 1;
    console.log("Walking...", steps_taken);
}

do {
    steps_taken += 1; // 11
    console.log("Walking...", steps_taken);
} while (steps_taken < destination);
