class User{
    constructor(name,email,no){
 this.name=name
 this.ail=email
 this.no=no       
    }
    changep(){
        return `this.ppp ${this.name}`
    }
}
const x= new User("sans","sans@1122",34455)
console.log(x)
console.log(x.changep())