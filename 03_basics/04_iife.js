// IIFE stands for Immediately Invoked Function Expressions
// Used to save any function from getting polluted by any variable of global scope
// Syntax is easy, just enclose function definition in a '()' and then for calling add another pair of '()'. (function)()


function one(){
    console.log("normal function");
}
one();

(function two(){
    console.log("A named IIFE function");
})();

( () => {
    console.log("An unnnamed IIFE function");
})();

//it is necessary to add a semicolon after function coz otherwise it does not know when to stop 

( (name) => {
    console.log(name);
})("Prad")

