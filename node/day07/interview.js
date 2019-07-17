function sayHi(){
    console.log(name); //undefined
    console.log(age);//reference err
    var name="Lydia";
    let age=21
}
// sayHi()


// 1.使以下代码正常运行：
// const a = [1, 2, 3, 4, 5];
 
// Implement this
// a.multiply();
 
// console.log(a); // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]


Array.prototype.multiply=function(){
    this.forEach((i)=>{
         this.push(i*i)
    });
}
const a = [1, 2, 3, 4, 5];
a.multiply()
console.log(a)


// 如果我们将以下对象转换为 JSON 字符串，会发生什么？
const b = {
    key1: Symbol(),
    key2: 10
}
console.dir(b)
console.log(JSON.stringify(b))



///解释 TCO – 尾调用优化（Tail Call Optimization）。
//  有没有支持尾调用优化的 JavaScript 引擎？