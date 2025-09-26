//when there is a function calling within a function then how this works and how is the context obtained.
function name(username){
    this.username=username;
}

function info(username, email, password){
    // name(username); //this wouldn't work, only the function would execute but its reference would be lost, hence us .call and give a this of own
    name.call(this,username)
    name()
    this.email=email;
    this.password=password;
}

const data=new info("prad", "hi@gmail.com", "PASS")
console.log(data);
