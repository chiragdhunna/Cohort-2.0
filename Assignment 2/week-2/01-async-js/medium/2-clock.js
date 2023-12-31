/* Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */

// For creating the clock we need time now, that will be done using

// console.log(time);

setInterval(() => {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  if (hr > 12) {
    hr -= 12;
  }

  let h;
  let m;
  let s;

  if (hr < 10) {
    h = "0";
  } else {
    h = "";
  }
  if (min < 10) {
    m = "0";
  } else {
    m = "";
  }
  if (sec < 10) {
    s = "0";
  } else {
    s = "";
  }

  console.log(`Time is ${h}${hr}:${m}${min}:${s}${sec}`);
}, 1000);
