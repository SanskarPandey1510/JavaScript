class username{
    constructor(name){
        this.name=name
    }
    pname(){
        console.log(`my n s ${this.name}`)
    }
}
class user extends username{
    constructor(name,room,roll){
        super(name) 
        // super should be called before accessing this 
        this.room=room
        this.roll=roll
    }
}
const u1= new user("sans",1112,3344)
console.log(u1)
u1.pname()
console.log(username instanceof Object)