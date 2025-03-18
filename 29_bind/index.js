// x=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(x)
// console.log(Math)

const obj={
    one:1,
name:"sanskar",
email:"sans12"
}
Object.defineProperties(obj,'name',{
    writable:false,
    enumerable:false
})
for(let [key,value] of Object.entries(obj)){
    console.log(key,value)

}
for(let x in obj){
    console.log(x)

}
