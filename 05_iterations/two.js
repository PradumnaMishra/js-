// for of loop
const arr= [4, 2, 1, 0]
for (const index of arr) {
    console.log(`Elements are: ${index}`);
}
//just remember the syntax of the loop and rest will be taken care of. Works on arrays, strings

const name= "Pradumna Mishra"
for (const iterate of name) {
    console.log(`each letter is: ${iterate}`);
}

//Maps
const mp= new Map();
mp.set("DL", "Delhi")
mp.set("UK", "Uttarakhand")
mp.set("KA", "Karnataka")

for (const [key,value] of mp) {
    console.log(value);
    console.log(key);
    console.log(`State registration code for ${value} is: ${key}`);
}

//this nomenclature could be anything forof(const ___ of object)

//trying forof loop on objects

const cars= {
    BMW: "German",
    Lamborghini: "Italian",
    Hyundai: "Korean"
}
for (const [keys,value] of cars) {
    console.log(keys);
}
//objects won't work with this loop