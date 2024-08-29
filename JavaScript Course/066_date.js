// const now = Date.now();

// console.log(now);

const date = new Date();

// console.log(date);

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getTime());
// console.log(date.getUTCDate());
// date.setFullYear(2026);
// date.setTime(23952390845239);
// console.log(date.getFullYear());

// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// const todayIndex = date.getDay();
// const today = days[todayIndex];

// console.log(today);

// console.log(date.toDateString());
// console.log(date.toTimeString());

console.log(
  date.toLocaleTimeString('en-us', {
    // weekday: 'long',
    // year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    // month: 'long',
  })
);
