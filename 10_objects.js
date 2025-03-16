//  Singleton ->make a unique(when made using constructors)
// Object.create()

// object literals -> It is not singleton
const sym=Symbol("key1")

const x={
    name:"js",
    v:100,
    available:false,
    "full name":" java script",
    [sym]:"key1"
    // to use symbil as a key we should use [symbol] '[]'

}

// object is in form of key and values

print=function(x){
    console.log(x)
}

print(x.name)
print(x["name"])
// since keys are stored as string
print(x["full name"])


x.call=function(){
    console.log("hello")
}
// value as a function

x.call2=function(){
    console.log(`my name is ${this.name}`)
    console.log(`my name is ${this['full name']}`)
    // this key-word is use to access the referenced object
}

print(x.call2())

Object.freeze(x)
// Object.freeze(x) now attributes of x cant be changed
