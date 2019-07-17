"use strict"
let greeting;
greeting={};
console.log(greeting)

function bark(){
    console.log("woof")
}
bark.animal="dog"
console.log(typeof bark)


function Person(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName
}
const memeber=new Person("Lydia","hallie");
// Person.getFullName=()=>consoel.log(this.firstName+this.lastName);
Person.prototype.getFullName=()=>consoel.log(this.firstName+this.lastName);
memeber.getFullName()
