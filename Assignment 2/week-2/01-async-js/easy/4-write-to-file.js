/* ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

let fs = require("fs");

function writer() {
  fs.writeFile("b.txt", "Sher ab fs library use karega", (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("File written successfully");
    }
  });
}

function reader() {
  fs.readFile("b.txt", "utf-8", (err, data) => {
    console.log(data);
  });
}

writer();
reader();
