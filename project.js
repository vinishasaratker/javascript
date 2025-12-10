let valid = () => {
    let name = document.querySelector('#namee').value.trim();
    let email = document.querySelector('#email').value.trim();
    let number = document.querySelector('#number').value.trim();
    let pass = document.querySelector('#passward').value.trim();
    let cpass = document.querySelector('#cpass').value.trim();

    let errname = document.querySelector('#errname');
    let erremail = document.querySelector('#erremail');
    let errnumber = document.querySelector('#errnumber');
    let errpass = document.querySelector('#errpass');
    let errcpass = document.querySelector('#errcpass');

    // Name
    if (name === "") {
        errname.innerHTML = "Please enter your name";
        errname.style.color = "red";
        return false;
    }

    // Email empty
    if (email === "") {
        erremail.innerHTML = "Please enter your email";
        erremail.style.color = "red";
        return false;
    }

    // Number empty
    if (number === "") {
        errnumber.innerHTML = "Please enter your number";
        errnumber.style.color = "red";
        return false;
    }

    // Number length
    if (number.length != 10) {
        errnumber.innerHTML = "Please enter a valid number";
        errnumber.style.color = "red";
        return false;
    }

    // Password empty
    if (pass === "") {
        errpass.innerHTML = "Please enter your password";
        errpass.style.color = "red";
        return false;
    }

    // Password format
    if (!(pass.match(/[0-9]/) &&
          pass.match(/[!@#$%^&*]/) &&
          pass.match(/[a-z]/) &&
          pass.match(/[A-Z]/))) {

        errpass.innerHTML = "Please enter valid password";
        errpass.style.color = "red";
        return false;
    }

    // Confirm password empty
    if (cpass === "") {
        errcpass.innerHTML = "Please confirm your password";
        errcpass.style.color = "red";
        return false;
    }

    // Password match
    if (pass !== cpass) {
        errcpass.innerHTML = "Passwords do not match";
        errcpass.style.color = "red";
        return false;
    }
};

