function f(n) {
    if (n <= 1) { return n; }
    else {
        return f(n - 1) + f(n - 2)
    }
}
// console.log(f(1))
// console.log(f(2));
// console.log(f(3))
// console.log(f(4))
console.log(f(5))
console.time("44")
console.log(f(33))
console.timeEnd("44")

var d = (n) => (1 / (Math.pow(5, 1 / 2))) * (Math.pow((1 + Math.pow(5, 1 / 2)) / 2, n) - Math.pow((1 - Math.pow(5, 1 / 2)) / 2, n))

console.time("55");
console.log(d(33))
console.timeEnd("55")

//闭包加上缓存

var m=(
    function(){
        var cache={
            1:1,
            2:2
        }
        return function (n){
            if(cache[n]){
                return cache[n]
            }else{
                cache[n-1]=m(n-1);
                cache[n-2]=m(n-2);
                console.log(cache)
                return cache[n-1]+cache[n-2]
            }
        }
    }
)()
console.time("66");
console.log(m(33));
console.timeEnd("66")


