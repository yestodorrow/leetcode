/*
*write a function to determine
if the supplied string is a 
palindrome

*/ 


let palindrome=function(word){
    let len=word.length;
    let start=word.substring(0,Math.floor(len/2)).toLowerCase();
    let end=word.substring(len-Math.floor(len/2)).toLowerCase();
    console.log(start,end);
    let flip=[...end].reverse().join("");
    return (start == flip)
}

console.log(palindrome("radar"))
console.log(palindrome("redder"))
console.log(palindrome("window"))
