const fs=require("fs")
const path=require("path")
let filePath=path.resolve("../../day02")
let fileDisplay=(filePath)=>{
    fs.readdir(filePath,(err,files)=>{
       if(err) throw err;
       else{
        console.log(files)
        files.forEach(file=>{
            if(file!=="index.js"){
                fs.readFile(filePath+"/"+file,(err,data)=>{
                    fs.writeFile(file,data,(err,result)=>{
                        console.log(result)
                    })
                    console.log(data)
                })
            }
        })
        
       } 
    })
}
fileDisplay(filePath)