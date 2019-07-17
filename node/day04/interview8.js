//given an unsorted array,find the maximu difference
//between the successive elements in its sorted form
var arr=[1,2,3,7,12,3,7,20,2333];
for(let i=0;i<10000;i++){
    arr.push(Math.floor(Math.random()*9000))
}
function getDifference(arr){
    let newArr=Array.from(new Set(arr)).sort((a,b)=>b-a);
    return newArr[0]-newArr[newArr.length-1]
}
console.time("started")
console.log(getDifference(arr))

console.timeEnd("started")
 