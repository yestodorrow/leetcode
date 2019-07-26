//[].slice.call()

// 将伪数组转换成真数组；
//比如 ul》li  lis=document.querySelectorAll("li");
//这里的lis就是伪数组  

//lis instanceof Array===false;
var lis=[];
var lis=[].slice.call(lis);
lis=Array.prototype.slice.call(lis)
//lis instanceof Array ==>true


function flat(arr){
    var temp=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            return [...temp,...flat(arr[i])]
        }else{
            temp.push(arr[i])
        }
    }
    return temp
}

  
console.log(flat([1,2,[3,[4,[5,6]]]]))
var re=/\d+/g;
console.log("sdd233,334,222asd32asd ss33,3ssss".match(re));
const http=require("http");
http.createServer((req,res)=>{
    console.log("started");
    res.writeHead(200);
    res.write("hello");
    res.end()
}).listen(8090)