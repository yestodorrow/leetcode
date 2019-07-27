const fs=require("fs");
const net=require("net");
const filename=process.argv[2];
if(!filename){
    throw Error("no filename")
}
function log(str){
    console.log(str)
}
net.createServer(connection=>{
    log("subscriber connection")
    connection.write(`now watching ${filename} to change`);
    const watcher=fs.watch(filename,()=>{
        connection.write(`file changed:${new Date()}`)
    });
    connection.on("close",()=>{
        log("disconnected");
        watcher.close()
    })
}).listen(60300,()=>{
    log("listening")
})