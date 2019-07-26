var fs=require("fs");
fs.stat("../day01",(err,states)=>{
    if(err) throw err;
    console.log(states.isFile()||states.isDirectory())
})
let isExisted=async ()=>{
    fs.stat("css",(err,states)=>{
        return states.isDirectory
    });
}
if(isExisted){
    fs.mkdir("css"+1,(err)=>{
        if(err) throw err;
        console.log("success")
    })
}
