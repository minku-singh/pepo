// CRUD operation on files and folders
const fs = require("fs");

// read file (R)
// console.log(fs.readFileSync("abc.js")+"");

// open file or create a file if not there (C)
// fs.openSync("mink.txt", "w");

// // write into the file or it replaces the previous content
// fs.writeFileSync("mink.txt", "Hi this is Minku's file...")
// fs.writeFileSync("mink.txt", "Hi this is not Minku's file...")

// appends the content (U)
// fs.appendFileSync("mink.txt", " Nhi yrr ye to mera hi hai!!");


// folders --------------------------------------------------------------------------
// Create a new Directory (C)
// fs.mkdirSync("newFolder");

// fs.writeFileSync("newFolder/newFile.txt", "new file inside directory");

// let fNameArr = fs.readdirSync("newFolder");
// for(let i = 0; i < fNameArr.length; i++){
//     fs.unlinkSync(`newFolder/${fNameArr[i]}`);
// }

// fs.rmdirSync("newFolder");

// console.log(fs.existsSync("f.js"));
// console.log(fs.lstatSync(__dirname + "\\fs.js").isFile());

for(let i = 0; i < 2; i++){
    let folder = `Fol-${i}`;
    fs.mkdirSync(folder);
    fs.writeFileSync(folder + `\\readme.md`, `readme for ${folder}`)
}






