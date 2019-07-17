// closure
function f1(a){
    let b=2;
    setTimeout(function(){
        console.log(a,b)
    },1000)
}
function f2(){
    for(var i=0;i<3;i++){//改成let
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
}
// f1(1)
// f2()
function f3(){
    for(var i=0;i<3;i++){//改成let
        setTimeout((function(x){
            console.log(x)
        }).bind(null,i),i*1000)
    }
}
f3()