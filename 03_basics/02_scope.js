var c= 300
if(true){
    const a= 30
    let b= 20
    var c= 10
}
// console.log(a);
// console.log(b);
console.log(c); // this would work because var doesn't understand the scope

function one(){
    const name= "Prad"
    function two(){
        console.log("The name is ", name); //this would access the element from its parent coz that would be global for this function
        const age= 23
    }
    console.log(`Age is ${age}`); //would give error coz we are trying to access something that is limited to the child(nested) function and can't be accessed
    two();
}
one();

func1();
function func1(){
    console.log("Hi, I can be called before the definition");
}
func2()
const func2 = function(){ //also called expression
    console.log("I can't be accessed before definition");
}


