const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const conPass = document.getElementById('con-pass');
const phone = document.getElementById('pho-num');
const registerBtn = document.getElementById('butnreg');
const form = document.getElementById('regForm');
const successMsg = document.getElementById('success-msg');
const togglePassword = document.getElementById('toggle-password');
const toggleConPass = document.getElementById('toggle-con-pass');

              //  Store data starting all are false
let fnameValid = false;
let lnameValid = false;
let emailValid = false;
let passwordValid = false;
let conPassValid = false;
let phoneValid = false;

             //  First Name Sectiom
function validateFname() {
    const value = fname.value.trim();

    if (value === '') {
        document.getElementById('fname-error').textContent = 'First name is required';
        fname.classList.remove('valid');
        fname.classList.add('invalid');
        fnameValid = false;
    } else if (value[0] !== value[0].toUpperCase()) {
        document.getElementById('fname-error').textContent = 'First letter must be capital';
        fname.classList.remove('valid');
        fname.classList.add('invalid');
        fnameValid = false;
    } else {
        document.getElementById('fname-error').textContent = '';
        fname.classList.remove('invalid');
        fname.classList.add('valid');
        fnameValid = true;
    }

    checkAllValid();
}

                //  Last Name Sectiom
function validateLname() {
    const value = lname.value.trim();

    if (value === '') {
        document.getElementById('lname-error').textContent = 'Last name is required';
        lname.classList.remove('valid');
        lname.classList.add('invalid');
        lnameValid = false;
    } else if (value[0] !== value[0].toUpperCase()) {
        document.getElementById('lname-error').textContent = 'First letter must be capital';
        lname.classList.remove('valid');
        lname.classList.add('invalid');
        lnameValid = false;
    } else {
        document.getElementById('lname-error').textContent = '';
        lname.classList.remove('invalid');
        lname.classList.add('valid');
        lnameValid = true;
    }

    checkAllValid();
}

                     //  Email Sectiom
function validateEmail() {
    const value = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        email.classList.remove('valid');
        email.classList.add('invalid');
        emailValid = false;
    } else if (emailPattern.test(value) === false) {
        document.getElementById('email-error').textContent = 'Enter a valid email address';
        email.classList.remove('valid');
        email.classList.add('invalid');
        emailValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
        email.classList.remove('invalid');
        email.classList.add('valid');
        emailValid = true;
    }

    checkAllValid();
}

                    // Password Section 
function validatePassword() {
    const value = password.value;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const errorBox = document.getElementById('password-error');

    if (value === '') {
        errorBox.textContent = 'Password is required';
        errorBox.className = 'error';
        password.classList.remove('valid');
        password.classList.add('invalid');
        passwordValid = false;
    } else if (value.length < 8 || specialCharPattern.test(value) === false) {
        errorBox.textContent = 'Password has atleast 8 characters and special character';
        errorBox.className = 'error';
        password.classList.remove('valid');
        password.classList.add('invalid');
        passwordValid = false;
    } else {
        password.classList.remove('invalid');
        password.classList.add('valid');
        passwordValid = true;

        if (specialCharPattern.test(value) === true) {
            errorBox.textContent = 'Strong';
            errorBox.className = 'error strong';
        } else {
            errorBox.textContent = 'Weak';
            errorBox.className = 'error weak';
        }
    }

    checkAllValid();

                  // Agar confirm password already filled hai, usay bhi recheck karo
    if (conPass.value !== '') {
        validateConPass();
    }
}

                      // Confirm Pssword Sectiom
function validateConPass() {
    const value = conPass.value;

    if (value === '') {
        document.getElementById('con-pass-error').textContent = 'Please confirm your password';
        conPass.classList.remove('valid');
        conPass.classList.add('invalid');
        conPassValid = false;
    } else if (value !== password.value) {
        document.getElementById('con-pass-error').textContent = 'Passwords do not match';
        conPass.classList.remove('valid');
        conPass.classList.add('invalid');
        conPassValid = false;
    } else {
        document.getElementById('con-pass-error').textContent = '';
        conPass.classList.remove('invalid');
        conPass.classList.add('valid');
        conPassValid = true;
    }

    checkAllValid();
}

                      //  Phone number Sectiom
function validatePhone() {
    const value = phone.value.trim();
    const phonePattern = /^[0-9]{11}$/;

    if (value === '') {
        document.getElementById('pho-num-error').textContent = 'Phone number is required';
        phone.classList.remove('valid');
        phone.classList.add('invalid');
        phoneValid = false;
    } else if (phonePattern.test(value) === false) {
        document.getElementById('pho-num-error').textContent = 'Phone number must be exactly 11 digits';
        phone.classList.remove('valid');
        phone.classList.add('invalid');
        phoneValid = false;
    } else {
        document.getElementById('pho-num-error').textContent = '';
        phone.classList.remove('invalid');
        phone.classList.add('valid');
        phoneValid = true;
    }

    checkAllValid();
}

                        //  Register Button Sectiom
function checkAllValid() {
    if (fnameValid === true && lnameValid === true && emailValid === true && passwordValid === true && conPassValid === true && phoneValid === true) {
        registerBtn.disabled = false;
    } else {
        registerBtn.disabled = true;
    }
}

                       // Real-time validation
fname.addEventListener('input', validateFname);
lname.addEventListener('input', validateLname);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
conPass.addEventListener('input', validateConPass);
phone.addEventListener('input', validatePhone);

                     // Show/Hide Password  Section
togglePassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        togglePassword.textContent = 'Hide';
    } else {
        password.type = 'password';
        togglePassword.textContent = 'Show';
    }
});
                    // Show/Hide Confirm Password  Section
toggleConPass.addEventListener('click', () => {
    if (conPass.type === 'password') {
        conPass.type = 'text';
        toggleConPass.textContent = 'Hide';
    } else {
        conPass.type = 'password';
        toggleConPass.textContent = 'Show';
    }
});

                    // Form Submit  Section
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userData = {
        firstName: fname.value.trim(),
        lastName: lname.value.trim(),
        email: email.value.trim(),
        password: password.value,
        phone: phone.value.trim()
    };

    console.log(userData);

    successMsg.textContent = 'Registration successful!';

    setTimeout(() => {
    successMsg.textContent = '';
      }, 5000);

    form.reset();

    registerBtn.disabled = true;

    fname.classList.remove('valid', 'invalid');
    lname.classList.remove('valid', 'invalid');
    email.classList.remove('valid', 'invalid');
    password.classList.remove('valid', 'invalid');
    conPass.classList.remove('valid', 'invalid');
    phone.classList.remove('valid', 'invalid');
    })