// internal functioning of an object could be changed and we'll see how

//But that doesn't happen with every object, like Math.PI won't be overwritten

console.log(Math.PI);
PI= 4;
//won't do a thing

console.log(Math.PI);
//this can be seen by using a property
console.log(Object.getOwnPropertyDescriptor(Math, "PI")) //(Object, "key")

//let's make an object of our own and do changes in that
const data= {
    name: "prad",
    id: 63,
    job:'developer',
    isWorking: true
}
console.log(Object.getOwnPropertyDescriptor(data, "name"));
// { value: 'prad', writable: true, enumerable: true, configurable: true }

//let's change its enumerable property, but first try to enumerate over it
//object couldn't be iterated on its own, use Object.entries("objectName")
for (let [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
}

//change its property of being enumerated
Object.defineProperty(data, "name",{
    enumerable: false
})
for (let [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
}