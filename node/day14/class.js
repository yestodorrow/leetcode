function Person(name){
    this.name=name;
}
Person.prototype.sayName=function(){
    console.log(this.name)
}
var person1=new Person("Nicholas");
person1.sayName();
console.log(person1 instanceof Person)
console.log(person1 instanceof Object)


class PersonClass{
    constructor(name){
        this.name=name;
    }
    sayName(){
        console.log(this.name)
    }
}

let person=new PersonClass("Nicholas")
person.sayName();
console.log(person instanceof PersonClass);
console.log(person instanceof Object);
console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName)