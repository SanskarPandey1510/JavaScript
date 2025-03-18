// oops - its a programming paradime (a way of programming)

// JavaScript supports classes, introduced in ES6 (ECMAScript 2015). They are a syntactic sugar over JavaScript's prototype-based inheritance.

// JavaScript classes are syntactic sugar over the prototype-based inheritance system, making object-oriented programming (OOP) easier to read and write.
// console.log(this)
function hii(name,classs ,no){
    this.iname=name
    this.room=classs
    this.pno=no
    // this.g=function(){
    //     console.log("Welcome")
    // }
    console.log(this)
}
const f1=new hii("sans",12,22119)
const f2=new hii("sansA",132,221219)
console.log(f1,f2)

// function is also an object


function boy(val){
    this.val=val
}
boy.prototype.increment=function(){
    this.val++
}
const boy1=new boy(3)
console.log(boy1)
boy1.increment()
console.log(boy1)


// new key word initiate  a new object