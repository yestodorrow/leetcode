const x="constructor"
console.log(x[x](01))//
// x[x] === String.constructor 
// constructor是string下面的一个属性



// let sum=function(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(sum(1)(2)(3))
// let sum=function(a){
//     return function(b){
//         if(b){
//             return sum(a+b)
//         }else{
//             return a
//         }
       
//     }
// }
// console.log(sum(1)(2)(3)())


let sum=(a)=>{
    return (b)=>{
        if(b){
            return sum(a+b)
        }else{
            return a
        }
       
    }
}
console.log(sum(1)(2)(3))


const circle={
    radius:10,
    circumference:function(){
        return(2*Math.PI*this.radius)
    },
    daimeter(){
        return this.radius*2
    },
    area:()=>{
        return (Math.PI*Math.PI*this.radius)
    }
}
console.log(circle.area())//NaN
//console.log(circle.diameter())//20
//console.log(circle.circumference())//20*PI