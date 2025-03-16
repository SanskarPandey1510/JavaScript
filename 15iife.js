//  Immediately Invoked Function Expression (IIFE)

// we want function to be execute immidiately

(function chai(){
    console.log("Hello db connected")
})();
// (function(){})() -> it will immidiately invoke the function
// ; semicolon shuld be added to end thr invoked function

((name)=>{
    console.log(name)
})("sans");

chai()
// The function chai is defined inside the IIFE and is not available globally.
// Since it is not stored in a variable, you cannot call it again.

// you can store the result of an IIFE in a variable, but not the function itself because the function executes immediately and does not remain accessible.