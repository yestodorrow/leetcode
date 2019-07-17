//引入框架
var express = require("express");

//实例化
var app= new express();
var path= require("path");
var options={
    maxAge:1000*60*24
}

var router=require("./router.js")
app.use(express.static(path.join(__dirname,'public'),options));
app.use(router)
app.all("/*.js",(req,res)=>{
    res.setHeader("Cache-control","private,max-age="+1000*60);
    res.sedHeader("expires",new Date(Date.now()+100*60*1000).toString())
})
app.listen("8989",()=>{
    console.log("listening on 8989")
})