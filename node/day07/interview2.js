
// 函数声明优先于变量声明


    console.log(a);//function
    a();//console.log  10
    var a=3;
    function a(){//
        console.log(10)
    }
    a=6;//改变了a
    // a()//type error :not a function 



    console.log(b);
    // b();
    var b=3;
    var b=function(){
        console.log(15)
    }
    console.log(b);
    b=6;
    // b()

// 费波纳茨数组
var arr=[];
for(var i=0;i<10;i++){
    i<=1?arr.push(1):arr.push(arr[i-1]+arr[i-2])
}
console.log(arr)



//数据排列
// 123454321=> 23456765432
function num1(n,m){
    let str="";
    for(var i=n;i<=m;i++){
        str+=i
    }
    let newStr=[...str].reverse();
    newStr.shift();
    newStr=newStr.join("")
    return str+newStr
}
console.log(num1(1,5))
console.log(num1(3,5))