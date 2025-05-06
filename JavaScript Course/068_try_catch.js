function riskyFunction() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    // Error
    throw new TypeError('Our random number is too low!');
  }
  return randomNumber;
}
//
// Code that may throw an error
// let isLoading = false;
// try {
//   isLoading = true;
//   // calling a remote api
//   const result = riskyFunction();
//   // try {
//   // } catch (error) {}
//   console.log('result', result);
// } catch (e) {
//   console.error('Error:', e.message);
//   console.error('Type:', e.name);

//   // try {
//   // } catch (error) {}

//   // Handle the error
//   // if (e instanceof RangeError) {
//   //   console.error('Error:', e.message);
//   //   console.error('Type:', e.name);
//   // } else throw e;
// } finally {
//   console.log('Finally block executed');
//   isLoading = false;
// }

function tryCatch(callback) {
  try {
    const result = callback();
    return { data: result, error: null };
  } catch (e) {
    console.error('Error:', e.message);
    console.error('Type:', e.name);
    return { data: null, error: e };
  } finally {
    return { data: null, error: null };
  }
  // unreachable
}

const { data, error } = tryCatch(riskyFunction);
console.log(data, error);

if (error) {
  console.error('Error:', error.message);
} else {
  console.log('Result:', data);
}
