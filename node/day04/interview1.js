//put word at the end and start of arr
var myArray=["a","b","c"]
//方法1
// myArray.unshift("start");
// myArray.push("end")
// console.log(myArray)
//方法2
myArray=["start",...myArray,"end"]
console.log(myArray)



//how do you create a private variable in Javacript?

function secretVariable(){
    var private="super secret code"
    return function (){
        return private
    }
}
var getPrivateVariable=secretVariable();
console.log(getPrivateVariable())




//what is the output?
var num=4;
function outer(){
    var num=2;
    function inner(){
        num++;//undefined++
        console.log(num)//NaN
        var num=3;
        console.log(num)
    };
    inner();
}
outer()



//what is the output?
console.log
(typeof //string
    (typeof 1)//number
    )
    //string


//what is the output?
var hero={
    _name:"John Doe",
    getSecretIdentity:function(){
        return this._name
    }
}   
var stoleSecretIdentity=hero.getSecretIdentity;
var stoleSecretIdentity2=hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity())//undefined;
console.log(hero.getSecretIdentity())//"John Doe"
console.log(stoleSecretIdentity2())//"John Doe"