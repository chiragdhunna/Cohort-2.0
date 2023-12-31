/* ## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second */

// Counter which increases every second
let cnt = 0;
setInterval(() => {
  console.log(cnt++);
}, 1000);
