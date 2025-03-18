let herop={
    spiderman:"web",
    superman:"laser",
    spidy:function(){
        console.log(`1spiderman p ${spiderman}`)
    }
}
Object.prototype.sans=function(){
    console.log("sanskar is here")
}
herop.sans()

// Object is the arent of all elements


// Inheritance
const user={
    nams:"sanskar",
    email:"sansp1717"
}
const spu={
    isa:false,
    __proto__:user
    // it will inherit properties of user
}
Object.prototype(user,spu)
// Object.prototype(x,y) x wwill access all properties of y



