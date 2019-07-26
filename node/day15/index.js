//bubble sort
let unsortedArray=[3,4,4,38,44,47,26,2,48,50];
let swapped;

function bubbleSort(arr){
    swapped=false;
    let end=arr.length-1 ;
    for(let i =0;i<end;i++){
        if((arr[i])>arr[i+1]){
            swapped=true;
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            
        }
    }
    end--;
}
do{
    bubbleSort(unsortedArray)
}while(swapped)
console.log(unsortedArray)

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var pivot = arr[arr.length - 1];
    var left = [], right = [];
    for (var i = 0; i<arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}
var s=[1,2333,33,33,222,222,99];
for(var i=0;i<10;i++){
    s.push(Math.floor(Math.random()*188))
}
console.log(s);
let a=quickSort(s);
console.log(a)


function QuickSort(arr){
    if(arr.length<=1) return arr;
    var pivot=arr[arr.length-1];
    var left=[],right=[];
    for(var i=0;i<arr.length-1;i++){
        if(arr[i]<arr[i+1]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...QuickSort(left),pivot,...QuickSort(right)]
}



//call的实现
function myCall(context){
    if(typeof this !=="function"){
        throw new TypeError("error")
    }

    context=context||window;


    context.fn=this;
    
    const args=[...arguments].slice(1);

    const result=context.fn(...args);

    delete context.fn;
    return result;
}

Function.prototype.myCall=myCall;



//apply apply接收的第一个参数是this，第二个参数是 所需参数所组成的数组。

Function.prototype.myApply=function(context){
    if(typeof this !=="function"){
        throw new TypeError("error")
    }

    context=context||window;
    context.fn=this;
    var result;
    if(arguments[1]){
        result=context.fn(...arguments[1])
    }else{
        result=context.fn()
    }
    delete context.fn;
    return result;
}



//为什么有call apply后还要有个bind ？ 
// 当我们需要绑定一个点击事件的时候，就改变回调函数的this，怎么破？
//因为 call apply都是立即执行了，所以bind登场。看一下下面这个例子吧。


Function.prototype.myBind=function(context){
    if(typeof this!=="function"){
        throw new TypeError("error")
    }

    const _this=this;
    const args=[...arguments].slice[1];

    return function F(){
        if(this instanceof F){
            return _this(...args,...arguments)
        }
        return _this.apply(context,args.concat(...arguments))
    }
}

//判断一个字符串中出现次数最多的字符，统计这个次数

var str="abcdefgaddda";
var obj={};
for(var i=0;i<str.length;i++){
    if(!obj[str[i]]){
        obj[str[i]]=1
    }else{
        obj[str[i]]++
    }
}
console.log(Object.keys(obj))
var max=1;
for(var k in obj){
    if(max<obj[k]){
        max=obj[k]
    }
}
console.log(max)


var x=1,y=0,z=0;
function add(n){
    n=n+1;
}
y=add(x);
console.log(x)
function add(n){
    n=n+3
}
z=add(x)
console.log(x)




