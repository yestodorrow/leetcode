// 移除数组 arr 中的所有值与 item 相等的元素，
// 直接在给定的 arr 数组上进行操作，并将结果
function remove(arr,item){
    let newArr=[];
    arr.forEach(element => {
        if(item!=element){
            newArr.push(element)
        }
    });
    return newArr;
}
let remove2=(arr,item)=>{
    for(var i=0;i<arr.length;i++){
        if(item==arr[i]){
            arr.splice(i,1);
           i--;
        }
    }
    return arr
}
function remove3(arr,item){
    for(var i=0;i<arr.length;i++){
        if(item==arr[i]){
            arr.splice(i,1);
           i--;
        }
    }
    return arr
}
console.log(remove([1,2,3,3,3,33333,3],3))
console.log(remove2([1,2,3,3,3,33333,3],3))
console.log(remove3([1,2,3,3,3,33333,3,33,3,3],3))

// 找出元素 item 在给定数组 arr 中的位置
let findIndex=(arr,item)=>{
  let indexArr=[]
  let newArr=  arr.filter((v,i,arr)=>{
        return v==item && indexArr.push(i)
    })
    return indexArr
}

console.log(findIndex([1,2,3,3,3,3333,3,3,3,3],3))



// 数组求和

let add1=(arr)=>{
    let sum=0;
    arr.forEach((v)=>{
        sum+=v
    })
    return sum
}
let add2=(arr)=>{
    return arr.reduce((a,b)=>{return a+b})
}
console.log(add1([1,2,3,,4,5]))
console.log(add2([1,2,3,,4,5,5,5]))