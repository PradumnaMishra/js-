//this one is all about .reduce()
//usually returns single value
//it has 2 arguments called (accumulator, current value)
//initially we need to add some value for accumulator
//syntax - array.reduce((acc, currval)=>(), ValForAcc)

const num= [1, 2, 3, 4, 5, 6]
const numSum= num.reduce( (acc,currval) => acc+currval, 0 )
console.log(numSum);
//let's try doing this by forEach
let init=0;
const numAddForeach= num.forEach( (val)=> {
    init= init+val;
} )
console.log(init);

