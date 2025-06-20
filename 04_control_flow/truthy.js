let email= " "
if(email){
    console.log(`your email is ${email}`);
}
else{
    console.log(`email not mentioned`);
}

//falsy values
//false, 0, -0, BingInt 0n, "", null, undefined, NaN

//truthy values
//anything in string, "0", " ", [], {}, function(){}

const name= []
if(name.length==0){
    console.log("name is invalid");
}
const emptyObj= {}
if(Object.keys(emptyObj.length==0)){
    console.log("length is zero");
}

//Nullish Coalescing Operator (??): undefined..used for putting a flag value just in case there is some null or undefined value
const val1= 5 ?? 10
const val2= null ?? 10
const val3= undefined ?? 5
const val4= null ?? 5 ?? 10
console.log(val4);

//Terniary Operator
// condition ? true : false

const price= 100
price<80 ? console.log("costly") : console.log("affordable");


