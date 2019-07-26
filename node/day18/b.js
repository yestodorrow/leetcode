// function hideString(str,done){
//     process.nextTick(()=>{
//         done(str.replace(/[a-zA-Z]/g,"X"))
//     })
// }
// hideString("hello world",(hidden)=>{
//     console.log(hidden)
// })
function log(str){
    console.log(str)
}

// log("end")

// function delay(seconds,callback){
//     setTimeout(callback,seconds*1000)
// }
// log("starting dealys")
// delay(2,()=>{
//     console.log("two seconds");
//     delay(1,()=>{
//         log("3s");
//         delay(1,()=>{
//             log("4s")
//         })
//     })
// })
// var delay=(seconds)=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("the long dealy has ended")
//     },seconds*1000)
// });

// delay(1).then((msg)=>{
//     log("the dealy has ended");
//     log(msg)
// }).then(()=>{
//     console.log(3)
// })
// .then(()=>{
//     log(4)
// })

// var fs=require("fs");
// var {promisify}=require("util");
// log(promisify);
// var writefile=promisify(fs.writeFile)
// writefile("sample.txt","this is a sample").then(()=>log("success")).catch((error)=>log(error))

function BinarySearchTree(){
    var Node=function (key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
    var root=null;
    this.insert=function(key){
        var newNode=new Node(key);
        if(root==null){
            root=newNode
        }else{
            this.insertNode(root,newNode)
        }
    };
    this.insertNode=function(node,newNode){
    
        if(newNode.key<node.key){
            if(node.left==null){
                node.left=newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right==null){
                node.right=newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    this.log=function(){
        console.log(root)
    }
    
    this.inOrderTraverse=function(callback){
        this.inOrderTraverseNode(root,callback)
    }
    this.inOrderTraverseNode=function(node,callback){
        if(node!==null){
            this.inOrderTraverseNode(node.left,callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right,callback)
        }
    }
}
function printNode(value){
    log(value)
}
var tree=new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25)
tree.log()
//树的遍历
// 中序遍历
tree.inOrderTraverse(printNode)