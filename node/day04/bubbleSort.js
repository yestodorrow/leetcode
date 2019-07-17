let swapped;
var s=[1,2333,33,33,222,222,99];
for(var i=0;i<10;i++){
    s.push(Math.floor(Math.random()*188))
}
function bubbleSort(arr){
    let end=arr.length-1;
    swapped=false;
    for(let i =0;i<end;i++){
        if(arr[i]>arr[i+1]){
            swapped=true;
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
    end--;
}
do{
    bubbleSort(s)
}while(swapped)
console.log(s)


