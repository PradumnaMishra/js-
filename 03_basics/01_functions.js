function fun(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("D")
}
fun()

function sum(num1, num2){  //called parameter
    return num1+num2
}
console.log(sum(3, 1));    //called argument

function func(name){
    console.log(`My name is ${name}`);

}
func("Prad")

//if the argument is not passed then we could set that in advance in parameter itelf
function func2(empName= "Ajay"){
    return `my name is ${empName}`
}
console.log(func2())

//let's see a case where there is a condition that checs if arguments passed are valid or not
function func3(name){
    if(name===undefined){   //could also have put it like if(!name){}
        console.log("Please enter a valid name")
        return
    }
    console.log(`Name is ${name}`);
    
}
func3()

//rest operator (...). Rest and spread are both the same only the usecase of both the operators differentitates them
function cartPrice(...amount){  //this ensures that all the values are printed
    console.log(amount);

}
cartPrice(199, 299, 999); 

const data={
    name: "Prad",
    age: 22
}
function myfunc(anyobject){
    console.log(anyobject.age);
}
myfunc(data);
//can also add the function directly in the argument
myfunc({
    name:"Om",
    age: 12
})
//can similarly add any array as well



