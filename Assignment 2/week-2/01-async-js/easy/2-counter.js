/* ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.*/

function timer() {
  return new Promise((response) => {
    setTimeout(() => {
      response();
    }, 1000);
  });
}

async function counter() {
  let cnt = 0;
  while (cnt < 10) {
    await timer();
    console.log(cnt++);
  }
}

counter();

//(Hint: setTimeout)
