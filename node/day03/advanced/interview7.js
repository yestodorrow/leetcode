// 在String对象上定义一个repeatify函数。
// 这个函数接受一个整数参数，来明确字符串需要重复几次
// 。这个函数要求字符串重复指定的次数。举个例子：

// console.log('hello'.repeatify(3));
// 应该打印出hellohellohello
String.prototype.repeatify=String.prototype.repeatify||function(times){
    var str='';
    for(let i=0;i<times;i++){
        str+=this;
    }
    return str
}
// console.log("hello".repeatify(3))

// this

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());