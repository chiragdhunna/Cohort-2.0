/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` */

// Here we will first read the file and then write it

let fs = require("fs");

function editor() {
  fs.readFile("a.txt", "utf-8", (err, data) => {
    let newData = data.trim().replace(/\s+/g, " ");
    fs.writeFile("a.txt", newData, (err) => {
      if (err) {
        console.log("Operation Failed");
      } else {
        console.log("Operation Success");
      }
    });
  });
}

editor();
