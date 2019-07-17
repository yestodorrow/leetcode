function debounce(fn){
    let timeout=null;
    return function(){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            fn.call(this,arguments)
        },1000)
    }
}
function sayHi(a,b){
    console.log("hello "+a+b)
}
debounce(sayHi("world","!"))
debounce(sayHi("world","!"))