const info= {
    name: "Prad",
    infor: function(){
        console.log("name is ",this.name); //this is used for current context
        console.log(this);
    }
}
// info.infor()
// info.name= "Darp" //context has been changed
// info.infor()      //hence different output
console.log(this); // this(node) would give empty object because there is no contect but in a browser it will show a window object 

// function random(){
//     console.log(this); //give various things
// }
// random()


// function random(){
//     const name= "Kusha"
//     console.log(this.name); //would be undefined coz current context work in objects only
// }
// random()


const random = () =>{
    // const name= "Kusha"
    console.log(this); //this would be undefined as well coz this doesn't work with arrow functions
}
random()

const add= (num1, num2) =>{
    return(num1+num2)
}
console.log(add(3,1))

//we can do this implicitly too and no need to write return if its a single line of return
const add2= (num1, num2) => num1+num2
console.log(add2(3,2))

const add3= (num1, num2) => (num1 + num2) //can add a parenthesis as well
console.log(add3(2,6));

const data= () => ({username: "Prad"}) //cant add object without wrapping in ()
console.log(data())