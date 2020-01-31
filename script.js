function error_code(){
var correct_way=/^[A-Za-z]^/
var t= document.getElementById("name").value;
var email=document.getElementById("email").value;
var message=document.getElementById("message").value
if(t===""){
    document.getElementById("namee").innerHTML="Please enter your name";
}
else if(t.match(correct_way)){
    document.getElementById("name").innerHTML="Incorrect input";
}
}
