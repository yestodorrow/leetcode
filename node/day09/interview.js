(function () {
    var a = b = 5
})()
// console.log(a)
console.log(b);

var name = "world";
(function () {
    console.log(name)
    if (typeof name == "undefined") {
        var name = "Jack";
        console.log("GoodBye " + name)
    } else {
        console.log("hello " + name)
    }
})()
//实现" a " .trim()=>"a"

Array.prototype.trim = () => {
    return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}
console.log(" a ".trim())


//5
var fullname = "Mickey Mouse";
var obj = {
    fullname: "Donal Duck",
    prop: {
        fullname: "Pluto Dog",
        getFullname: function () {
            return this.fullname;
        }
    }
}
// 使用getFullname函数依次打出
//Mickey mouse
let M = obj.prop.getFullname;
console.log(M())

//
//Donal Duck
// M.apply(this, obj)
function p(m) {
    if (m == 0 || m == 1) { 
        return m 
    }
    else {
         return p(m - 1) + p(m - 2) 
        }
}

console.log(p(6))
//纯箭头函数实现斐波那些且数列
let fib=n=>n>1?fib(n-1)+fib(n-2):n;
