//this is all about .map() object of JS.
//Used majorly for performing operations on array elements
//returns an array usually
const num= [2, 4, 6, 8, 10]
const newNum= num.map( (val) => (val+10) )//if I had taken '{}' then i would have to put a return as well coz this would open a new scope
console.log(newNum);

//could also do nesting of these methods, but always remember that the new changed array will be the input for next method
const num2= num.map( function(val){return val+2;}).map((val)=>{return val*10}).filter( (val) => val>50 )
console.log(num2);

