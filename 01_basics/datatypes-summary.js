//types of datatypes- Primitive(Value) & Non-primitive(reference)
/*****primitive(number, bigInt, string, boolean, null, uundefined, symbol*****/
const number= 33              
let bigNum = 23243259899825n
console.log(typeof bigNum)
let isLoggedIn = true
let name= "Pradumna"
let weather= null
let value= undefined
let id= Symbol(43)
let anotherId= Symbol(43)
console.log(id == anotherId) // because the returned value for each id would be different 

//**Non-primitive OR Reference( array, object, function) **/
const arr= [1, 2, 3]
let obj= {        // objects are key-pair value
    name: "Pradumna",
    age: 22
}
let func= function(){
    console.log("I am a function")
}
console.log(typeof arr)  //would give object
console.log(typeof obj)  //would give object
console.log(typeof func) //would give function also called object function


