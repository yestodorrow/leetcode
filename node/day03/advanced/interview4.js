let c={
    greeting:"hey!"
}
let d;
d=c;
c.greeting="hello";
console.log(d.greeting)
//基本数据类型之外，基本都是值的引用

let a=3;
let b=new Number(3);
let e=3;
console.log(a==b,a===b)
console.log(typeof a,typeof b)
console.log(b===e)
//new 之后的大多成了对象
//new Number（）是一个内置的函数构造函数。 虽然它看起来像一个数字，
// 但它并不是一个真正的数字：它有一堆额外的功能，是一个对象。
//当我们使用===操作符时，类型和值都需要相等，
//new Number()不是一个数字，是一个对象类型。