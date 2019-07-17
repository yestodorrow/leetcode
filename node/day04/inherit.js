function tiger(){
    this.bark=function(){
        console.log("我是百兽之王")
    }
}
var hu= new tiger();
console.log(hu._proto,tiger.prototype)
function cat(){

    this.climb=()=>{
        console.log("我会爬树")
    }
}
hu.bark()
var bosi= new cat()
bosi.climb()
//开始继承
tiger.prototype=new cat();

var hnhu=new tiger();
console.log(hnhu.prototype)
hnhu.climb()


function t1(){
    var age=24;
        return function t2(){
            console.log(age++)
    }
}
var tmp=t1();
var age=333
tmp();
tmp();
t1()()
t1()()


function a(xx){
    this.x=xx;
    return this;
}
var x=a(5);
var y=a(6);
console.log(x.x==y.x)

console.log(y.x)


var name = "caibaojian.com"; 
var person = {
  name: "kang",
  pro: {
    name: "Michael",
    getName: function() {
      return this.name;
    }
  }
};
console.log(person.pro.getName());
var people=person.pro.getName;
console.log(people())