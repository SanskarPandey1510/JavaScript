
// >********************************************* comparator *********************************************************************


console.log(1>2)

console.log("02">1)
// Comparison in Different datatypes causes ambiguity

console.log(null>0)
console.log(null==0)
console.log(null>=0)

// This occurs because comparison and equality operators work diffrently
// == this work differently then >=,<=,<,>
// == -> compare value
// === compare value and datatypes




// >********************************************* datatypes *********************************************************************

// Primitive -> call by value (we get a copy of original data instead of allocated address)
//  => String, Number, Boolean, null, Undefined, Symbol, BigInt

// Non-Primitive -> call by reference(we get rederence to adress)
// => Arrays, Object, Functions

// Js is a dynamically typed language

const x=1;
console.log(x);


const id =Symbol("123")
console.log(id)


arr=[1,2,3,4,56,7]
obj={
    name:"sanskar",
    rollno:"22118087",
}

const f=function(){
    console.log("Hello World")
}
f()
console.log(f)

console.log(typeof arr)
console.log(typeof obj)
console.log(typeof f)




// Stack(priimitive data will go in it) and heap(non-primitive data will go in it) memory


let x1=100
let y=x1
x1=1
console.log(x1)
console.log(y)

let obj1={
    val:"a"
    ,
    val1:"b"

}
// Stored in heap
obj2=obj1