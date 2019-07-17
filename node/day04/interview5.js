console.log("a")
 //放进队列
let timmy=setTimeout(function(){
   
    console.log("b")
},1);
//放进队列
let timothy=setTimeout(function(){
    console.log("c")
},10)
// 放进队列
let timer=setTimeout(function(){
    console.log("d")
},0);
console.log("e")
//what is the order of 
// the output of the letters

//a e d b c

//answer a e b d c



//
let num=0;
async function increment(){
    num+=await 2;
    console.log(num);
}

increment();
num+=1;

console.log(num)


//；是一句的结尾

// 下面报错

// let a={
//     a:123
// }
// [a].forEach(x => {
//     consoel.log(x)
// });

// 这样修改
let a={
    a:123
};
[a].forEach(function(x) {
    consoel.log(x)
});