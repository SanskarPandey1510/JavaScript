a=110
if(a==100){
    console.log("hello")

}
else if(a>100){
    console.log("a>100")

}
else{
    console.log("byee")
}

if(a>100) console.log("a>100")

key=211
switch(key){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
        break;1
    default:
        console.log("N0")
}


const name="sans"
if(name){
    console.log(name)

}


// Falsy values =>0, -0, BigInt 0n, "", null, undefined, NaN
//  Other than that all are true value ex-> "0", "false", " ", [], {}, function(){} empty function, etc....





// Nullish Coalesing Operator (??) : null Undefined

let val= null ?? undefined ?? 10
console.log(val)

//  Terniary Operator
//  Condotion ? true : false
const cort =1000
cort <=100 ? console.log("YEs") : console.log("False")