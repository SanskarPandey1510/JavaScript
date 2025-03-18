class obj{
    constructor(name,mail,pass){
        this.name=name
        this.pass=pass
        this.mail=mail
    }
get pass(){
    return this._pass
}
    set pass(val){
this._pass=val
    }
}
// we have to make both getter and seeter both