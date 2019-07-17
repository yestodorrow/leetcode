var http=require("request");
let url="https://www.cnblogs.com/xiaxuexiaoab/p/7124956.html"
var cheerio=require("cheerio")
// let result=http.get(url);
// console.log(result)
http.get(url,(err,result)=>{
    
    let $=cheerio.load(result.body);
    let js=$("script");
    js.forEach((a,b)=>{
        console.log(a,b)
    })
    console.log(js)
})