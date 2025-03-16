function say(){
    console.log("hello")
}
say()

function add(n1,n2){
    console.log(n1+n2)
    return n1+n2
}
console.log(add(1,2))


function adde(...x){
    return x
}
function print(v){
    console.log(v)
}
print(adde(1,2,3,4,5,5,6))




const obj={
    username:"sans",
    price:100
}
 

function handle(oj){
console.log(`name id ${oj.username} and cost ${oj.price}`)
}

handle(obj)