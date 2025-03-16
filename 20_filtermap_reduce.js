const nums=["js","c++","java","python"]

//  for each loop doesn't return anything

const arr=[1,2,3,4,5,6,7,8,9]

const arr2=arr.filter((n)=>{
    if(n>4){
        return n
    }

})
console.log(arr2)


const arr3=arr.map((x)=>x+10)
console.log(arr3)

// chaining of map


const arr4=arr.map((x)=>x+10).map((x)=>x*=10).filter((x)=>(x>120))
console.log(arr4)





const t=arr.reduce((acc,curr)=>{
    return acc+curr
},0)
console.log(t)
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
let v=objarr.reduce((acc,curr)=>{
    return acc+curr.no
},0)
console.log(v)