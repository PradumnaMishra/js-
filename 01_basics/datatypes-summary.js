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

/****Stack and Heap****/
// Primitve-> stack(a copy is given)  &  Non-primitve-> heap(a reference is given)
const name1= "Pradumna"
let name2= name1
console.log(name2) //a copy of value stored in stack is given to name
name2= "Mishra"
console.log(name1)
console.log(name2) //only name2 changed coz a copy of the value had been given to the name2 but not the actual value

let emp1= {
    empName: "Prad",
    empId: 2341
}
let emp2= emp1;
emp2.empName= "darp"
console.log(emp2.empName)
console.log(emp1.empName) //this too changed because value in heap is refernced(actual value and not a copy) and it has been changed by one of the accessors

