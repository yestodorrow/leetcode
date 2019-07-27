const arr=[1,2,3,34,11,3,122,34444,2,23,23]
arr.sort((a,b)=>a-b)
function binary_search(arr,value){
    let high=arr.length-1,low=0,mid=0;
    while(low<=high){
        mid=Math.floor((low+high)/2);
        if(arr[mid]==value){
            console.log(mid)
        }else if(value>arr[mid]){
            low=mid+1
        }else{
            high=mid-1;
        }
    }
}
console.log(33)
binary_search(arr,122)