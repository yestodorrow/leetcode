// 少一个var的后果，私有属性和全局属性
var myVariable="global";
myOtherVariable="global";
function myFunction(){
    var myVariable="local";
    return myVariable
}

function myOtherFunction(){
    myOtherVariable="local";
    return myOtherVariable;
}
console.log(myVariable)//
console.log(myFunction())//
console.log(myVariable)//没有变化
console.log(myOtherVariable)
console.log(myOtherFunction())//少var 
console.log(myOtherVariable)//有变化

