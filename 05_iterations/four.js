//for each loop
//it is a prototype, injected by default with arrays
//would be used mostly for traversing arrays
//we create an unnamed function(callback function)
const arr= ['id', 'name', 'age']
arr.forEach( function (value){
    console.log(value);
} )

//we would use this mostly with the arrow function
arr.forEach( (element) => {
    console.log(element);
} )

// can even call a function in this loop
const func= function(value){
    console.log(value);
}
arr.forEach(func)

//we can have multiple things passed into foreach. value, index, array. Again, nomenclature doesn't matter

arr.forEach((val, idx, array)=>{
    console.log(val, idx, array);
})

const ArrWithObject= [{
    name: "Prad",
    age:22
},{
    name: "Darp",
    age: 21
}]
ArrWithObject.forEach((val)=>{
    console.log(val);
})