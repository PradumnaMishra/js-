//Since arrays, strings and functions are all objects, let's take an example for creating a method for a string
const name= "Pradumna  "
//I need to know the actual length of the string, so we'll make a method that could do so

//now let's see if object is the superior of all then if we make a global method then would it work for arrays or functions as well?

const profession=['cop', 'doctor']
const service={
    cop: "lawEnforcement",
    doctor: "treatment",
    data: function(){
        console.log(`a cop's duty is ${this.cop}`);
    }
}
Object.prototype.newProf= function(){
    console.log("Added new profession in whole object");
}
service.newProf()
profession.newProf() //it's an array but still the method has been added

//inheritance

//old syntax
const company={
    companyy: "google"
}
const naam={
    name: "Prad"
}

const job={
    kaam: "developer"
}

const eId={
    empId: 6969,
    //to inherit anyone's property we used to add it like this:-
    __proto__:naam
}
console.log(eId.name); //property inherited
//could also do it like
job.__proto__=naam
console.log(`the guy with job of ${job.kaam} is known by the name ${job.name}`);


//modern syntax

Object.setPrototypeOf(company,naam) 
console.log(`${company.companyy} is the company where ${company.name} works`);


//now to complete the job that we started in the beginning
String.prototype.getLength= function(){
    console.log(this);
    console.log(`The length of ${this} is: ${this.trim().length}`);
}
name.getLength()