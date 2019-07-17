function sayHi(){
    // console.log(name);
    // console.log(age);
    var name="Lydia";
    let age=21
    console.log(name)
}
sayHi()
//var 存在变量提升，所以第一个是undefined
//let 不会提升变量，所以第二个是报错


for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },1)
}
for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    },1)
}

// 在每次迭代期间，i将被创建为一个新值，并且每个值都会存在于循环内的块级作用域。
for(var i=0;i<3;i++){
    (function(i){    
        setTimeout(()=>{
            console.log(i)
        },1)
    }
    )(i)
}





