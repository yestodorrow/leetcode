function hideString(str,done){
    process.nextTick(()=>{
        done(str.replace(/[a-zA-Z]/g,"X"))
    })
}
hideString("hello world",(hidden)=>{
    console.log(hidden)
})
function log(str){
    console.log(str)
}

log("end")

function delay(seconds,callback){
    setTimeout(callback,seconds*1000)
}
log("starting dealys")
delay(2,()=>{
    console.log("two seconds");
    delay(1,()=>{
        log("3s");
        delay(1,()=>{
            log("4s")
        })
    })
})
var delay=(seconds)=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("the long dealy has ended")
    },seconds*1000)
});

delay(1).then((msg)=>{
    log("the dealy has ended");
    log(msg)
}).then(()=>{
    console.log(3)
})
.then(()=>{
    log(4)
})
