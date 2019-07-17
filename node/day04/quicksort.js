function quickSort(arr) {
    if (arr.length <= 1) return arr;
    var pivot = arr[arr.length - 1];
    var left = [], right = [];
    for (var i = 0; i<arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}
var s=[1,2333,33,33,222,222,99];
for(var i=0;i<10;i++){
    s.push(Math.floor(Math.random()*188))
}
console.log(s);
let a=quickSort(s);
console.log(a)