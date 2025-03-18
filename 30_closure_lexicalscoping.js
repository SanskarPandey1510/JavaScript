// Closure -> closure gives you an access to outer function scope from an inner function.
// In JavaScript, lexical scoping means that a function's scope is defined by its physical location in the source code. 
// This allows inner functions to access variables declared in their outer enclosing functions.
function outer(){
    let username="Sans"
    function inner(){
        console.log(username)
        // although inner function maes a seperate execution context , but it will be able to access username (an attribute of outer class)
    }
    inner()
}
outer()


function one(){
    let name="sans"
    function two(){
        console.log(name)
    }
    // function 2 has it own exection context but it is passed as a lexical scope
    return two

}
let x=one()
x()