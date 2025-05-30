// const result = fetch('https://jsonplaceholder.typicode.com/todos/1');

// result
//   .then((todoRes) => {
//     console.log('Success Response!');
//     return todoRes.json();
//   })
//   .then((todo) => {
//     console.log('Success:', todo);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// try {
//   const todoRes = await result;
//   const todo = await todoRes.json();
//   console.log('Todo:', todo);
// } catch (error) {
//   console.log(error.message);
// }

async function getSomething() {
  if (Math.random() < 0.5) return 'Pani';
  throw new Error('Pani khtm');
}

function getOtherThing() {
  return new Promise((kaamPura, bahana) => {
    if (Math.random() < 0.5) {
      let total = 0;
      for (const n of Array.from({ length: 10_000_000 }).fill(1)) {
        total += n;
      }
      kaamPura(total);
    } else bahana(new Error('Pani khtm'));
  });
}

// try {
//   const thing = await getOtherThing();
//   console.log('thing:', thing);
// } catch (error) {
//   console.log('error', error.message);
// }

// getOtherThing()
//   .then((total) => {
//     console.log('total:', total);
//   })
//   .catch((e) => void 0);

try {
  const thing = getOtherThing();
  console.log('Normal log');
  console.log('Normal log 2');

  const data = await thing;
  console.log('thing:', data);
} catch (error) {}
