const user={
    name:"sans",
    prise:100,
    welcome:function(){
        console.log(`welcome ${this.name}`)
    }
}
user.welcome()
// This keywoed work inside object


const chai=()=>{
    let username="sanss"
    console.log(this.username)
}
chai()
// this keyword don't work under arrow function


const add2=(num1,num2)=>num1+num2
const add22=(num1,num2)=>(num1+num2)
// Implicit return -> when return key word is not used and with no paranthesis