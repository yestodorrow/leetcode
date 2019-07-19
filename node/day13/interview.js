// 手写map和filter
function map(arr,fn){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr[i]=fn(arr[i],i,arr)
    }
    return newArr
}


function filter(arr,fn){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i,arr)){
            newArr.push(arr[i])
        }
    }
    return newArr;
}


// node 异步的 单线程
//  callback pattern
    function hideString(str,done){
        process.nextTick(()=>{
            done(str.replace(/[a-zA-Z]/g,"X"))            
        })
        
    }
    var hidden=hideString("Hello world",(hidden)=>{
        console.log(hidden)
    });
    
    console.log("end")


    function delay(second,callback){
        setTimeout(callback,second*1000)
    }
    console.log("starting delays");
    delay(2,()=>{
        console.log("two seconds");
        delay(1,()=>{
            console.log("3 seconds")
            delay(1,()=>{
                console.log("4 seconds")
            })
        })
    })


    var delay=(seconds)=>new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("the long delay has ended")
        },seconds*1000)
    })
    delay(1).then((msg)=>{
        console.log( msg)
    }).then(()=>{
        console.log("this has ended")
    })

