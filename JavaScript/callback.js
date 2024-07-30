/*function formvalidation(){
    setTimeout(() =>{
    console.log("form validation called")
    formvalidationcompleted()
    },2000);
}
function formvalidationcompleted(){
    console.log("form validation completed")
}
formvalidation()*/
function formvalidation(FVC){
    console.log("validation completed")
    FVC()
}
function formvalidationcompleted(){
    console.log("form validation completed")
}
formvalidation(formvalidationcompleted)
