let valid = () => {

    let errname = document.querySelector('#name').value.trim();
    let errnumber = document.querySelector('#number').value.trim();
    let erremail = document.querySelector('#email').value.trim();
    let errpass = document.querySelector('#passward').value.trim();
    let errcpass = document.querySelector('#cpassward').value.trim();

    let enam = document.querySelector('#errname');
    let enumber = document.querySelector('#errnumber');
    let eemail = document.querySelector('#erremail');
    let epass = document.querySelector('#errpassward');
    let ecpass = document.querySelector('#errcpassward');

    // Name validation
    if (errname === "") {
        enam.innerHTML = "Please enter your name";
        enam.style.color = "red";
        return false;
    }


    // Number validation
    else  if (errnumber === "") {
        enumber.innerHTML = "Please enter your number";
        enumber.style.color = "red";
        return false;
    }

    // Email validation
     else if (erremail === "") {
        eemail.innerHTML = "Please enter your email";
        eemail.style.color = "red";
        return false;
    }

    // Password validation
     else if (errpass === "") {
        epass.innerHTML = "Please enter your password";
        epass.style.color = "red";
        return false;
    }

    // Confirm password validation
     else if (errcpass === "") {
        ecpass.innerHTML = "Please enter confirm password";
        ecpass.style.color = "red";
        return false;
    }

    // Check password match
     else if (errpass !== errcpass) {
        ecpass.innerHTML = "Passwords do not match!";
        ecpass.style.color = "red";
        return false;
    }
// agr number 10 digits ka nhi h to  
    else if(errnumber.length!=10){
        enumber.innerHTML = "Please enter your  valid number";
        return false;
}
else if(isNaN(errnumber)){
        enumber.innerHTML = "Please enter only  number";
        errnumber.style.color="red";
         return false;
}
else if(!(erremail.includes('@')&&erremail.includes('.com')))
{
     eemail.innerHTML = "Please enter valid email";
      return false;
}
else if(!(errpass.match(/[1234567890]/)&&
errpass.match(/[!@#$%^&*]/)
&& errpass.match(/[a-z]/)
&& errpass.match(/[A-Z]/)))
{
       epass.innerHTML = "Please enter  valid  password";
       return false; 
}
else if(errpass!=errcpass){
     epass.innerHTML = "Please enter  same  password";
     return false;
}


localStorage.SeteItem("nam",errname)
localStorage.SeteItem("num1",errnumber)
localStorage.SeteItem("email1",erremail)
localStorage.SeteItem("pass1",errpass)
}

