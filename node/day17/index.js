//实现一个单链表的反转，例如
// 10 9 8 7 6 5 4 3 2 1 
//反转后应该为：
//1 2 3 4  5  6 7 8 9 10
const os=require("os")
//注意代码风格和时间复杂度/空间复杂度
let memory=process.memoryUsage();
let {rss,heapUsed}=memory;
console.log(rss/heapUsed)
function reverseLink(list){
    if(list==null||list.next==null){
        return list
    }else{
       
       let {prev,next}=list;
       list.next=prev;
       list.prev=next;
    }
}