//  for of loop
const arr=[1,2,3,4,5,6,7]

for(const x of arr){
    // console.log(x+1)
}

s="Sans"

for(const x of s){
    // console.log(x)
}



// maps in js

const map=new Map()
// remembers insertion order

map.set(1,8)
map.set("In","India")
map.set("us","USA")
map.set(1,"India")
console.log(map)

// let print=(vv)=>{
//     console.log(vv)
// }
function print(...vv){
    console.log(vv)
}

for(const key of map){
    // key is a array of length 2 has key and value as its elment
    print(key)
}
// for(const [key,value] of map){
//     print(key,value)
//     console.log(key,value)
// }

//  For of loop can't be used for object hence for in loop is used

// ***************************************************** Iteration in object ****************************************************************

const obj={
    js:"javas",
    j:"java",
    c:"cpp"

}

for(const key in obj){
    console.log(`${key} for ${obj[key]}`)
}



// arr=[1,2,3,4,5,6,7,8]
for(const x in arr){
    print(x)
    // for an array key is the index hence it for in loop will get the index of array
}

// it can't be used for map




// *****************************************************  for each object ****************************************************************


const nums=["js","c++","java","python"]

nums.forEach((name)=>{
    console.log(name)
})

function upname(name){
    console.log(name.toUpperCase())
}
nums.forEach(upname)

// .forEach(callback function)
// call back function can get (item,index,array)

nums.forEach((name,index,arr)=>{
    console.log(name,index,arr)
})


let objarr=[
    {
        lan:"eng",
        no:1
    }
    ,
    {
        lan:"eng2",
        no:12
    },
    {
        lan:"eng3",
        no:1229
    },
    {
        lan:"eng4",
        no:1222
    }
]
objarr.forEach((obj)=>{
    console.log(obj.lan,obj.no)
})