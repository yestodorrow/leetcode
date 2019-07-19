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

const os=require("os");
//platform
console.log(os.platform());
//cpu arch
console.log(os.arch())
//cpu core info
console.log(os.cpus())
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.homedir())
console.log(os.uptime())



// url


const url=require("url");

const myUrl=new URL("http://mywebsite.com:8080/helllo.html?id=100&status=active");


//serialize url

console.log(myUrl.href)
console.log(myUrl.toString())
//host domain
console.log(myUrl.host,myUrl.hostname)
console.log(myUrl.pathname);
console.log(myUrl.search)
console.log(myUrl.searchParams)
myUrl.searchParams.append("abc","hello");
console.log(myUrl.searchParams)


// loop through

myUrl.searchParams.forEach((value,name)=>{
    console.log(`${name}=${value}`)
})

const EvenEmitter=require("events");

// create class
class MyEmitter extends EvenEmitter{}

const myEmitter=new  MyEmitter();

myEmitter.on("event",()=>console.log("event fired"))

// init event
myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")
myEmitter.emit("event")



