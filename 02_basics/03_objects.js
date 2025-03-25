const mySym= Symbol("hi")
//to use this symbol as a key in an object we gotta use '[]'
const data= {
    name: "Pradumna",
    "full Name": "P.K. Mishra", 
    [mySym]: "mySymbol1",
    age: 22,
    location: "Delhi",
    email: "prad@netflix.com"
}
console.log(data.age); //one way to print anything from an object
console.log(data["age"]); //this works as well
//In fact if we try to access any key that has quotes("")and space too then we'll have to use the above stated way for accessing
// console.log(data.full Name); //won't work
console.log(data["full Name"]); // would work
console.log(data[mySym]); //note that to access symbol we don't use the " ".
data.age= 21
// console.log(data)
// Object.freeze(data) //now we can't change any value in the object
data.age=23 //won't work
// console.log(data);

//let's add a function in the object
data.myfunc= function(){
    console.log("hello");
}
console.log(data.myfunc());
//to add another value from the object into this function
data.myfunc2= function(){
    console.log(`hello ${this.name}`);
}
console.log(data.myfunc2());









