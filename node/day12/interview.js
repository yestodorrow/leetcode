//实现一个动画函数，不需要考虑透明度
function animate(ele,tarStyle,tarValue){
    var fullStatyleValue=getComputedStyle(ele)[tarStyle];
    var currentValue=parseFloat(fullStatyleValue);
    var animatedId=setInterval(function(){
        if(currentValue!=tarValue){
            currentValue+=Math.ceil((tarValue-currentValue)/10)
        }else{
            clearInterval(animationId)
        }
    },20)
}

//截流函数的实现
function debounce(fn,delay){
    var timer=null;
    return function(){
        var context=this;
        var args=arguments;
        clearTimeout(timer);
        timer=setTimeout(function(){
            fn.apply(context,args)
        },delay)
    }
}
// 点击li时alert索引

{/* <ul id="container">
<li>这是第一条</li>
<li>这是第二条</li>
<li>这是第三条</li>
</ul>  */}

function initLiClick(){
    var lis=document.getElementsByTagName("li")
   let container= document.getElementById("container");
   container.addEventListener("click",(e)=>{
       if(e.target.nodeName=="LI"){
           console.log(Array.prototype.indexOf.call(lis,e.target))
       }
   })
}

var a={n:1};
var b=a;
a.x=a={n:2};
console.log(a.x);//undefined
console.log(b.x);//{n:2}

// var f=function g(){return 23}
// console.log(typeof g())


(function(x){
    delete x;
    return x
})(1)



var y=1,x=y=typeof x;
console.log(x)

var y=1;x=y=typeof x;
console.log(x)


// (function f(f){
//     return typeof f()
// })(function(){
//     return 1;
// })


var foo={
    baz:1,
    bar:function(){
        return this.baz;
    }
}
// console.log(typOf (f=foo.bar()))

var x=1;
if(function (){}){
    x+=typeof f;
}
console.log(x)


(
    function f(){
        function f(){
            return 1
        }
        return f();
        function f(){
            return 2
        }
    }
)()