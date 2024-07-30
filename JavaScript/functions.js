var votingeligibility = () =>{
    var age=18;
    if(age>=18){
        console.log("Eligible to vote");
    }
    else{
        console.log("Not eligible to vote");
    }
}


votingeligibility();
var votingeligibility = () =>{
    var age=18;
    if(age>=18){
        return("Eligible to vote");
    }
    else{
        return("Not eligible to vote");
    }
}
console.log(votingeligibility());


var votingeligibility = (age) =>{
    if(age>=18){
        console.log("Eligible to vote");
    }
    else{
        console.log("Not eligible to vote");
    }
}
votingeligibility(18);

 
var votingeligibility = (age) =>{
    if(age>=18){
        return("Eligible to vote");
    }
    else{
        return("Not eligible to vote");
    }
}
console.log(votingeligibility(18));
