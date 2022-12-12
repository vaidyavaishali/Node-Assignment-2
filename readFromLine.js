let readLine = require("readline")
const rl = readLine.createInterface({
    input : process.stdin,
    output: process.stdout
})
rl.question("Please Tell Your Name :- ", (name)=>{
    console.log("Hello " +name)
    rl.close()
})