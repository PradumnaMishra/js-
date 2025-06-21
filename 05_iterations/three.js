//for in loop
const cars= {
    BMW: "German",
    Lamborghini: "Italian",
    Hyundai: "Korean"
}
for (const keys in cars) {
    console.log(keys);
}
//to print the values. just do object[key]
for (const keys in cars) {
    console.log(cars[keys]);
}

//trying for in loop on arrays
const arr= ['p', 'q', 'r']
for (const key in arr) {
    console.log(key);         //would print just the indices
}
for (const key in arr) {
    console.log(arr[key]);         //would print the elements
}

//trying the forin loop on maps
const mp= new Map();
mp.set("DL", "Delhi")
mp.set("UK", "Uttarakhand")
mp.set("KA", "Karnataka")

for (const key in mp) {
   console.log(key);       //won't work coz maps aren't iterable that way
}
