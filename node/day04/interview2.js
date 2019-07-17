// function add(a){
//    function sum(b){
//        a=a+b;
//        return sum;
//    }
//    sum.toString=function(){
//        return a
//    }
//    return sum
// }

// console.log(add(2)(3)(4))

console.log([]+[])//empty string


function a(){
    return "hello"
}
const sentence=a`hi`;
console.log(sentence)
console.log([]+1)//1
console.log({}+1)//1
console.log(true+1)//2
console.log(false+1)//1
console.log([1]+1)//11
console.log([1,2,3]+1)//"1,2,31"
console.log({1:1}+1)//[object Object]1
console.log(""+1)//"1"

function y(){
    console.log(this.length)
}
var x={
    length:5,
    method:function(){
        arguments[0]()
    }

}
x.method(y,1)//2
x.method(y,1,2)//3
// let z=x.method(3);
// z(1)


const 