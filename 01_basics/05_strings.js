const name= "Pradumna"
const age= 10
console.log('His name is '+ name + ' and his age is '+age) //not efficient way to concatinate strings

const info= `His name is ${name} and his age is ${age}` //efficinte way 
// using this "``" for concatenating is called stringinterpolation
console.log(info)

const naam= new String("Prad") //another way to construct a string also, string is an object made this way
console.log(naam.__proto__) //gives a prototype having all the methods of strings
console.log(name.length)
console.log(naam.charAt(0))
console.log(naam.indexOf('d'))
const newStr= name.substr(0,2)
console.log(newStr)

const newStr2= name.slice(-8,2) //similar to substring but it takes negative integers too for argument
console.log(newStr2)

const newName= "  Prad "
console.log(newName)
console.log(newName.trim())

const newName2= "Prad-Kum-Mish"
console.log(newName2.replaceAll('-','_'))
console.log(newName2.split('-')) //to split the data based on some character, into an array