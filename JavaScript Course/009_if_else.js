const string = "";
const number = 1230;

if (string) {
    console.log("IF");
} else if (number < 500) { // 1230 < 500 -> false
    console.log("ELSE IF");
}

// If you only have one line
if (string) console.log("OK"); 
