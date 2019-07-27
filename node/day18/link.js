// const n1={
//     data:100
// }

// const n2={
//     data:200
// }

// n1.next=n2;
// console.log(n1) 
function log(str){
    console.log(str)
}

class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}
const n1=new Node(100)
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

    //insert first node
    insertFirst(data){
        this.head=new Node(data,this.head);
        this.size++
    }

    //insert last node

    insertLast(data){
        let node=new Node(data);
        let current;
        if(!this.head){
            this.head=node
        }else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node
        }
    }

    //insert at index



    //get at index




    //remove at index



    //clear the list



    //print list data
}
log(n1)
const ll=new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300)
ll.insertFirst(5)
log(ll)