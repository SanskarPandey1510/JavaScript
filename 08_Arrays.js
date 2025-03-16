const arr=[1,2,3,4,5,6,'Sans']

// Shallow copy -> Same reference
// Deep copy -> Individual copy (do not share same reference)

print=function(val){
console.log(val)
}


arr.push(1000)

console.log(arr)

arr.pop()


arr.unshift(10)
// .unshift(x) append x at the begning

arr.shift()
// .shift() remove first element

console.log(arr.includes(9))
// .includes(x) check wether x is in arr or not

let sa=arr.join()
console.log(arr)
console.log(sa)



let x=arr.slice(2,5)
print(x)
print(arr)

let y=arr.splice(2,5)
// splice manipulates the original array ,It removes the splice part of the array.
print(y)
print(arr)