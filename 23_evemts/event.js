a=document.getElementById("one")
console.log(a)
a.style.backgroundColor='pink'
a.addEventListener("click",function(e){
    console.log("touch",e)
    e.stopProporgation()
    if(a.style.backgroundColor=='pink'){
        a.style.backgroundColor='green'
    }
    else{
        a.style.backgroundColor='pink'
    }

})
b=document.getElementById("ul1")
b.style.backgroundColor='green'
b.addEventListener("click",function(e){
    console.log("touch",e)
    if(a.style.backgroundColor=='pink'){
        a.style.backgroundColor='green'
    }
    else{
        a.style.backgroundColor='pink'
    }

})
// add.EventListner(event,callback function,boolean)
// boolean is used for canturing 
console.log(a)