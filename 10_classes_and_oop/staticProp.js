// this is used when you don't wanna give access of a method through inheritance
class name{
    constructor(name){
        this.name=name
    }
    static logMe(){
        console.log(`the name is ${this.name}`);
    }
}

class proff extends name{
    constructor(id, name){
        super(name)
        this.id=id
    }
}
const proff1= new proff("abc", "abc@123")
proff1.logMe() //won't work coz we have not given access