const fs = require("fs");
function log(str) {
    console.log(str)
}
fs.watch("target.txt", (a) => {
    
    log("file changed")
    log(a)
})

// fs.readFile("target,txt", (err, data) => {
//     fs.appendFile("target.txt", "hello", (err1, data2) => {
       
//         log(data)
//     })
    
// })


