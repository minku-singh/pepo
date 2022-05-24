const path = require("path");
const fs = require("fs");

// console.log(fs.readFileSync((path.join(__dirname, "abc.js")))+"")
// let bufCont = fs.readFileSync(path.join(__dirname, "abc.js"));
// console.log(bufCont+"");

console.log(path.extname("abc.js"));
console.log(path.basename(path.join(__dirname, "abc.js")));