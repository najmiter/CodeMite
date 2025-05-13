// const someFutureAction = () => {
//   console.log('This is happening in the future!\n\n');
// };

// setTimeout(someFutureAction, 500);
// console.log('Before');
// console.log('After');

// for (let i = 0; i < 3_000; i++) {
//   console.log(i);
// }

// console.log('\n\n');

let count = 0;

const intervalId = setInterval(() => {
  if (++count > 2) clearTimeout(timeoutId);
  console.log('This is happening every half second!');
}, 500);

const timeoutId = setTimeout(() => {
  clearInterval(intervalId);
}, 2000);
