const obj={
    name: "prad",
    age: 21,
    data: function(){
        // console.log(this); would return context of the whole object
        console.log(`the name is ${this.name}`); //we added this to let the function know the context
        
    }
    
}
obj.data();
console.log(obj.name);

// let's understand what is constructor(provides new instance) function through example of a keyword called "new"
function func(name, isLoggedIn){
    this.name = name; //it's commom nomenclature to name variables same as the arguments, just add this
    this.isLoggedIn= isLoggedIn;
    this.greeting= function(){
        console.log(`hello ${this.name}`);
        
    }
    return this
}
const one=func("darp",true)
console.log(one);
const two= func("prad", false)
console.log(two);
console.log(one);
//you would see that the actual value has been overwritten after running the function second time. 
//Here comes "new" in play


// const one= new func("darp", true);
// const two= new func("prad", false)

console.log(one.constructor); //a constructor function basically points to itsef and its content

