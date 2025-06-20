// basic if, else statements. So nothing much here
// "=" is assignment operator
// "==" is used to check for a value
// "===" is used to check the value and datatype as well
// "!==" checks for unequality of both the value and datatype
let marks1= "4"
if(marks1===4){  
    console.log("Marks are ",marks1);
}
else{
    console.log("Marks not defined");
}

//implicit way to write multiple statements in a condition
const val= 200
if(marks1<500) console.log("marks less than required marks"), console.log("you failed");
//but this is not readable at all and hence should be avoided
