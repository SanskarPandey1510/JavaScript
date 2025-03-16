let a=10
const b=20
var c=30
if(true) {
    let a1=100
    const b1=200
    var c1=300

    // let and const are local scope
    // var is global scope -> can be accessed outside the block

}
print=function(x){
    console.log(x)
}
// another way to make function
print(a,b,c)
print(c1)




//**********************************************************************************************************************************

print(f(1))

function f(x){
    return x+1
}

// the above is valid **********



print(f2(1))

const f2=function(x){
    return x+1
}

// the above is unvalid **********