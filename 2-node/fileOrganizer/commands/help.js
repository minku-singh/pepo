// node main.js help
function helpFn(){
    console.log(`
    Available Commands 👇
                node main.js help
                node main.js tree "directoryPath"
                node main.js organize "directoryPath"
    `);
    return;
}

module.exports = {
    helpKey: helpFn
}