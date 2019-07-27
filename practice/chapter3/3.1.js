const net=require("net")
function log(str){
    console.log(str)
}
// log(net);
const server=net.createServer(connection=>{
    log("connection started")
    log(connection)
})
server.listen(60300)