function setuname(name){
this.oname=name

}
function eUser(name,clas,roll){
    // setuname(name) ->functoion is not called here
    // setuname.call(name) -> we  have to pass this context as reference tto another function
    setuname.call(this,name)
this.room=clas

this.rollno=roll


}
const u1= new eUser("sans",1112,2201)
console.log(u1)

