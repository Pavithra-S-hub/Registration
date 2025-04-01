function verifyLogin() {  
    if(validateName() && validatePhone() && validateEmail() && validatePassword() && validateAddress()){
        let msg=document.getElementById("message");
        msg.innerText="Registration Successful!";
        msg.style.color='green';
        return true;
    }
}
function validateName(){
    let name=document.getElementById("user").value;
    if(name.trim()===""){
        alert("Name field cannot be empty!");
        return false;
    }
    return true;
}
function validatePassword(){
    let password=document.getElementById("password").value;
    let regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!regex.test(password)){
        alert("Password must be atleast eight characters with atleast one number");
        return false;
    }
    return true;
}
function validateAddress(){
    let address=document.getElementById("address").value;
    if(address.trim()===""){
        alert("Address field cannot be empty!");
        return false;
    }
    return true;
}
function validatePhone(){
    let phone=document.getElementById("phone").value;
    let regex=/^\d{10}$/;
    if(!regex.test(phone)){
        alert("Phone number must be exactly 10 digits");
        return false;
    }
    return true;
}
function validateEmail(){
    let email=document.getElementById("email").value;
    let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){
        alert("Invalid email format");
        return false;
    }
    return true;
}

