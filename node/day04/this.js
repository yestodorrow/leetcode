let t=()=>this.xx=3;
t();
console.log(this.xx)
var xx=4;
function tt(){
    this.xx=3
}
tt();
console.log(this.xx)
var obj={
    xx:999,
    t:function(){
        return this.xx
    }
}
obj.t()
var dog={
    xx:"wang"
};
dog.t=obj.t()
console.log(dog.t-obj.t())
