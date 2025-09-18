// everything from an array, function or even strings are objects
// let's try to add a method to a function like we do in any object
function rando(){
    return 69;
}
rando.id= "Pradumna"
console.log(rando());
console.log(rando.id); //this won't give any error because we have declared the method already

function data(name, id, score){
    this.name= name;
    this.id= id;
    this.score= score;
}

//let's create a method that would automatically increse the id by 1

data.prototype.incrementer= function(){
    this.id++;
}
data.prototype.print= function(){
    console.log(`the id for this data is ${this.id}`);
    
}
//we have to use the new keyword every time to create an instance
const info= new data("prad", 6, 200);
const info2= new data("darp", 9, 300)
info.incrementer();
info.print();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/