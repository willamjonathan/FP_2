function myfunct(){
    let email2 = document.getElementById("email2").value;
    let pass2 = document.getElementById("pass2").value;
    console.log(email2, pass2);
// if the email is not equal to williamjonathan@gmail.com and the password is not equal to password, there will be an alert saying failed to log in
    if (email2 !== "williamjonathan@gmail.com" || pass2 !== "password"){
        alert("Failed to login, please check your email and password")
        }
    else{
        alert("Login successful, please click the forward arrow")
    }

    
}
