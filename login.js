const form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault()
});

function validate_form(){
    var email = document.getElementById("mail").value.trim();
     var regiex = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,9})$/;
     if(regiex.test(email)){
        document.getElementById("msg_email").innerHTML = "";
        document.getElementById("msg_email").style.visibility = "visible";
        document.getElementById("mail").style.borderColor= "green";
     }
     else{
        document.getElementById("msg_email").innerHTML = "Invalid";
        document.getElementById("msg_email").style.visibility = "visible";
        document.getElementById("msg_email").style.color = "red";
        document.getElementById("mail").style.borderColor = "red"
     }


     var pass = document.getElementById("pass").value.trim();
     var regiex = /^([A-Za-z0-9]+){8,15}$/;
     if(regiex.test(pass)){
        document.getElementById("msg_pass").innerHTML = "";
        document.getElementById("msg_pass").style.visibility = "visible";
        document.getElementById("pass").style.borderColor= "green";
     }
     else{
        document.getElementById("msg_pass").innerHTML = "Invalid";
        document.getElementById("msg_pass").style.visibility = "visible";
        document.getElementById("msg_pass").style.color = "red";
        document.getElementById("pass").style.borderColor = "red"
     }

};