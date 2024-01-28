let counter = 1;

// while (counter < 10) {
//     if (counter % 2 === 0) {
//         counter++;
//         continue;
//     }

//     console.log("counter:", counter);
//     counter++; // 2
// }

for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log("i:", i);
}
