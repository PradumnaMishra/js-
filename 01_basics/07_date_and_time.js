let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
let newDate= new Date(2023, 0, 12, 12, 30) //in this format 0 means Jan
console.log(newDate.toDateString())
let newDate2= new Date("01-23-2009") // can also make it as yyyy-mm-dd and in this format we start with 1
console.log(newDate2)
const timestamp= Date.now() //to get the timestamp of time till now
console.log(newDate2.getTime())
console.log(Math.floor(timestamp/1000)) //to get time in milliseconds

const newDate3= new Date()
console.log(newDate3.getMonth()+1) //we do +1 coz it starts with 0 and to make it readable we do it this way
console.log(newDate3.getDate())

//some methods to use
console.log(newDate3.toLocaleString('default',{
    weekday: "long"
}))

