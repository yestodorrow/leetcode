// var re=new RegExp(/\d+/g);
// var str="133abdee eeeadsadsf21234"
// // console.log(str.match(re))
// var http=require("http")
// var server=http.createServer((req,res)=>{
//     console.log("entered");
//     console.log(req);
//     res.write("hello");
//     res.end()
// })

// server.listen(8989,()=>{
//     console.log("started listening on 8989")
// })

// fs模块
var fs=require("fs");
// fs.readFile("a.txt",(err,data)=>{
//    if(err) throw err;
//    else{
//        fs.writeFile("hello.txt",data,(err,data)=>{
//            console.log(data)
//        })
//        console.log(data)
//    }
// })

// var http=require("http");
// var server=http.createServer((req,res)=>{
//     fs.readFile("a.txt",(err,data)=>{
//         res.write(data);
//         res.end()
//     })
// }).listen(8080)
const str="https://www.baidu.com/s?wd=node%20url&rsv_spt=1&rsv_iqid=0x80533e8e0004a5ae&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug2=0&inputT=1215&rsv_sug4=1215";
const url=require("url");
let json=url.toString(str);
console.dir(json);
const qs=require("querystring");
let j=qs.parse(str);
console.log(j)
