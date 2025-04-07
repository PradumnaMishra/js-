const obj= new Object() //non singleton way to declare an object
const obj1={}
obj1.email= "dopaminemishra@gmail.com"
obj1.id= "abcx123"
console.log(obj1);

const obj2= {
    name:{
        fullName:{
            firstName: "Pradumna",
            secondName: "Mishra"
        }

    }
}
console.log(obj2.name.fullName.firstName);

const obj3= {1: "a", 2: "b"}
const obj4= {3: "c", 4: "d"}
const obj5= Object.assign(obj3, obj4) //(target, source)
console.log(obj3);
console.log(obj5);
//that's why in order to save these copied objects as new object, we add parenthesis()
const obj6= Object.assign({}, obj3, obj4)
 
//although we would use spread operator most oftenly
// console.log(...obj3, ...obj4) //can't do this unlike arrays coz object is not iterable
const obj7= {...obj3, ...obj4}

console.log(Object.keys(obj1));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
//all the above methods would return an array

//to check if any key is present or not 
console.log(obj2.hasOwnProperty("name"));

//when we get any data from backend, it's in the form of array of objects
const web=[{
    id: "016969"
},{
    name: "lorem"
}]
console.log(web[1].name);

/****** Object Destructuring, API and JSON  *******/
const data= {
    naam: "Stereo22",
    id: "2182"
}
console.log(data.naam); //we can access element this way
const {naam}= data      //and by destructuring too
console.log(naam);
const {naam: name}=data //can also change name as we want(alias)
console.log(name);

//A JSON(Javascript Object Notation) is a human readable lihtweight format to transport(b/w app and web) and store data. It's usually an object but sometimes it could be an array too
// {
//     "name": "Prad",
//     "age": 23
// }
//in JSON format the key is usually a string but value could be anything

//to get any random API go to randomuser.me
// and to study that API go to JSON formatter






