//step-1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2: get the email address
    const email = document.getElementById('email-field');
    const emailName = email.value;
    //step-3: get the Password
    const pass = document.getElementById('password-field');
    const userPass = pass.value;
    // console.log(emailName, userPass);
    //step-4: Verify email password
    if (emailName === 'abc@gmail.com' && userPass === '123') {
        // console.log('Valid user');
        window.location.href = 'banking.html'
    }
    else {
        // console.log('invalid User');
        alert('Please input valid UserName and Password')
    }
})