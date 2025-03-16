a=[1,2,3,4,5,6]
b=[7,8,9,10]
// a.push(b)
print=function(x){
console.log(x)
}
// print(a)

c=a.concat(b)
// merge two array
print(c)

d=[...a,...b]
// ... this is spread operator it will spread the array
print(d)


let e=[1,2,3,[4,5,6,7],[8,[9,10]]]
let f=e.flat(Infinity)
// .flat(x) ot will recursively rerrange nested array till the depth of x (x can be set to Infinity for rearrangng all nested arrays)
print(f)


c=Array.isArray("hiii")
// Array.isArray() checks wether its an array or not

c=Array.from("helllo")
// Array.from(x) convert it in array
// Objects can't be converted to array , it will return an empty array
print(c)


c=Array.of(1,2,3,4,[1,2,3,4,5])
// Array.of(x,y,z.....) convert arry from set of elements
print(c)