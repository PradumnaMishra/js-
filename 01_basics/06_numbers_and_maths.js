const num= 69
console.log(num)

const num1= new Number(96) //to explicitly declare a number
console.log(num1)

const num2= 45.678
const num3= num2.toFixed(2) //fixes a value to a particular place after decimal and always returns a string
console.log(num3)
console.log(num2.toPrecision(4)) //rounds off the whole number to a specified number of significant digits and always returns a string
console.log(typeof(num3)) //would return a string
const cost= 100000
console.log(cost.toLocaleString('en-IN')) //makes it readable for a particular region

/**     maths     ***/
console.log(Math) //returns an object having different methods
console.log(Math.abs(-6 +4)) //neglects the negative of resultant
console.log(Math.floor(6.9)) //returns the previous smaller number
console.log(Math.ceil(6.9)) //returns the next greater number
console.log(Math.max(4,1,5,6))
console.log(Math.min(-6,-5,-7,-1))
console.log(Math.round(4.7))
console.log(Math.random()) //returns a random number between 0 & 1
console.log(Math.random()*10) //to make that number between 1 & 10
console.log(Math.random()*10 +1)//for edge cases where random number is somthng like 0.069

const min= 10
const max= 20
const formula = Math.floor(Math.random()*(max-min+1))+min //used to make the random based on a given range
console.log(formula)

