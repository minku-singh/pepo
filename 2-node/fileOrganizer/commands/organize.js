let fs = require("fs");
let path = require("path");
let types = require("./../utility.js")

function organizeFn(dirPath){
    let destPath = undefined;
    // 1. dirpath given 
    if(dirPath == undefined){
        destPath = process.cwd();
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){

            //2. create the organized_files dir inside given src dir
            destPath = path.join(dirPath, "organized_files");
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);
                console.log("organized files directory created...")
            }

        }else{
            console.log("😪 Please enter valid path!!!");
            return;
        }

        organizeHelper(dirPath, destPath)
    }
}

// 3. identify the type/categories of all the files of src dir 
function organizeHelper(src, dest){
    let childNames = fs.readdirSync(src);
    // get absolute address of each files 
    for(let i = 0; i < childNames.length; i++){
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            let category = getCategory(childNames[i]);
            console.log(childNames[i], " belongs to --->", category);
        
            // 4. cut / copy files to corresponding type directories inside organized files dir 
            sendFiles(childAddress, dest, category);
        }
    }
}

function sendFiles(srcFilePath, dest, category){
    let categoryPath = path.join(dest, category);

    let doesExist = fs.existsSync(categoryPath);
    if(doesExist == false){
        fs.mkdirSync(categoryPath);
    }

    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);

    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, " copied to ", category);
}

function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);

    for(let type in types){
        let typeArr = types[type];
        for(let i = 0; i < typeArr.length; i++){
            if(ext == typeArr[i]){
                return type;
            }
        }
    }
    return "others";
}

module.exports = {
    organizeKey: organizeFn
}



