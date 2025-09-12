//used for performing aysnc tasks
const promise1= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task completed');
        resolve()
    },1000)
})
//if a promise is made then it has to be consumed as well, by calling resolve()[if it's about .then] or reject()[if it's about .now]
promise1.then(function(){
    console.log("promise consumed");
})

//can make promises without holding it in a container/variable
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("async task2 completed");
        reject()
    },1000)
}).catch(function(){
    console.log("promise2 consumed");
    
})

//now we will try an pass somwthing in the resolve/reject
new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({language: "Javascript", tutor:'HiteshChaudhary'});
        
    },1000)
}).then(function(info){
    console.log(info);
    
})

//to go deeper while accessing we need to chain this .then
const promise4= new Promise(function(resolve,reject){
     setTimeout(function(){
        const error= true;
        if(error){

            resolve({language: "Javascript", furtherInfo :{jobTitle: "frontend", jobid: 32123},tutor:'HiteshChaudhary'});
            resolve();
        }else{
            console.log("Error found");
            reject()
        }
        
    },1000)
})
promise4.then(function(info){
    return info.furtherInfo;
}).then(function(furtherInfo){
    return furtherInfo.jobTitle;
}).then(function(jobTitle){
    console.log(jobTitle);    
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("something happened either then or catch");
    
})
//.finally is like a notation that says something has happened, kind of a default

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//aync await could not handle errors gracefully that's why we need to wrap it in ty catch block essentially
async function consumePromise5(){
    try {
        const response= await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}
consumePromise5();

//now we will try to fetch something
async function fetching() {
    try {
        const api= await fetch('https://api.github.com/users/PradumnaMishra')
        const cleanApi=await api.json();
        console.log(cleanApi);
    }
        
    catch (error) {
        console.log("error");
        
    }
}
fetching();

//now we'll do the same by then and catch
fetch("https://api.github.com/users/PradumnaMishra")
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("error found");
    
})