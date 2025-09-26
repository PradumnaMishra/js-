//while naming any file "class", use it with something else
class info{
    //a constructor has to be made which would be called when an instance is made by "new" kyeword
    constructor(name, email, pass){
        this.name=name
        this.email= email
        this.pass=pass
    }
    encrypt(){
        console.log(`the encrypted password is ${this.pass}abc`);
    }
}
const data= new info("prad", "prad@gmail.com", "prad@1")
data.encrypt();

//how it would have happened if done by making functions and using prototypes

function user(name, id, pass){
    this.name=name
    this.id=id
    this.pass=pass
}
user.prototype.encryption=function(){
    console.log(`the encrypted pass is ${this.name}@123`);   
}
const data2= new user("darp", "darp@outlook", "darp@")
data2.encryption();