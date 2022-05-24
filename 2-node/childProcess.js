let cp = require("child_process");

cp.execSync("start chrome https://www.pepcoding.com");
cp.execSync("calc");
const ans = cp.execSync("node abc.js");
console.log(ans + "");