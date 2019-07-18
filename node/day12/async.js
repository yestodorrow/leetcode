const posts=[
    {title:"post one",body:"this is body one"},
    {title:"post 2",body:"this is body 2"},
]

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`${post.title}`
        })
    },1000)
}

// function createPost(post,callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback()
//     },2000 )
// }

// createPost({title:"post 3",body:"body 3"},getPosts)



function createPost(post,callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve()
            }else{
                reject()
            }
        },2000 )
    })
    
}

createPost({title:"post 3",body:"body 3"})
.then(getPosts)
.catch(err=>{
    console.log(err)
})



