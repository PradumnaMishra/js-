// this one is all about for loop, break and continue, nothing new..same old shiit
let age= 34
for (let i = age; i < 35 ; i++) {
    age++;
}
console.log(age);

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop :${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

