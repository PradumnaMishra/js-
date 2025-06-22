//this is about .filter method. It also uses a callback function and needs a condition and also returns an array
const num= [1, 2, 3, 4, 5, 6]
const filteredNum= num.filter( (val)=> val%2===0 )
const filterNum= num.filter(function(val) {return val%2===0})
//notice how we need to put a "return" in a traditional function and not in arrow function
//This is because when declared implicitly you don't need a return but when putting a '{}' means it's a new scope hence return is required (refer 03_basics/03_arrow.js)
console.log(filterNum);

//try doing this with .foreach but it doesn't return anything so we have to take an array as well'
const newNum= [];
num.forEach( (val)=> { 
    if(val%2!==0) newNum.push(val);
} )
console.log(newNum);

//can also add multiple conditions
const data=[{name: "A", age: 23, job: "frontend"},
    {name:"B", age: 21, job: "tester"},
    {name:"c", age: 23, job: "fullStack"},
    {name:"D", age: 20, job: "backend"},
    {name:"E", age: 24, job: "frontend"},
    {name:"F", age: 22, job: "tester"},
    {name:"G", age: 19, job: "backend"},
]
const newData= data.filter((val)=> val.age>=21 && val.job==="tester")
console.log(newData);




