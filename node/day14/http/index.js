const http=require("http");
// console.log(http);
const url=require("url")
const qs=require("querystring")
http.createServer((req,res)=>{
    let add=req.url;
    console.log(qs.parse(add))
   let m=url.parse(add);
//    console.log(m.query)
    res.writeHead(200,{"Content-type":"text/html,charset='utf-8","helo":"23"})
    res.write("hello")
    res.end()
}).listen(8080)