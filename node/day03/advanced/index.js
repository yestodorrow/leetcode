// 1词法作用于
var c=5;
var d=7
function t1(){
    // console.log(this,1)
    var d=6;
    function t2(){
        // console.log(this,2)
        var e=7;
        var c=4;
        console.log(c+d+e)
    };
    t2()
}
t1()