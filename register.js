const form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault()
});

function validate_form(){
    var num = document.getElementById("num").value;
     var regiex = /^[6-9]\d{9}$/;
     if(regiex.test(num)){
        document.getElementById("msg_num").innerHTML = "";
        document.getElementById("msg_num").style.visibility = "visible";
        document.getElementById("num").style.borderColor = "green";
     }
     else{
        document.getElementById("msg_num").innerHTML = "Invalid";
        document.getElementById("msg_num").style.visibility = "visible";
        document.getElementById("msg_num").style.color = "red";
        document.getElementById("num").style.borderColor = "red";
     }

     var lname = document.getElementById("lname").value.trim();
     var regiex = /^([A-Za-z]+)$/;  
     if(regiex.test(lname)){
        document.getElementById("msg").innerHTML = "";
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("lname").style.borderColor = "green";
     }
     else{
        document.getElementById("msg").innerHTML = "Invalid";
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("msg").style.color = "red";
        document.getElementById("lname").style.borderColor = "red";
     }

     var email = document.getElementById("mail").value.trim();
     var regiex = /^([a-zA-z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,9})$/;
     if(regiex.test(email)){
        document.getElementById("msg_email").innerHTML = "";
        document.getElementById("msg_email").style.visibility = "visible";
        document.getElementById("mail").style.borderColor = "green";
     }
     else{
        document.getElementById("msg_email").innerHTML = "Invalid";
        document.getElementById("msg_email").style.visibility = "visible";
        document.getElementById("msg_email").style.color = "red";
        document.getElementById("mail").style.borderColor = "red";
     }

     var fname = document.getElementById("fname").value.trim();
     var regiex = /^[A-Za-z\s]{3,30}$/;
     if(regiex.test(fname)){
        document.getElementById("msg_name").innerHTML = "";
        document.getElementById("msg_name").style.visibility = "visible";
        document.getElementById("fname").style.borderColor = "green";
     }
     else{
        document.getElementById("msg_name").innerHTML = "Invalid";
        document.getElementById("msg_name").style.visibility = "visible";
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("msg_name").style.color = "red";
     }

     
     var pass1 = document.getElementById("pass1").value.trim();
     var regiex =  /^([A-Za-z0-9]+){8,15}$/;
     if(regiex.test(pass1)){
        document.getElementById("msg_pass1").innerHTML = "";
        document.getElementById("msg_pass1").style.visibility = "visible";
        document.getElementById("pass1").style.borderColor = "green";
     }
     else{
        document.getElementById("msg_pass1").innerHTML = "Invalid";
        document.getElementById("msg_pass1").style.visibility = "visible";
        document.getElementById("pass1").style.borderColor = "red";
        document.getElementById("msg_pass1").style.color = "red";
     }

     
     var pass2 = document.getElementById("pass2").value.trim();
     if(pass1 == ""){
      document.getElementById("msg_pass2").innerHTML = "Invaild";
      document.getElementById("msg_pass2").style.visibility = "visible";
      document.getElementById("pass2").style.borderColor = "red";
      document.getElementById("msg_pass2").style.color = "red";
   }
     else if(pass1 === pass2){
        document.getElementById("msg_pass2").innerHTML = "";
        document.getElementById("msg_pass2").style.visibility = "visible";
        document.getElementById("pass2").style.borderColor = "green";
     }
     else{
        document.getElementById("msg_pass2").innerHTML = "Invalid";
        document.getElementById("msg_pass2").style.visibility = "visible";
        document.getElementById("pass2").style.borderColor = "red";
        document.getElementById("msg_pass2").style.color = "red";
     }

     var dob = document.getElementById("dob").value;
     if(dob == ""){
        document.getElementById("msg_date").innerHTML = "Invalid";
        document.getElementById("msg_date").style.visibility = "visible";
        document.getElementById("msg_date").style.color = "red";
        document.getElementById("dob").style.borderColor = "red";
     }
     else{
        document.getElementById("msg_date").innerHTML = "";
        document.getElementById("msg_date").style.visibility = "visible";
        document.getElementById("dob").style.borderColor = "green";
     }

     var gender = document.getElementById("gender_val").value;
     if(gender =="male" || gender =="female" || gender =="others"){
        document.getElementById("msg_gen").innerHTML = "";
        document.getElementById("msg_gen").style.visibility = "visible";
        document.getElementById("gender_val").style.borderColor = "green";
     }
     else{    
        document.getElementById("msg_gen").innerHTML = "Invalid"
        document.getElementById("msg_gen").style.visibility = "visible";
        document.getElementById("msg_gen").style.color = "red";
        document.getElementById("gender_val").style.borderColor = "red";
     }
     
     

     
};
