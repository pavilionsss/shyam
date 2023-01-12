function validate() {
    const username=document.getElementById("username");
    const pwd=document.getElementById("pwd");
    const conpwd=document.getElementById("conpwd");
    const mobnum=document.getElementById("mobnum");
    const email=document.getElementById("email");
    const s1=document.getElementById("s1");
    const s2=document.getElementById("s2");
    const s3=document.getElementById("s3");
    const s4=document.getElementById("s4");
    const s5=document.getElementById("s5");

// USERNAME VALIDATE
if (username.value=="") {
        s1.innerHTML="**Please fill the username"
       
    }
else if((username.value.length<=2) || (username.value.length>10)){
        s1.innerHTML="**username must be between 3 and 10"
    }
     else {
        s1.innerHTML=""
    }


// PASSWORD VALIDATE

    if ( pwd.value=="") {
        s2.innerHTML="**Please enter the password"
       
    }
    else if((pwd.value.length<=5)||(pwd.value.length>20)){
        s2.innerHTML="**password length must be 6 and 20"
    }
    else {
        s2.innerHTML=""
    }

// CONFIRM PASSWORD VALIDATE

if (conpwd.value=="") {
    s3.innerHTML="**re-enter password"
    
}
else if(pwd.value!=conpwd.value){
    s3.innerHTML="**password didn't match"
}
else {
    s3.innerHTML=""
}

// MOBILE NO. VALIDATE

if (mobnum.value=="") {
    s4.innerHTML="**please enter mobile no."
   
}
else if(isNaN(mobnum.value)){
    s4.innerHTML="**please enter a valid number"
}
else if(mobnum.value.length!=10){
    s4.innerHTML="**please enter 10 digit mobile number"
}
else {
    s4.innerHTML=""
}

// EMAIL-ID VALIDATION

if (email.value=="") {
   s5.innerHTML="**please enter email-id" 
} 
// else if(email.value.indexOf)

else {
    s5.innerHTML=""
}
}
