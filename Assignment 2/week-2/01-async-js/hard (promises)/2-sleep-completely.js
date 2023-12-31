/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// I think i am asked to use await over here

// So i need to make a program such that the functions completes and run after n seconds then only the next statment is performed

function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
}

sleep(3);

module.exports = sleep;
