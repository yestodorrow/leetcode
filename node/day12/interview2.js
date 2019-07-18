// let anagrams=[];
// let genAnagrams=(word,anagram="")=>{
//     for(let i=0;i<word.length;i++){
//         anagram+=word[i];
//         genAnagrams(word.slice(0,i)+word.slice(i-1),anagram)
//     }
// }
// genAnagrams("ABC");
// console.log(anagrams)


const path = require("path")
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename))
console.log(path.parse(__filename))

console.log(path.join(__dirname, "test", "hello.html"))


// fs
const fs = require("fs");

//create folder
// fs.mkdir(path.join(__dirname,"/test"),{},(err)=>{
//     if(err) throw err;
//     console.log("folder created")
// })

// create file
fs.writeFile(
    path.join(__dirname, "/test",
        "hello.txt"),
    "hello world", (err) => {
        if (err) throw err;
        console.log("file written")
    })


fs.appendFile(
    path.join(__dirname, "/test",
        "hello.txt"),
    " i love js", (err) => {
        if (err) throw err;
        console.log("file append")
    })

//read file
fs.readFile(
    path.join(__dirname, "/test", "hello.txt"),
    "utf-8",
    (err, data) => {
        if (err) throw err;
        console.log(data)
    }
)

//rename file
fs.rename(
    path.join(__dirname, "/test", "hello.txt"),
    path.join(__dirname,"/test","helloworld.txt"),
    (err) => {
        if (err) throw err;
        console.log("renamed")
    }
)