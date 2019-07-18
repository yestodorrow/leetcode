let array=[3,4,2,6,6,645,2,3,83,23,13];
sorted=array.sort((a,b)=>a-b);
console.log(array)
function binary_search(arr,value){
    let high=arr.length-1;
    let low=0;
    let mid=0;
    while(low<=high){
        mid=Math.floor((high+low)/2);
        if(arr[mid]==value){
            return arr[mid]
        }else if(value>arr[mid]){
            // move the low up one
            low =mid+1
        }else{
            //move the hight up one
            high=mid-1
        }

    }
        return -1
    
}

console.log(binary_search(array,645))