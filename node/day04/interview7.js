/**
 * write a function to determin
 * the largest difference between
 * any two numbers in an array of
 * numbers
 */
let numbers=[12,2,10,6,5,5,6,9,8,10,33];
let difference=(function(arr){
    //will remove all the duplicates
    // let answer=new Set(arr);
    // pass set back to an array
    // let answer = Array.from(new Set(arr))
    // console.log(answer.length)

    //sort array from smallest to the biggest
    let answer=Array.from(new Set(arr)).sort((a,b)=>(b-a));
    //calculate difference between the first and the last digits
    return answer[0]-answer[answer.length-1]
})(numbers);
console.log(difference)


