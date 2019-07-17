var path = require("path")
console.log(path)
let getPath = p => path.resolve(__dirname, p);
let pa = getPath("public");
console.log(pa);
const book2 = {
    title: "book one",
    author: "liugang",
    year: "2014",
    getSummary: function () {
        return `${this.title} was written by ${this.author}`
    }
}
console.log(Object.values(book2));
console.log(Object.keys(book2))

//constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummary=function(){
    //     return `${this.title} was written by ${this.author}`
    // }
}

Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author}`
}
Book.prototype.getAge=function(){
    const year=new Date().getFullYear()-this.year;
    return `${this.title} is ${year} years old`
}
Book.prototype.revise=function(newYear){
    this.year=newYear;
    this.revised=true;
}

const book1 = new Book("book1", "liugang", "2009");
const book3 = new Book("book3", "liugang", "2013")
console.log(book1.getSummary())
console.log(book1.getAge())
book1.revise("2018");
console.log(book1 )

function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month=month;
}
Magazine.prototype=Object.create(Book.prototype)
const mag1=new Magazine("Mg1","liugang",2028,8)
console.log(mag1)

console.log(mag1.getSummary())
