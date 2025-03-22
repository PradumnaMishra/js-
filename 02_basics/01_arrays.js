const arr= [0, 1, 2, 3, 4, 5]
const stArr= new Array('hey')
console.log(stArr);
//array takes shallow copy i.e. a copy of an object takes reference from the source object as well (like heap)

/* SOME ARRAY METHODS */
arr.push(6)
arr.pop()
arr.unshift(6) //puts element from front
arr.shift() //deletes element from front
console.log(arr)
console.log(arr.includes(3)); //guves a boolean value
console.log(arr.join()); //converts the elements into string


/*** Slice and Splice ***/
const newArr= [2, 4, 6, 8, 10]
console.log(newArr.slice(1,3)) // doesn't take the last argument as range
console.log(newArr) //no change in the original array

const newArr2= [1, 3, 5, 7, 9]
console.log(newArr2.splice(1,3)) //takes the last arg as range too
console.log(newArr2) //causes change in og array too

/********* DIFFERENCE B/W SPLICE AND SPLICE *********/

//   SLICE                  SPLICE
// 1.Does not take last       Takes last arg as 
// arg asrange              range too

// 2.Doesn't cause any        Causes change in original
// changein original        array too
// array
