// there is use of 2 keywords only "extends" and "super"
class name{
    constructor(name){
        this.name=name
    }
    logMe(){
        console.log(`the name is ${this.name}`);
    }
}
const naam= new name("prad")
naam.logMe()

class dept extends name{
    constructor(name, dept){
        super(name) 
        this.dept=dept
    }
    logging(){
        console.log(`the man with name ${this.name} is in ${this.dept}`);
    }
}
const data= new dept("prad", "hr")
data.logging();
data.logMe();  //this would work as well coz its inherited property from class "name"

//we can know if an intence is of a class or not
console.log(data instanceof dept);
console.log(data instanceof name); //would give true coz name is inherited into dept

