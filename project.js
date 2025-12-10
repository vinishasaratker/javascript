let valid = () => {
    let errname = document.querySelector('#namee').value.trim();
    let erremail = document.querySelector('#email').value.trim();
    let errnumber = document.querySelector('#number').value.trim();
    let errpass = document.querySelector('#passward').value.trim();
    let errcpass = document.querySelector('#cpass').value.trim();

    let enam = document.querySelector('#errname');
    let eemail = document.querySelector('#erremail');
    let enumber = document.querySelector('#errnumber');
    let epass = document.querySelector('#errpass');
    let ecpass = document.querySelector('#errcpass');

    if (errname === "") {
        enam.innerHTML = "Please enter your name";
        return false;
    }
    else if (erremail === "") {
        eemail.innerHTML = "Please enter your email";
        return false;
    }
     else if (errnumber === "") {
        enumber.innerHTML = "Please enter your number";
        return false;
    }
     else if (errpass === "") {
        epass.innerHTML = "Please enter your password";
        return false;
    }
     else if (errcpass === "") {
        ecpass.innerHTML = "Please confirm your password";
        return false;
    }

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
}
