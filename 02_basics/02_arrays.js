const secA= ["Ajay", "Vicky", "Rahul"]
const secB= ["Amar", "Rohan", "Deepak"]
// secA.push(secB); //this would not do the concatenation correctly and also it would cause the change in the original array
// console.log(secA)

const combineArr= secA.concat(secB) //concat does not change original array rather it provides new array
console.log(combineArr);

console.log(...secA, ...secB); //we use spread operator("...") to spread all the elements of the array and the elements are no longer in an array. We use it often instead of concat()
console.log(secA);

const arr1= [1, [2, 3], [4, [5, 6]]]
//to take all the elements out of such arrays we use .flat()
console.log(arr1.flat(Infinity)); //can also give any depth else than infinity

console.log(Array.isArray("Yo")); //to check if any data taken from web is an array or not
console.log(Array.from("Yo")) //to convert that data taken into array
console.log(Array.from({name: "Pradumna"})); //this would give empty object coz it is not able to understad the data in it amd you have to specify what are you expecting to be turned into array(key or value)

const ele1= 100
const ele2= 200
const ele3= 300
const togetherArr= Array.of(ele1, ele2, ele3)
console.log(togetherArr);
// .of is used to convert indiviual elements into array while .from is used to convert an interable object into array


